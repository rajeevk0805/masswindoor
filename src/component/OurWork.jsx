import React from "react";
import Image from "next/image";

function OurWork() {
  const work = [
    {
      image: "/assets/power-coating.png",
    },
    {
      image: "/assets/aluminium.png",
    },
    {
      image: "/assets/color-anado.png",
    },
    {
      image: "/dummy.png",
    },
    {
      image: "/dummy.png",
    },
    {
      image: "/dummy2.png",
    },
  ];

  return (
    <section className="">
      <div className="container mx-auto px-4  max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold lg:text-5xl mb-3">See Our Work in Action</h2>
          <p className="text-gray-500 max-w-3xl mx-auto">
            From modern apartments to commercial buildings — explore real-life
            installations of our smart windows & doors, delivered and installed
            across India.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {/* First row */}
          <div className="col-span-6 md:col-span-5 ">
            <Image
              src={work[0].image}
              alt="Work 1"
              width={400}
              height={80}
              className="mx-auto w-full  h-[140px] lg:h-[30vh] object-cover rounded-3xl"
            />
          </div>
          <div className="col-span-6 md:col-span-5 ">
            <Image
              src={work[1].image}
              alt="Work 2"
              width={400}
              height={80}
              className="mx-auto w-full  h-[140px] lg:h-[30vh] object-cover rounded-3xl"
            />
          </div>
          <div className="col-span-6 md:col-span-2  ">
            <Image
              src={work[2].image}
              alt="Work 3"
              width={200}
              height={80}
              className="mx-auto w-full  h-full object-cover rounded-3xl"
            />
          </div>
          <div className="col-span-6 md:col-span-2  ">
            <Image
              src={work[2].image}
              alt="Work 3"
              width={400}
              height={80}
              className="mx-auto w-full  h-full object-cover rounded-3xl"
            />
          </div>
          <div className="col-span-6 md:col-span-5 ">
            <Image
              src={work[0].image}
              alt="Work 1"
              width={400}
              height={80}
              className="mx-auto w-full  h-[140px] lg:h-[30vh] object-cover rounded-3xl"
            />
          </div>
          <div className="col-span-6 md:col-span-5 ">
            <Image
              src={work[1].image}
              alt="Work 2"
              width={400}
              height={80}
              className="mx-auto w-full  h-[140px] lg:h-[30vh] object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurWork;
