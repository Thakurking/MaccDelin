const getDatabase = require("../../../Helper/DB-Utils/getDatabase");

// import { getDatabase } from "../../../getDatabase";

exports.EditorRegister = async (req, res) => {
  const { Text, Owner } = req.body;
  const Editor = await getDatabase().EditorModel;

  const editor = Editor.create({ text: Text, owner: Owner });
  return res.json(editor);
};
