const EditorPermissionModel = require("../../Helper/DB.Helper/Editor.Service.DB/editorPermissionSchema");

module.exports = async (req, res, next) => {
  try {
      const editorID = req.cookies.editorID;
      console.log(editorID);
      if(!editorID){
        return res.json({ message: "Access Denied", status: false });
      }
      const isEditor = await EditorPermissionModel.findOne({
        editorID: editorID,
      });
      if(isEditor){
        req.Permission = isEditor.Permission;
        next();
      }
  } catch (error) {
    console.log(error.message);
    return res.json({ message: error.message, status: false });
  }
};
