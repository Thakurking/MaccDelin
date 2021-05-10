const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const editorSchema = new Schema({
  text: { type: String, required: true },
  owner: [{ type: "ObjectId", ref: "admin" }],
});

module.exports = editorSchema;
