const express = require("express");

const editorRouter = express.Router();

const isUser = require("../../../auth");

const editorRegisterController = require("../../controller/admin.editor.Controller/editor.Register.Controller");
const editorRoleController = require("../../controller/admin.editor.Controller/editor.Role.Controller");

editorRouter.post(
  "/register-editor",
  // isUser,
  editorRegisterController.EditorRegister
);

editorRouter.put("/assign-roles", editorRoleController.AssignRoles);

module.exports = editorRouter;
