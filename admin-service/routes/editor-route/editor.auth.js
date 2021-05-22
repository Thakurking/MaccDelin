const express = require("express");

const editorRouter = express.Router();

const isUser = require("../../../auth");

const editorRegisterCotroller = require("../../controller/admin.editor.Controller/editor.Register.Controller");

editorRouter.post(
  "/register-editor",
  // isUser,
  editorRegisterCotroller.EditorRegister
);

module.exports = editorRouter;
