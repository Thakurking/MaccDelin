const EditorModel = require("../../../Helper/DB-Utils/getEditorDatabase");
const AdminModel = require("../../../Helper/DB-Utils/getAdminDatabase1");

exports.EditorRegister = async (req, res) => {
  res.send("hello");
  console.log("hii editor");
  const { Text, Owner } = req.body;
  console.log(Text, Owner);
  const editor = await EditorModel.create({
    text: Text,
    owner: Owner,
  });
  console.log(editor);
};

exports.GetEditors = async (req, res) => {
  const editor = await EditorModel.findOne({
    text: "some random Text here",
  }).populate({
    path: "owner",
    model: AdminModel,
    // select: { name: "Ritesh Kumar Thakur" },
  });
  res.send(editor.owner);
};
