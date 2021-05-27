const EditorModel = require("../../../Helper/DB.Helper/Editor.Service.DB/editorSchema");
const EditorPermissionModel = require("../../../Helper/DB.Helper/Editor.Service.DB/editorPermissionSchema")
const {
  mongooseErrorHandler,
} = require("../../../Helper/Error/mongooseErrorHelper");

exports.EditorRegister = async (req, res) => {
  try {
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Password = req.body.Password;
    try {
      const editor = new EditorModel({
        Name: Name,
        Email: Email,
        Password: Password,
      });
      const saveEditor = await editor.save();
      const permission = new EditorPermissionModel({
        editorID: editor._id,
        NONE: true,
      });
      const savePermission = await permission.save();
      saveEditor.Permission = permission._id;
      saveEditor.save();
      if (saveEditor && savePermission) {
        return res.json({ message: "Editor Registered", status: true });
      }
    } catch (error) {
      console.log(error);
      const errors = await mongooseErrorHandler(error);
      return res.json(errors);
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal Server Error", status: false });
  }
};
