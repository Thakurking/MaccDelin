const mongoose = require("mongoose");

const permissionDB = mongoose.createConnection(
  "mongodb://localhost/MaccDelin-User-Permission",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

module.exports = permissionDB;
