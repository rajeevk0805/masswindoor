import Image from "next/image";
import React from "react";
import { FaIndustry, FaPuzzlePiece, FaFileInvoiceDollar } from "react-icons/fa";

function WhyChoose() {
  return (
    <div className="bg-[#0A3238] py-28 text-white relative overflow-hidden lg:my-12 ">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <h2 className="text-4xl leading-12 lg:leading-17 md:text-6xl font-[500px] mb-6">Why Choose <br /> Us?</h2>
          <p className="text-base md:text-[18px] mb-6 max-w-md">
            At MASS, we’re committed to delivering exceptional quality, transparent pricing,
            and tailored solutions in aluminium window and door systems. Here's why customers prefer us:
          </p>

          {/* Optional underline with icon */}
          <div className="border-t border-dashed border-[#2B5E65] w-40 mt-6 mb-6 relative">
            <div className="absolute left-1/2 -top-3 transform -translate-x-1/2 bg-[#0A3238] px-2">
              <div className="w-3 h-3 bg-[#2B5E65] rounded-full" />
            </div>
          </div>

          {/* Background factory image */}
          <Image
            src="/assets/product/whychoose.png" // replace with actual path or import
            alt="Factory Illustration"
            height={500}
            width={500}
            className=" absolute bottom-0 left-55  object-right w-[35%]"
          />
        </div>

        {/* Right Section - Features */}
        <div className="space-y-8">
          <div className=" items-start space-x-4">
           <Image src="/assets/product/icon1.svg" height={40} width={40} alt="mass"/>
            <div>
              <h4 className="text-xl font-semibold my-3">Industry Expertise</h4>
              <p className="text-sm text-gray-200">
                Our team brings a strong foundation in aluminium fabrication, combining innovation with reliable production.
              </p>
            </div>
          </div>
          <div className=" items-start space-x-4 py-6">
           <Image src="/assets/product/icon2.svg" height={40} width={40} alt="mass"/>
            <div>
              <h4 className="text-xl font-semibold my-3">Tailored Solutions</h4>
              <p className="text-sm text-gray-200">
                We let you customize every detail — from dimensions to glass, color, and materials — as per your project needs.
              </p>
            </div>
          </div>
          <div className=" items-start space-x-4">
           <Image src="/assets/product/icon3.svg" height={40} width={40} alt="mass"/>
            <div>
              <h4 className="text-xl font-semibold my-3">Transparent Process</h4>
              <p className="text-sm text-gray-200">
                With live estimates and open communication, there are no surprises — just smart, informed choices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
