import  connectToDB  from "../../lib/mongodb";
import { Booking } from "../models/booking.model";

export async function createBooking(data) {
  await connectToDB();
  const newBooking = await Booking.create(data);
  return newBooking;
}

export async function getBookings() {
  await connectToDB();
  const bookings = await Booking.find().sort({ createdAt: -1 });
  return bookings;
}

export async function deleteBooking(id) {
  await connectToDB();
  const deleted = await Booking.findByIdAndDelete(id);
  return deleted;
}

export async function updateBooking(id, data) {
  await connectToDB();
  const updated = await Booking.findByIdAndUpdate(id, data, { new: true });
  return updated;
}

export async function getBookingById(id) {
  await connectToDB();
  const booking = await Booking.findById(id);
  return booking;
}
