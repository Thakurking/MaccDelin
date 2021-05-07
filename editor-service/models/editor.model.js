// posts schema
// import { Schema } from "mongoose";
const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const editorSchema = new Schema({
  text: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, ref: "admin", required: true },
});

module.exports = editorSchema;