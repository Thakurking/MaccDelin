const editorDB = require("./editor.DB.Connection");

const EditorModel = editorDB.model(
  "editor",
  require("../../../editor-service/models/editor.model")
);

module.exports = EditorModel;
