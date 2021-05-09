// posts schema
// import { Schema } from "mongoose";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const AdminModel = require("../../Helper/DB-Utils/getDatabase");
// import { AdminModel } from "../../Helper/DB-Utils/getDatabase";
const editorSchema = new Schema({
  text: { type: String, required: true },
  owner: [{ type: "ObjectId", ref: "admin" }],
});

module.exports = editorSchema;
