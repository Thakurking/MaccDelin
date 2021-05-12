const express = require("express");
require("dotenv").config();

const adminRouter = express.Router();

const adminRegisterController = require("../../controller/admin.auth.Controller/admin.register.Controller");

adminRouter.post(
  `/${process.env.AdminCreateRoute}`,
  adminRegisterController.AdminRegister
);

module.exports = adminRouter;
