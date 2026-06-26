import React from "react";

function HeroSection({ title, description }) {
  return (
    <>
      <div className="my-0  lg:mt-[40px]">
        <div className="container  hidden lg:block">
          <div
            className="relative  rounded-3xl overflow-hidden text-white p-10 md:p-16  lg:py-24"
            style={{
              backgroundImage: "url('/assets/product/icons/hero.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div
              style={{
                background:
                  "linear-gradient(95.94deg, #0A3238 42.73%, rgba(10, 50, 56, 0.53) 101.04%)",
              }}
              className="absolute inset-0  bg-opacity-90"
            ></div>

            {/* Content */}
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-[500px] mb-4">
                {title}
              </h1>
              <p className="text-lg md:text-xl max-w-2xl">{description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <div
          className="relative  overflow-hidden text-white p-10 md:p-16"
          style={{
            backgroundImage: "url('/assets/product/icons/hero.png')", // Replace with your image path
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div
            style={{
              background:
                "linear-gradient(95.94deg, #0A3238 42.73%, rgba(10, 50, 56, 0.53) 101.04%)",
            }}
            className="absolute inset-0  bg-opacity-90"
          ></div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <h1 className="text-3xl md:text-5xl font-[400px] mb-4">{title}</h1>
            <p className="text-lg md:text-xl max-w-2xl leading-8 font-[400px]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
