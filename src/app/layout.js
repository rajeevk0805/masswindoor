import React from "react";
import "@/app/globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import WebApp from "./webApp";
import { ToastContainer } from "react-toastify";

export const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Premium Aluminum Solutions",
  description:
    "Specializing in aluminum anodizing, powder coating, fabrication, and custom finishing for commercial and residential projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <WebApp>
          <main>{children}</main>
          <ToastContainer />
        </WebApp>
      </body>
    </html>
  );
}
