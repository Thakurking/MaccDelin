const editorDB = require("./editor.DB.Connection");

const EditorPermissionModel = editorDB.model(
  "editorPermission",
  require("../../../editor-service/models/editor.permission.model")
);

module.exports = EditorPermissionModel;
