"use client"
import React, { useEffect } from "react";
import styles from "./CollegeWeProvide.module.scss";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
const MarqueeSection = () => {
  const collegeLogos = [
    { title: "Premium Materials" },
    { title: "Custom Designs" },
    { title: "Durable Finish" },
    { title: "Built to Last" },
    { title: "Smart Styling" },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <div data-aos="fade-up" className="pt-4 container ">
      <div className={styles.college_provide}>
        <div
          className={`${styles.slide_college} border border-transparent`}
          style={{
            borderImageSource:
              "linear-gradient(90deg, #FFFFFF 21.18%, #CFCFCF 50.97%, #FFFFFF 80.76%)",
            borderImageSlice: 1,
          }}
        >
          <div className={`${styles.college_logo} `}>
            {collegeLogos.map((item, index) => (
              <div
                className="flex flex-row items-center gap-2 justify-between"
                key={index}
              >
                <h2
                  className="lg:text-xl text-sm font-semibold"
                  style={{
                    background:
                      "linear-gradient(90deg, #132FEE 0%, #18BFC4 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}
                >
                  {item?.title}
                </h2>

                <Image
                  height={100}
                  width={100}
                  key={index}
                  src="/marquee.svg"
                  alt="mass"
                  className={"!h-[40px] !w-[40px]"}
                />
              </div>
            ))}
            {collegeLogos.map((item, index) => (
              <div
                className="flex flex-row items-center gap-2 justify-between"
                key={index}
              >
                <h2
                  className="text-xl font-semibold"
                  style={{
                    background:
                      "linear-gradient(90deg, #132FEE 0%, #18BFC4 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}
                >
                  {item?.title}
                </h2>

                <img
                  key={index}
                  src="/marquee.svg"
                  alt="mass"
                  className={"mx-12"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;
