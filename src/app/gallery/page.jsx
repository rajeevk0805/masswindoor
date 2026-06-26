import HeroSection from "@/component/HeroSection";
import { TestimonialCarousel } from "@/component/Testimonial";
import WorkShowcase from "@/component/WorkShowCase";
import React from "react";

function page() {
  return (
    <div>
      <HeroSection
        title="Gallery"
        description="Discover who we are, what we stand for, and how we're transforming the window & door industry with smarter, lasting solutions."
      />
      <WorkShowcase />
      <TestimonialCarousel/>
    </div>
  );
}

export default page;
