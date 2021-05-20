const mongoose = require("mongoose");

const editorDB = mongoose.createConnection(
  "mongodb://localhost/MaccDelin-Editor",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

module.exports = editorDB;
