const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const editorSchema = new Schema(
  {
    Name: {
      type: String,
      required: [true, "Please Give Your Editor A Name"],
    },
    Email: {
      type: String,
      required: [true, "Please Enter Your Editor Email"],
      unique: true,
      validate: [validator.isEmail, "Please Enter A Valid Email"],
    },
    Password: {
      type: String,
      required: true,
      min: [8, "Password Should Be 8 Characters Long"],
      match: [
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        "Password must contain a uppercase, digit, lowercase and a special character",
      ],
    },
    /**
     * Will send a gmail verification link
     * Status will be..
     * 1. Active - A
     * 2. Deactivated - F
     */
    Status: {
      type: String,
      default: "F",
    },
    Admin: [
      {
        type: "ObjectId",
        ref: "admin",
      },
    ],
    Blogs: [
      {
        type: "ObjectId",
        ref: "blog",
      },
    ],
    Permission: {
      type: Schema.Types.ObjectId,
      ref: "editorPermission",
    },
  },
  { timestamps: true }
);

editorSchema.pre("save", async function (next) {
  if (!this.isModified("Password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.Password = await bcrypt.hash(this.Password, salt);
  next();
});

editorSchema.methods.verifyPassword = async function (Password) {
  return await bcrypt.compare(Password, this.Password);
};

module.exports = editorSchema;
