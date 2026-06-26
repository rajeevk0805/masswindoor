"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Plus, Minus } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { toast } from "react-toastify";

// Validation schema
const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});

export default function FAQContactPage() {
  // State to track which FAQ item is open
  const [openItem, setOpenItem] = useState(0);
  const pathname = usePathname();
  // FAQ data
  const faqItems = [
    {
      question: "Is the price shown final?",
      answer:
        "No, the price shown is an estimate based on your customization. Final pricing is shared after physical site measurement and verification.",
    },
    {
      question: "Can I customize both windows and doors?",
      answer:
        "Yes, we offer full customization options for both windows and doors to match your specific requirements and preferences.",
    },
    {
      question: "How fast will my order be delivered?",
      answer:
        "Delivery times vary based on customization complexity and current order volume. Typically, orders are delivered within 3-4 weeks after confirmation.",
    },
    {
      question: "Do you offer installation services?",
      answer:
        "Yes, we provide professional installation services for all our products. Our trained technicians ensure proper fitting and functionality.",
    },
    {
      question: "What if I don't know my exact window size?",
      answer:
        "Don't worry! We offer measurement services where our professionals can visit your location to take precise measurements for your order.",
    },
    {
      question: "Can I request a quote before placing an order?",
      answer:
        "You can request a detailed quote with no obligation. Simply fill out the contact form with your requirements.",
    },
  ];

  // Handle form submission
const handleSubmit = async (values, { setSubmitting, resetForm }) => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Form submitted successfully!");
      resetForm();
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    toast.error("Failed to submit. Please check your internet connection.");
  } finally {
    setSubmitting(false);
  }
};

  return (
    <div className="py-24">
      <div className="container mx-auto px-4  max-w-6xl">
        <h1 className="text-3xl font-semibold lg:text-5xl text-center mb-2">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-gray-500 mb-10 text-sm lg:text-lg">
          Got a question? We've answered the most common ones below.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* FAQ Section */}
          <div className="space-y-4 grid lg:col-span-8">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenItem(openItem === index ? -1 : index)}
                >
                  <span className="font-medium">{item.question}</span>
                  {openItem === index ? (
                    <Minus className="h-5 w-5 text-gray-500 cursor-pointer" />
                  ) : (
                    <Plus className="h-5 w-5 text-gray-500 cursor-pointer" />
                  )}
                </button>

                {openItem === index && (
                  <div className="px-6 pb-4 text-gray-600">{item.answer}</div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Form */}

          <div className="border border-gray-200 rounded-lg p-6 grid lg:col-span-4">
            {pathname === "/contact-us" ? (
              <Image
                src="/assets/product/contact-us.png"
                height={800}
                width={800}
                alt="mass "
                className="w-full object-cover"
              />
            ) : (
              <>
                <div className="text-center mb-6">
                  <h2 className="text-xl font-semibold mb-2">
                    In what way we help?
                  </h2>
                  <p className="text-gray-500">
                    Feel free to reach out to us with your inquiries.
                  </p>
                </div>

                <Formik
                  initialValues={{ name: "", email: "", message: "" }}
                  validationSchema={ContactSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting, errors, touched }) => (
                    <Form className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-1"
                        >
                          Name
                        </label>
                        <Field
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your name"
                          className={`w-full px-4 py-2 border rounded-md ${
                            errors.name && touched.name
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="mt-1 text-sm text-red-500"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-1"
                        >
                          Email
                        </label>
                        <Field
                          id="email"
                          name="email"
                          type="email"
                          placeholder="address@gmail.com"
                          className={`w-full px-4 py-2 border rounded-md ${
                            errors.email && touched.email
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="mt-1 text-sm text-red-500"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium mb-1"
                        >
                          Message
                        </label>
                        <Field
                          as="textarea"
                          id="message"
                          name="message"
                          placeholder="Enter your message..."
                          rows={4}
                          className={`w-full px-4 py-2 border rounded-md ${
                            errors.message && touched.message
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        <ErrorMessage
                          name="message"
                          component="div"
                          className="mt-1 text-sm text-red-500"
                        />
                      </div>

                      <div className="text-right">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors cursor-pointer"
                        >
                          Submit Now
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
