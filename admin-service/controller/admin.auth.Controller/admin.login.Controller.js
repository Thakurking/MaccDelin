const jwt = require("jsonwebtoken");
require("dotenv").config();

const AdminModel = require("../../../Helper/DB.Helper/Admin.Service.DB/adminSchema");
const {
  mongooseErrorHandler,
} = require("../../../Helper/Error/mongooseErrorHelper");

exports.AdminLogin = async (req, res) => {
  const { Email, Password } = req.body;
  try {
    const isAdmin = await AdminModel.findOne({ Email }).select("+Password");
    if (!isAdmin) {
      return res.json({ message: "User Not Found", status: false });
    }
    const isPasswordVerified = await isAdmin.passwordVerification(Password);
    if (!isPasswordVerified) {
      return res.json({ message: "Wrong Email Or Password", status: false });
    }
    let payload = {};
    payload.isAdmin = true;
    payload.admin = isAdmin._id;
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "8h",
    });
    if (!token) {
      return res.json({ message: "Token Not Created", status: false });
    }
    return res
      .cookie("token", token, {
        expires: new Date(Date.now() + 8 * 3600000),
        httpOnly: true,
      })
      .cookie("user_id", isAdmin._id)
      .json({
        message: "Welcome Admin",
        status: true,
        admin_id: isAdmin._id,
        token,
      });
  } catch (error) {
    console.log(error);
    const errors = await mongooseErrorHandler(error);
    return res.json(errors);
  }
};
