// import React from "react";

// function Benefits() {
//   return (
//     <div>
//       <div className="container  ">
//         <div className="flex justify-center lg:max-w-5xl  flex-col items-center text-center">
//             <button className="flex  items-center gap-2 px-4 py-2 rounded-full bg-white text-black  shadow-md hover:shadow-lg transition">
//           <span className="w-2 h-2 text-[16px] bg-black rounded-full"></span>
//           Superior Results
//           <span className="w-2 h-2 bg-black rounded-full"></span>
//         </button>

//         <h1 className="lg:text-6xl text-4xl text-[#0A3238] font-[500px]">
//           Benefits of Our Anodizing Services
//         </h1>
//         <p className="text-[#909090] text-xl text-center">
//           Our advanced anodizing process provides numerous advantages that
//           enhance the performance, appearance, and longevity of your aluminum
//           components.
//         </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Benefits;
"use client";
import Image from "next/image";
import React from "react";

function Benefits({ benefitsData, title, description }) {
  return (
    <div className="pt-14 lg:pt-24 flex items-center justify-center">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-6">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black shadow-md hover:shadow-lg transition">
            <span className="w-2 h-2 bg-black rounded-full"></span>
            Superior Results
            <span className="w-2 h-2 bg-black rounded-full"></span>
          </button>

          <h1 className="lg:text-6xl text-3xl text-[#0A3238] font-[500px]">
            {title}
          </h1>

          <p className="text-[#909090] lg:text-xl max-w-4xl">{description}</p>
        </div>
        <div className=" mx-auto py-12 px-4">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            {benefitsData?.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border p-6 shadow-sm flex flex-col gap-3"
              >
                <div className="w-20 h-20 bg-[#D5E8E8] flex items-center justify-center rounded-full text-2xl">
                  <Image src={benefit.icon} height={50} width={50} alt="mass" />
                </div>
                <h3 className="text-xl font-semibold text-[#0A3238]">
                  {benefit.title}
                </h3>
                <p className="text-[#505050] text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
