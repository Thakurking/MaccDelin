const express = require("express");
require("dotenv").config();

const adminRouter = express.Router();

const adminRegisterController = require("../../controller/admin.auth.Controller/admin.register.Controller");
const adminLoginController = require("../../controller/admin.auth.Controller/admin.login.Controller");

adminRouter.post(
  `/${process.env.AdminCreateRoute}`,
  adminRegisterController.AdminRegister
);

adminRouter.post("/adminLogin", adminLoginController.AdminLogin);

module.exports = adminRouter;
