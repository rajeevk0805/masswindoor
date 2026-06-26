import Image from "next/image";
import React from "react";

function ProductAbout({ subtitle, title, description, image }) {
  return (
    <div className="pt-24">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 relative">
            <Image
              src={image}
              height={500}
              width={500}
              alt="Color Anodizing Process"
              className="rounded-t-2xl w-full h-auto object-cover "
            />
            <div className="hidden lg:block absolute -bottom-6  -left-8  ">
              <Image
                src="/assets/product/design.png"
                alt="Color Anodizing Process"
                height={100}
                width={100}
                className="rounded-t-2xl  "
              />
            </div>
          </div>

          {/* Right: Text */}
          <div className="w-full lg:w-1/2 space-y-4 px-4">
            <p className="text-sm text-[#0C8582] font-semibold">{subtitle}</p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-10 lg:leading-14 text-gray-900">
              {title}
            </h2>
            <p className="text-[#515151] text-base md:text-lg leading-relaxed">
              {description}
            </p>
            <button className="mt-4 px-6 py-2 bg-[#0A3238] text-white rounded-md hover:bg-teal-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductAbout;
