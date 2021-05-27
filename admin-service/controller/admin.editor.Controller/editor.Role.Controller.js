const EditorModel = require("../../../Helper/DB.Helper/Editor.Service.DB/editorSchema");

const {
  mongooseErrorHandler,
} = require("../../../Helper/Error/mongooseErrorHelper");

exports.AssignRoles = async (req, res) => {
  try {
    const role = req.body.role;
    const value = req.body.value;
    const editorID = req.body._id;
    
  } catch (error) {
    console.log(error);
  }
};
