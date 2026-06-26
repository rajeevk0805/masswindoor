"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { LoginButton } from "./LoginButon";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Course dropdown items
  const courseItems = [
    { name: "Aluminium Anodizing", href: "/product/aluminium-nodizing" },
    { name: "Powder Coating", href: "/product/powder-coating" },
    { name: "Color Anodizing", href: "/product/color-anodizing" },
  ];

  return (
    <header
      className={` sticky !bg-[#0C8582] lg:!bg-white top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-white"
      } py-6`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-10 items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/MASS.svg"
                height={70}
                width={70}
                alt="logo"
                className="hidden lg:block"
              />
            </Link>
            <Link href="/">
              <Image src="/white.svg" height={70} width={70} alt="logo" />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-[#262626] hover:text-gray-600 px-3 py-2 text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-[#262626] hover:text-gray-600 px-3 py-2 text-sm font-medium"
            >
              About Us
            </Link>
            <div className="relative group">
              <button
                className="flex  text-sm items-center px-4 py-2 text-slate-700 hover:text-gray-600 rounded-md font-medium transition-colors"
                onClick={() => setCoursesOpen(!coursesOpen)}
                onMouseEnter={() => setCoursesOpen(true)}
                onMouseLeave={() => setCoursesOpen(false)}
              >
                Products
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>

              {coursesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-slate-200 overflow-hidden z-50"
                  onMouseEnter={() => setCoursesOpen(true)}
                  onMouseLeave={() => setCoursesOpen(false)}
                >
                  <div className="py-2">
                    {courseItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-gray-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
            <Link
              href="/calculator"
              className="text-[#262626] hover:text-gray-600 px-3 py-2 text-sm font-medium"
            >
              Price Calculator
            </Link>
            <Link
              href="/gallery"
              className="text-[#262626] hover:text-gray-600 px-3 py-2 text-sm font-medium"
            >
              Gallery
            </Link>
            <Link
              href="/contact-us"
              className="text-[#262626] hover:text-gray-600 px-3 py-2 text-sm font-medium"
            >
              Contact Us
            </Link>
          </nav>
          <div className="hidden md:flex">
            <div className="px-3 py-2">
              <LoginButton />
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
              <Link
              href="/about-us"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="border-b border-slate-100 pb-1">
              <button
                className="flex items-center justify-between w-full px-4 py-3 text-left text-black hover:bg-slate-50 rounded-md font-medium transition-colors"
                onClick={() => setCoursesOpen(!coursesOpen)}
              >
                <span>Products</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    coursesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {coursesOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="pl-4 space-y-1 mt-1"
                >
                  {courseItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-black hover:bg-slate-50 hover:text-blue-600 rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

           <Link
              href="/calculator"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Price Calculator
            </Link>
             <Link
              href="/gallery"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/contact-us"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="mt-4">
              <div className="px-3 py-2">
                <LoginButton />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
