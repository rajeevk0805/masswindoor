// import Link from "next/link";
// import React from "react";
// import styles from "./Hero.module.scss";

// const Hero = () => {
//   return (
//     <div className="min-h-[80vh] w-full relative container">
//       <img
//         src="/hero_img.png"
//         alt="hero img"
//         className="w-full h-[80vh] object-cover object-center z-[-1] rounded-[48px]"
//       />
//       <div className="container absolute top-0 left-0">
//         <div className=" flex items-center  w-full min-h-[80vh] bg-gradient-to-r from-[#0A3238] to-[#0A323800] rounded-[48px] ">
//           <div className="w-full px-4 md:px-16 md:-mt-12">
//             <h1 className="text-white text-[1.8rem] md:text-[2.2rem] lg:text-[2.6rem] leading-tight">
//               Transform how you <br className="hidden md:block" /> choose your
//               windows & <br className="hidden md:block" /> doors - smart,
//               stylish, and <br className="hidden md:block" /> built to last.
//             </h1>
//             <div className="grid grid-cols-1 md:flex items-center flex-wrap gap-4 mt-4 py-8">
//               <Link
//                 href={""}
//                 className="bg-white px-6 py-3 flex items-center justify-center text-[0.9rem] rounded-full font-medium text-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
//               >
//                 Customise now
//               </Link>
//               <div className="flex items-center gap-4">
//                 <div>
//                   <h3 className="text-[1.6rem] font-semibold text-[#29EDE8]">
//                     1200+
//                   </h3>
//                   <p className="text-white text-[0.8rem]">
//                     Orders placed this month
//                   </p>
//                 </div>
//                 <div>
//                   <h3 className="text-[1.6rem] font-semibold text-[#29EDE8]">
//                     4.9 ★
//                   </h3>
//                   <p className="text-white text-[0.8rem]">
//                     Average customer rating
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={`${styles.button_wrapper} hidden md:block md:absolute -bottom-[1px] left-4 md:w-[40%] lg:w-[35%] h-[100px] `}>
//         <button className={styles.button}>
//             <span className="text-[1.4rem] lg:mr-2">👉</span> Window Design | Custom Solution
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Hero;
"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.scss";
import CountUp from "react-countup";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { MdOutlineStar } from "react-icons/md";

const Hero = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    // Make sure we're in the browser environment
    if (typeof window === "undefined" || !headingRef.current) return;
    const ctx = gsap.context(() => {
      const splitText = new SplitText(headingRef.current, {
        type: "words,chars",
        charsClass: "char",
        wordsClass: "word",
      });

      // Reset any previous animations
      gsap.set(splitText.chars, {
        y: 50,
        opacity: 0,
        rotateX: -90,
      });

      // Create the animation
      gsap.to(splitText.chars, {
        y: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.02,
        duration: 0.8,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Clean up function
      return () => {
        if (splitText.revert) {
          splitText.revert();
        }
      };
    });

    // Clean up context
    return () => ctx.revert();
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <>
      <div
        data-aos="zoom-out-up"
        className="min-h-[70vh] w-full relative container  !mt-10 hidden lg:block"
      >
        <img
          src="/hero.png"
          alt="hero img"
          className="w-full h-[70vh] object-cover object-center z-[-1] md:rounded-[48px] rounded-[20px] justify-end"
        />
        <div className="container absolute top-0 left-0">
          <div
            style={{
              background:
                "linear-gradient(50.55deg, #0A3238 35.29%, rgba(10, 50, 56, 0) 91.51%)",
            }}
            className=" flex items-center  w-full min-h-[70vh] bg-gradient-to-r from-[#0A3238] to-[#0A323800] md:rounded-[48px] rounded-[20px]"
          >
            <div className="w-full px-4 md:px-16 md:-mt-12">
              <h1
                ref={headingRef}
                className="text-white text-[1.8rem] md:text-[2.2rem] lg:text-[2.6rem] leading-tight"
              >
                Transform how you <br className="hidden md:block" /> choose your
                windows & <br className="hidden md:block" /> doors - smart,
                stylish, and <br className="hidden md:block" /> built to last.
              </h1>
              <div className="grid grid-cols-1 md:flex items-center flex-wrap gap-4 mt-4 py-8">
                <Link
                  href={""}
                  className="bg-white px-6 py-3 flex items-center justify-center text-[0.9rem] rounded-full font-medium text-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
                >
                  Customise now
                </Link>
                <div className="flex items-center gap-4 mt-12 lg:mt-0 ">
                  <div>
                    <h3 className="text-[1.6rem] font-semibold text-[#29EDE8]">
                      <CountUp start={0} end={1200} duration={2} /> +
                    </h3>
                    <p className="text-white text-[0.8rem]">
                      Orders placed this month
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[1.6rem] font-semibold text-[#29EDE8]">
                      <CountUp start={0} end={4.4} duration={2} /> ★
                    </h3>
                    <p className="text-white text-[0.8rem]">
                      Average customer rating
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.button_wrapper} hidden md:block md:absolute -bottom-[1px] left-4 md:w-[40%] lg:w-[35%] h-[100px] `}
        >
          <button className={styles.button}>
            <span className="text-[1.4rem] lg:mr-2">👉</span> Window Design |
            Custom Solution
          </button>
        </div>
      </div>
      <section className="relative   w-full flex items-end justify-center px-4 py-18 text-white mb-10 lg:hidden">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            height={300}
            width={300}
            src="/assets/about/hero1.png"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0A3238]/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center space-y-4 max-w-md">
          <h1 className="text-2xl font-medium leading-snug">
            Transform how you choose your windows & doors – smart, stylish, and
            built to last.
          </h1>

          {/* Stats */}
          <div className="flex justify-center items-center space-x-8 text-[10px] mt-2">
            <div>
              <p className="text-[#34f3ec] font-bold text-2xl">1200+</p>
              <p>Orders placed this month</p>
            </div>
            <div className="">
              <p className="text-[#34f3ec] font-bold text-2xl  flex flex-row">
                4.9 <MdOutlineStar />
              </p>
              <p>Average customer rating</p>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-white text-black py-2 px-6 rounded-full font-semibold mt-4">
            Customise now
          </button>

          {/* Bottom Bar */}
          <div className="absolute w-full -bottom-33  left-1/2 transform -translate-x-1/2  text-white rounded-[20px] py-6  text-sm font-semibold flex items-center justify-center gap-4">
            {/* <span>👉</span>
          <span className="text-[12px]">Window Design | CustomSolution</span> */}
            <Image
              src="/windowDesign.png"
              height={200}
              width={400}
              alt="Window Design"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
