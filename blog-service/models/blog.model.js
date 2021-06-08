const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    required: true,
    refPath: "onModel",
  },
  onModel: {
    type: String,
    required: true,
    enum: ["editor", "admin", "author"],
  },
  
});
