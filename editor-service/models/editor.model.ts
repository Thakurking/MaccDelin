// posts schema
import { Schema, Document } from "mongoose";
export const editorSchema: Schema = new Schema({
  text: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, ref: "admin", required: true },
});
