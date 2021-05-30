const jwt = require("jsonwebtoken");
require("dotenv").config();

const EditorModel = require("../../../Helper/DB.Helper/Editor.Service.DB/editorSchema");

const {
  mongooseErrorHandler,
} = require("../../../Helper/Error/mongooseErrorHelper");

exports.editorLogin = async (req, res) => {
  const { Email, Password } = req.body;
  try {
    const isEditor = await EditorModel.findOne({ Email }).select("+Password");
    if (!isEditor) {
      return res.json({ message: "User Not Found", status: false });
    }
    const isPasswordVerified = await isEditor.verifyPassword(Password);
    if (isPasswordVerified) {
      return res.json({
        message: "Wrong Email Or Password",
        status: false,
      });
    }
    let payload = {};
    payload.isEditor = true;
    payload.editor = isEditor._id;
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
      .cookie("user_id", isEditor._id)
      .json({
        message: "Welcome Editor",
        status: true,
        editor_id: isEditor._id,
        token,
      });
  } catch (error) {
    console.log(error);
    const errors = await mongooseErrorHandler(error);
    return res.json(errors);
  }
};
