import React from "react";
import {
  Phone,
  Clock,
  Shield,
  Award,
  Ruler,
  Grid,
  Truck,
  PenToolIcon as Tool,
  Eye,
  Target,
} from "lucide-react";
import Link from "next/link";
import HeroSection from "@/component/HeroSection";
import Image from "next/image";
import WhyChoose from "@/component/WhyChoose";
import TestimonialSlider from "@/component/Testimonial-Slider";
import FAQContactPage from "@/component/Faq";
import WorkShowcase from "@/component/WorkShowCase";
import { TestimonialCarousel } from "@/component/Testimonial";
import AnimatedSection from "@/component/AnimationSection";
function page() {
  const teamMembers = [
    {
      name: "Md. Shadan",
      title: "Founder/CEO",
      image: "/img.jpg", // Replace with actual image paths
    },
    {
      name: "Md. Shadan",
      title: "Founder/CEO",
      image: "/img.jpg", // Replace with actual image paths
    },
    {
      name: "Md. Shadan",
      title: "Founder/CEO",
      image: "/img.jpg", // Replace with actual image paths
    },
    {
      name: "Md. Shadan",
      title: "Founder/CEO",
      image: "/img.jpg", // Replace with actual image paths
    },
  ];
  return (
    <div>
      <HeroSection
        title="About Us"
        description="Discover who we are, what we stand for, and how we're transforming the window & door industry with smarter, lasting solutions."
      />
      <main className="container">
        {/* Top Section */}
      <AnimatedSection>
          <section className="pt-16 px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/assets/product/about.png"
                height={500}
                width={500}
                alt="mass"
              />
            </div>

            <div className="space-y-6">
              <p className="flex gap-2 items-center text-[#696969]">
                <Image
                  src="/assets/product/iconabout.svg"
                  height={14}
                  width={14}
                  alt="mass"
                />
                About Company
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Your Trusted Partner in
                <br />
                Smart Window & Door Solutions
              </h2>
              <p className="text-[#989898] text-sm">
                We specialize in offering premium uPVC and aluminium window and
                door systems tailored to your needs. With cutting-edge
                technology, expert craftsmanship, and transparent pricing, we’re
                redefining how people build and renovate — smarter, faster,
                better.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <Image
                      src="/assets/product/about1.svg"
                      height={40}
                      width={40}
                      alt="mass"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Trusted by Thousands
                    </h3>
                    <p className="text-sm text-[#989898]">
                      Our customers trust us for quality products and reliable
                      service
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <Image
                      src="/assets/product/about2.svg"
                      height={40}
                      width={40}
                      alt="mass"
                    />{" "}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Fast Delivery System
                    </h3>
                    <p className="text-sm text-[#989898]">
                      Quick and efficient delivery to meet your timeline
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <Image
                      src="/assets/product/about3.svg"
                      height={40}
                      width={40}
                      alt="mass"
                    />{" "}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Unmatched Durability
                    </h3>
                    <p className="text-sm text-[#989898]">
                      Products designed to last with superior materials
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-14 mt-18 text-center lg:pb-24">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                800 +
              </h3>
              <p className="text-xs text-gray-500">
                Products Customized Online{" "}
              </p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                50 +
              </h3>
              <p className="text-xs text-gray-500">
                Window & Door Solutions We Provide
              </p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                20 +
              </h3>
              <p className="text-xs text-gray-500">
                Years of Service Excellence
              </p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                95 %
              </h3>
              <p className="text-xs text-gray-500">
                Customer Satisfaction Rate
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

        {/* Bottom Section */}
        <section className="my-24">
          {/* Services Bar */}

          {/* Vision & Mission */}
          <div className="bg-cyan-50 relative p-8 lg:px-32 lg:pt-36 rounded-b-lg grid md:grid-cols-2 gap-8 ">
            <div className="space-y-4 border-r-[#43B9B9] lg:border-r-1 px-2">
              <div className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-teal-700" />
                <h3 className="font-semibold text-2xl  lg:text-4xl text-teal-900">
                  Vision
                </h3>
              </div>
              <p className="text-sm text-gray-700 ">
                To revolutionize the window and door industry with innovative
                solutions that enhance the beauty, efficiency, and security of
                homes while providing exceptional customer service and
                sustainability.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-teal-700" />
                <h3 className="font-semibold text-2xl  lg:text-4xl text-teal-900">
                  Mission
                </h3>
              </div>
              <p className="text-sm text-gray-700">
                To establish ourselves as the premier window and door solutions
                provider by consistently delivering high-quality products,
                professional installation, and outstanding service to enhance
                the comfort and security of our clients{'\''} homes.
              </p>
            </div>

            <div className="md:col-span-2 flex justify-center rounded-lg  mt-4 items-center text-center">
              <Link
                href="#"
                className="bg-teal-900 text-white px-4 py-3 rounded text-sm hover:bg-teal-800 transition-colors"
              >
                Know More About Us
              </Link>
            </div>
            <div className="hidden lg:block ">
              <div className="bg-[#0A3238]  k absolute -top-20 left-0  py-14  rounded-[50px] right-0 mx-[200px]  text-white  p-6 grid grid-cols-4 gap-4 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <Ruler className="h-6 w-6" />
                  <span className="text-sm font-medium">Perfect Fitting</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Grid className="h-6 w-6" />
                  <span className="text-sm font-medium">
                    Comprehensive Solutions
                  </span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Clock className="h-6 w-6" />
                  <span className="text-sm font-medium">On-Time Delivery</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Tool className="h-6 w-6" />
                  <span className="text-sm font-medium">
                    Expert Craftsmanship
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <AnimatedSection>
        <TestimonialCarousel />
      </AnimatedSection>

      <AnimatedSection>
        <FAQContactPage />
      </AnimatedSection>
      <section
        style={{
          background:
            "linear-gradient(270deg, rgba(4, 78, 76, 0.2) 0%, rgba(24, 191, 195, 0.2) 100%)",
        }}
        className=" py-12 px-4"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#0A3238] mb-2">
            Meet the Core Team Behind MASS
          </h2>
          <p className="text-gray-500 mb-10">
            Skilled minds and hands behind every custom-built solution.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md  flex flex-col items-center"
              >
                <div className="w-full h-[280px] bg-gray-200">
                  {/* Replace with real image */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={280}
                    height={280}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
