import connectToDB from "../../lib/mongodb";
import { Contact } from "../models/contact.model";

export async function createContact(data) {
  await connectToDB();
  const newContact = await Contact.create(data);
  return newContact;
}

export async function getContact() {
  await connectToDB();
  const contacts = await Contact.find().sort({ createdAt: -1 });
  return contacts;
}
