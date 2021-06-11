const express = require("express");

const editorRouter = express.Router();

const editorLoginController = require("../../controller/editor.auth/editor.Login.Controller");

editorRouter.post("/editor-login", editorLoginController.editorLogin);

module.exports = editorRouter;
