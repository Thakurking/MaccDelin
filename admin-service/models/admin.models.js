const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  Name: {
    type: String,
    max: 30,
    required: [true, "Please Provide a Name"],
  },
  Password: {
    type: String,
    minlength: 6,
    required: [true, "Please Provide a Password"],
  },
  Editor: [
    {
      type: Schema.Types.ObjectId,
      ref: "Editor",
    },
  ],
  Blogs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Blogs",
    },
  ],
  Author: [
    {
      type: Schema.Types.ObjectId,
      ref: "Author",
    },
  ],
});
