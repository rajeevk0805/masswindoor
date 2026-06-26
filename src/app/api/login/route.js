import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";


export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (email === process.env.EMAIL && password === process.env.PASSWORD) {
      const token = jwt.sign({ email: process.env.EMAIL, name: process.env.NAME }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      return NextResponse.json({ success: true, token });
    }

    return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Login failed" }, { status: 500 });
  }
}
