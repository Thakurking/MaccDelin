// users schema
import { Schema, Document } from "mongoose";
export const adminSchema: Schema = new Schema({
  name: { type: String, required: true },
});
