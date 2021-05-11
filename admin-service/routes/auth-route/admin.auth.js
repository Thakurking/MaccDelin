const express = require("express");

const adminRouter = express.Router();

const adminRegisterController = require("../../controller/admin.auth.Controller/admin.register.Controller");

adminRouter.post("/create-admin", adminRegisterController.AdminRegister);

module.exports = adminRouter;
