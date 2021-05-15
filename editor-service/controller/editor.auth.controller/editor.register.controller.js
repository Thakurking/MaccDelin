const EditorModel = require("../../../Helper/DB.Helper/Editor.Service.DB/getEditorDatabase");
const AdminModel = require("../../../Helper/DB.Helper/Admin.Service.DB/adminSchema");

exports.EditorRegister = async (req, res) => {
  const { Text, Owner } = req.body;
  console.log(Text, Owner);
  const editor = await EditorModel.create({
    text: Text,
    owner: Owner,
  });
  console.log(editor);
};
