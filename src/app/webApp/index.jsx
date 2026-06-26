"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

function WebApp({ children }) {
  const pathname = usePathname();

  // Define routes where header and footer should be hidden
  const hideLayout =
    pathname.startsWith("/startwith") || pathname.startsWith("/admin");

  return (
    <div>
      {!hideLayout && <Navbar />}
      <main>{children}</main>
      {!hideLayout && <Footer />}
    </div>
  );
}

export default WebApp;
