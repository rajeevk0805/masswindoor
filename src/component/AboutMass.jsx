"use client";
import Image from "next/image";
import { CircleIcon, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
export default function AboutMass() {
  const services = [
    "⁠Engineered for Enduring Quality",
    "Automated for Consistent Excellence",
    "⁠Premium Materials, Flawless Finish",
    "⁠Rigorously Tested Quality Assured",
  ];

  const slideVariants = {
    hidden: (direction) => ({
      x: direction === "left" ? -300 : 300,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.2 },
    },
  };

  return (
    <div className="container   px-4 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:pt-18">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          custom="left"
          variants={slideVariants}
          transition={{ duration: 1.2 }}
        >
          <div className="about_mass_images">
            <div className="grid grid-rows-1 gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg ">
                  <Image
                    src="/assets/about/1.png"
                    height={200}
                    width={300}
                    alt="Mass product showcase"
                    className="w-full  object-cover rounded-lg"
                  />
                </div>
                <div className="rounded-lg ">
                  <Image
                    src="/assets/about/2.png"
                    height={300}
                    width={300}
                    alt="Mass product showcase"
                    className="w-full  object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="rounded-lg overflow-hidden  lg:h-70">
                <Image
                  src="/assets/about/3.png"
                  height={400}
                  width={300}
                  alt="Mass product showcase"
                  className="w-full  object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          custom="right"
          variants={slideVariants}
          transition={{ duration: 1.2 }}
        >
          <div className="about_mass flex flex-col justify-center">
            <span className="font-semibold text-sm leading-4 text-teal-600 mb-2">
              About Mass
            </span>
            <h1 className="text-2xl lg:text-4xl mb-4 leading-tight">
              Building Quality Through
              <span className="font-bold block"> Smart Innovation</span>
            </h1>
            <p className="text-[#81848A] mb-8">
              We offer tailored window and door solutions in uPVC and Aluminium,
              combining modern design with advanced automation to deliver
              premium quality — from manufacturing to doorstep.
            </p>

            <div className="list-of-services space-y-4 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full  flex items-center justify-center text-white">
                    <CircleIcon className="w-4 h-4" />
                    <Image
                      src="/about_mass.svg"
                      height={50}
                      width={50}
                      alt="mass"
                    />
                  </div>
                  <span>{service}</span>
                </div>
              ))}
            </div>

            <div>
              <button className="inline-flex items-center bg-[#0A3238] gap-2  py-2 border border-gray-300 rounded-xl hover:bg-[#29EDE8] transition-colors">
                <span className="bg-white px-8 py-3 rounded-lg mx-2">
                  {" "}
                  Learn More
                </span>
                <ArrowUpRight className="w-6 h-6 text-white mx-2" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
