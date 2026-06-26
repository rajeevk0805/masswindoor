import { NextResponse } from "next/server";
import {
  createBooking,
  getBookings,
  deleteBooking,
  updateBooking,
  getBookingById,
} from "@/lib/controllers/booking.controller";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "123456masswinow";

function verifyToken(req) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader) throw new Error("Authorization header missing");

  const token = authHeader.split(" ")[1]; // Bearer <token>
  return jwt.verify(token, JWT_SECRET);
}

export async function POST(req) {
  try {
    const body = await req.json();
    const booking = await createBooking(body);
    return NextResponse.json({ success: true, booking }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 401 }
    );
  }
}

export async function GET(req) {
  try {
    verifyToken(req); // verify user
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
      // Fetch single booking
      const booking = await getBookingById(id);
      if (!booking) {
        return NextResponse.json(
          { success: false, message: "Booking not found" },
          { status: 404 }
        );
      }
      return NextResponse.json({ success: true, booking });
    }

    // Fetch all bookings
    const bookings = await getBookings();
    return NextResponse.json({ success: true, bookings });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 401 }
    );
  }
}

export async function DELETE(req) {
  try {
    verifyToken(req); // verify user is authenticated
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Booking ID is required" },
        { status: 400 }
      );
    }

    const deleted = await deleteBooking(id);

    if (!deleted) {
      return NextResponse.json(
        { success: false, message: "Booking not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: "Booking deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 401 }
    );
  }
}


export async function PUT(req) {
  try {
    verifyToken(req);
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Booking ID is required" },
        { status: 400 }
      );
    }

    const body = await req.json();
    const updated = await updateBooking(id, body);

    if (!updated) {
      return NextResponse.json(
        { success: false, message: "Booking not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, booking: updated, message: "Booking updated successfully" });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 401 }
    );
  }
}
