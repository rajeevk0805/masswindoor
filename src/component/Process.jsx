"use client";
import Image from "next/image";
import React from "react";

function Process({ ProcessData, title, description, subtitle }) {
  return (
    <div className="py-6 lg:pt-18 flex items-center justify-center">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-6">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black shadow-md hover:shadow-lg transition">
            <span className="w-2 h-2 bg-black rounded-full"></span>
            {subtitle}
            <span className="w-2 h-2 bg-black rounded-full"></span>
          </button>

          <h1 className="lg:text-6xl text-3xl text-[#0A3238] font-[500px]">
            {title}
          </h1>

          <p className="text-[#909090] lg:text-xl max-w-4xl">{description}</p>
        </div>
       
        <div className="py-10 px-4 md:px-20 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {ProcessData?.map((step) => (
              <div
                key={step.id}
                className="bg-[#CDE2E2] relative rounded-3xl border p-6 shadow-sm flex flex-col gap-3"
              >
                {/* Number Badge */}
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#073336]  text-white font-semibold text-sm border-4 border-white">
                    {step.id}
                  </div>
                </div>

                {/* Card Content */}
                <div className="mt-6">
                  <h3 className="text-xl text-center lg:text-xl pb-4 font-semibold text-[#0A3238]">
                    {step.title}
                  </h3>{" "}
                  <p className="text-[#6F6F6F] text-sm lg:text-[16px] leading-7 text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
