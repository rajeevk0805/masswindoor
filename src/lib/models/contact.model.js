import mongoose, { Schema } from "mongoose";

const ContactSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String },
  message: { type: String },
});

export const Contact =
  mongoose.models.contactform || mongoose.model("contactform", ContactSchema);
