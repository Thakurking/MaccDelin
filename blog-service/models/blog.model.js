const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
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
    Body: {
      type: String,
      required: true,
    },
    Comments: [
      {
        text: {
          type: String,
        },
        postedBy: {
          type: Schema.Types.ObjectId,
          refPath: "onModel",
        },
      },
    ],
    Photo: {
      type: String,
      default: null,
    },
    Mp3: {
      type: String,
      default: null,
    },
    PodcastLink: {
      type: String,
      default: null,
    },
    Map: {
      type: String,
      default: null,
    },
    MenuTag: {
      type: String,
      required: true,
    },
    Status: {
      type: String,
      default: "F",
    },
    Likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "onModel",
      },
    ],
  },
  { timestamps: true }
);
