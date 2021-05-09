const express = require("express");

const editorRouter = express.Router();

const editorRegisterController = require("../../controller/editor.auth.controller/editor.register.controller");
// const getEditorController = require("../../controller/editor.auth.controller/editor.register.controller");

editorRouter.post("/create-editor", editorRegisterController.EditorRegister);
editorRouter.get("/get-editors", editorRegisterController.GetEditors);

module.exports = editorRouter;
