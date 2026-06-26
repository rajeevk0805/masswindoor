import mongoose, { Schema } from "mongoose";

const BookingSchema = new Schema({
  // User Information
  username: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },

  // Calculator Data
  type: { type: String, required: true },
  dimensions: {
    width: { type: Number, required: true },
    height: { type: Number, required: true },
  },
  material: { type: String, required: true },
  glassType: { type: String, required: true },
  color: { type: String, required: true },
  finish: { type: String, required: true },
  hardware: { type: String, required: true },

  // Metadata
  createdAt: { type: Date, default: Date.now },
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "confirmed", "completed", "cancelled"],
  },
});

export const Booking =
  mongoose.models.Booking || mongoose.model("Booking", BookingSchema);
