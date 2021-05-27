const express = require("express");

const editorPermissionRouter = express.Router();

const editorCommentDeletePermissionController = require("../../controller/editor.Permission/editor.CommentDelete.Permission");

editorPermissionRouter.delete("/delete-comment");
