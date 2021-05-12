const AdminModel = require("../../../Helper/DB.Helper/Admin.Service.DB/getAdminDatabase");
const { errorHandler } = require("../../../Helper/Error/mongooseErrorHelper");

exports.AdminRegister = async (req, res) => {
  try {
    const Email = req.body.Email;
    const Password = req.body.Password;
    const admin = new AdminModel({
      Email: Email,
      Password: Password,
    });
    try {
      const saveAdmin = await admin.save();
      if (saveAdmin) {
        return res.json({ message: "Admin Registered", status: true });
      }
    } catch (error) {
      const errors = await errorHandler(error);
      return res.json(errors);
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal Server Error", status: false });
  }
};
