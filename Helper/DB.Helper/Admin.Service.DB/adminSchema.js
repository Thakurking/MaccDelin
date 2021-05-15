const adminDB = require("./admin.DB.Connection.js.js");

const AdminModel = adminDB.model(
  "admin",
  require("../../../admin-service/models/admin.model")
);

module.exports = AdminModel;
