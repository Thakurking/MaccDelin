const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    Name: {
      type: String,
      min: 30,
    },
    Email: {
      type: String,
      required: [true, "Please Enter An Email"],
      unique: true,
      validate: [validator.isEmail, "Enter a Valid Email"],
    },
    Password: {
      type: String,
      required: [true, "Please Enter an Password"],
      min: [8, "At Least 6 Characters Required, got {VALUE}"],
      // validate: {
      //   validator: function (v) {
      //     return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/.test(
      //       v
      //     );
      //   },
      //   message: (porps) => `${prpos.value}Not A valid Password`,
      // },
      match: [
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
        "Password must contain a uppercse, digit, lowercase and a special character",
      ],
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

adminSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.Password = await bcrypt.hash(this.Password, salt);
  next();
});

module.exports = adminSchema;
