import Image from "next/image";
import React from "react";

function ProcessEfficiency() {
  return (
    <div
      className="py-12 my-12"
      style={{
        background:
          "linear-gradient(270deg, rgba(4, 78, 76, 0.2) 0%, rgba(24, 191, 195, 0.2) 100%)",
      }}
    >
      <div className="container">
        <h2 className="text-black text-3xl lg:text-6xl font-[500px] text-center pb-12">
          Anodizing Process Efficiency
        </h2>
        <Image
          src="/assets/product/efficincy.svg"
          height={800}
          width={700}
          alt="img"
          className="w-full"
        />
      </div>
    </div>
  );
}

export default ProcessEfficiency;
