const mongoose = require("mongoose");

const adminDB = mongoose.createConnection(
  "mongodb://localhost/MaccDelin-Admin",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);
const AdminModel = adminDB.model(
  "admin",
  require("../../admin-service/models/admin.model")
);

module.exports = AdminModel;