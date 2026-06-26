"use client";
import HeroSection from "@/component/HeroSection";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import FAQContactPage from "@/component/Faq";
import { toast } from "react-toastify";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});
function page() {
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
    <div>
      <HeroSection
        title="Contact Us"
        description="We're here to help — whether you have questions, need support, or want to explore our window & door solutions. Reach out to us and let’s build something great together."
      />
      <div>
        <div className="container">
          <div className="flex flex-col items-center text-center gap-6 py-14">
            <h2 className="text-3xl lg:text-5xl font-semibold">
              Connect With Out Team
            </h2>
            <span className="border-2 w-[164px]  border-[#0C8582]"></span>
            <p className="text-[#969696] lg:max-w-4xl">
              We specialize in high-quality surface finishing techniques that
              elevate the durability, aesthetics, and functionality of your
              products.
            </p>
          </div>
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="grid col-span-7 lg:col-span-5 w-full">
              <div className="bg-[#F0F0F0] border border-gray-200 rounded-lg p-6 grid ">
                <div className="text-center mb-6">
                  <h2 className="text-xl lg:text-3xl text-start font-semibold mb-2">
                    Get in Touch with Us
                  </h2>
                </div>

                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    message: "",
                    subect: "",
                  }}
                  validationSchema={ContactSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting, errors, touched }) => (
                    <Form className="space-y-4">
                      <div className="flex flex-row gap-3">
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
                            className={`w-full bg-white px-4 py-2 border rounded-md ${
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
                            className={`w-full bg-white px-4 py-2 border rounded-md ${
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
                      </div>

                      <div>
                        <label
                          htmlFor="subect"
                          className="block text-sm font-medium mb-1"
                        >
                          Subject
                        </label>
                        <Field
                          id="name"
                          name="subect"
                          type="text"
                          placeholder="subject"
                          className={`w-full bg-white px-4 py-2 border rounded-md ${
                            errors.subect && touched.subect
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        <ErrorMessage
                          name="subect"
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
                          className={`w-full bg-white px-4 py-2 border rounded-md ${
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

                      <div className="text-left">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-6 py-3 bg-[#0A3238] text-white rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
                        >
                          Send Message
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
            <div className="grid col-span-7 ">
              <div className="p-6 md:p-10 bg-white rounded-lg">
                {/* Header */}
                <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
                  Contact Details
                </h2>
                <p className="text-gray-500 mb-12 max-w-xl">
                  We specialize in high-quality surface finishing techniques
                  that elevate the durability, aesthetics, and functionality of
                  your products.
                </p>

                {/* Contact Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {/* Address */}
                  <div className="flex items-start gap-4 p-4 bg-[#E6F0EF] rounded-md">
                    <div className="p-3 bg-[#0A3238] text-white rounded-full">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h4 className="font-semibold">Address</h4>
                      <p className="text-sm text-gray-600">
                        Near Alpana Cinema Hall Digha Ashiana Road ,
                        Digha-800011
                      </p>
                    </div>
                  </div>

                  {/* Mobile */}
                  <div className="flex items-start gap-4 p-4 bg-[#E6F0EF] rounded-md">
                    <div className="p-3 bg-[#0A3238] text-white rounded-full">
                      <FaPhoneAlt />
                    </div>
                    <div>
                      <h4 className="font-semibold">Mobile</h4>
                      <p className="text-sm text-gray-600">+91 9334154407</p>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="flex items-start gap-4 p-4 bg-[#E6F0EF] rounded-md">
                    <div className="p-3 bg-[#0A3238] text-white rounded-full">
                      <FaClock />
                    </div>
                    <div>
                      <h4 className="font-semibold">Availability</h4>
                      <p className="text-sm text-gray-600">
                        Daily 09 am - 05 pm
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 p-4 bg-[#E6F0EF] rounded-md">
                    <div className="p-3 bg-[#0A3238] text-white rounded-full">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-sm text-gray-600 break-all">
                        mohdsaleh129@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-4 flex flex-col sm:flex-row sm:justify-between gap-2">
                  <h4 className="font-semibold mb-2">Social Media :</h4>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="p-2 rounded-md bg-white border border-[#F3F3F3] hover:bg-gray-200"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded-md bg-white border border-[#F3F3F3] hover:bg-gray-200"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded-md bg-white border border-[#F3F3F3] hover:bg-gray-200"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-16">
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.722943402099!2d85.14191787593974!3d25.614121114686522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed585911a55555%3A0x4aac2670884f297!2sDestiny%20It%20Services%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1747912692927!5m2!1sen!2sin"
            width="100%"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <FAQContactPage />
    </div>
  );
}

export default page;
