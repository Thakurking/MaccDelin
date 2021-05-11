const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    Name: {
      type: String,
      required: [true, "Name Required"],
      min: 30,
    },
    email: {
      type: String,
      required: [true, "Email Required"],
      unique: true,
      validate: [validator.isEmail, "Enter a Valid Email"],
    },
    Password: {
      type: String,
      required: [true, "Password Required"],
      min: [8, "At Least 6 Characters Required, got {VALUE}"],
      validate: {
        validator: function (v) {
          return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(
            v
          );
        },
        message: (porps) => `${prpos.value}Not A valid Password`,
      },
      unique: true,
    },
    Editors: [
      {
        type: "ObjectId",
        ref: "editor",
      },
    ],
    Blogs: [
      {
        type: "ObjectId",
        ref: "blog",
      },
    ],
    Authors: [
      {
        type: "ObjectId",
        ref: "author",
      },
    ],
  },
  { timestamps: true }
);

module.exports = adminSchema;
