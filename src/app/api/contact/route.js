import { NextResponse } from "next/server";

import jwt from "jsonwebtoken";
import {
  createContact,
  getContact,
} from "@/lib/controllers/contact.controller";

const JWT_SECRET = "123456masswinow";

function verifyToken(req) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader) throw new Error("Authorization header missing");

  const token = authHeader.split(" ")[1];
  return jwt.verify(token, JWT_SECRET);
}

export async function POST(req) {
  try {
    const body = await req.json();
    const contacts = await createContact(body);
    return NextResponse.json({ success: true, contacts }, { status: 201 });
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
    const contacts = await getContact();
    return NextResponse.json({ success: true, contacts });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 401 }
    );
  }
}
