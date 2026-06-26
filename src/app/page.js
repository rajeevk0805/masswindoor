import AboutMass from "@/component/AboutMass";
import GridSection from "@/component/Grid-Section";
import OurServices from "@/component/OurServices";
import MarqueeSection from "./MarqueeSection";
import Hero from "@/component/Hero/Hero";
import OurWork from "@/component/OurWork";
import FAQContactPage from "@/component/Faq";
import SmartCustomize from "@/component/SmartCustomize";
import TestimonialSlider from "@/component/Testimonial-Slider";
import AnimatedSection from "@/component/AnimationSection";
import WindowCustomizer from "@/component/WindowConfigrator";

export default function Home() {
  const featuredGridItems = [
    {
      title: "Architectural & Construction",
      description:
        "We deliver durable and stylish aluminium solutions for buildings and infrastructure. Perfect for facades, frames, and structural needs with long-lasting performance.",
      icon: "/assets/industries/1.svg",
      image: "/assets/industries/1.png",
    },
    {
      title: "Automotive & Transportation",
      description:
        "Our lightweight aluminium parts improve vehicle efficiency and safety. Widely used in commercial and passenger transport systems.",
      icon: "/assets/industries/2.svg",
      image: "/assets/industries/2.png",
    },
    {
      title: "Industrial Machinery & Equipment",
      description:
        "Built to handle stress and precision, our aluminium components support heavy-duty machinery. Trusted for durability and consistent operation.",
      icon: "/assets/industries/3.svg",
      image: "/assets/industries/3.png",
    },
    {
      title: "Furniture & Interior Design",
      description:
        "Enhance interiors with sleek aluminium designs ideal for furniture and décor. A top choice for modern, minimal, and functional spaces.",
      icon: "/assets/industries/4.svg",
      image: "/assets/industries/4.png",
    },
    {
      title: "Electronics & Consumer Goods",
      description:
        "Our aluminium adds strength and sleekness to electronic devices. Ideal for heat dissipation and elegant design across various products.",
      icon: "/assets/industries/5.svg",
      image: "/assets/industries/5.png",
    },
    {
      title: "Renewable Energy & Solar",
      description:
        "Our precision aluminium profiles are ideal for solar panel frames, mounting structures, and clean energy equipment. Lightweight, corrosion-resistant, and built for long-term environmental exposure.",
      icon: "/assets/industries/6.svg",
      image: "/assets/industries/6.png",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <Hero />
  
      <MarqueeSection />

      <AnimatedSection>
        <AboutMass />
      </AnimatedSection>
      <AnimatedSection>
        <OurServices />
      </AnimatedSection>
      <AnimatedSection>
        <SmartCustomize />
      </AnimatedSection>
      <AnimatedSection>
        <GridSection
          title="Industries We Serve"
          items={featuredGridItems}
          className="py-12"
          itemClassName="bg-[#F1F1F1] shadow-sm border border-gray-100 p-6 "
          columns={3}
        />
      </AnimatedSection>
      <AnimatedSection>
        <TestimonialSlider />
      </AnimatedSection>
      <AnimatedSection>
        <OurWork />
      </AnimatedSection>
      <AnimatedSection>
        <FAQContactPage />
      </AnimatedSection>
    </div>
  );
}
