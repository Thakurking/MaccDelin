const userDB = require("../Permission.DB/permission.DB.Connection");

const UserPermissionModel = userDB.model(
  "userPermission",
  require("../Models/user.Permission.Model")
);

module.exports = UserPermissionModel;