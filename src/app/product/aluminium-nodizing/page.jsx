import Benefits from "@/component/Benefits";
import FAQContactPage from "@/component/Faq";
import HeroSection from "@/component/HeroSection";
import Process from "@/component/Process";
import ProcessEfficiency from "@/component/Process-Efficiency";
import ProductAbout from "@/component/product-about";
import WhyChoose from "@/component/WhyChoose";
import React from "react";

function page() {
  // benefitsData.js
  const benefitsData = [
    {
      title: "Corrosion Resistance",
      description:
        "Creates a protective barrier that shields aluminum from environmental factors and chemical exposure, extending product lifespan.",
      icon: "/assets/product/icons/1.svg",
    },
    {
      title: "Improved Durability",
      description:
        "Significantly increases surface hardness, providing superior wear and abrasion resistance for demanding applications.",
      icon: "/assets/product/icons/2.svg",
    },
    {
      title: "Enhanced Appearance",
      description:
        "Offers a range of aesthetic finishes from natural to vibrant colors, with consistent results and excellent color stability.",
      icon: "/assets/product/icons/3.svg",
    },
    {
      title: "Eco-Friendly Process",
      description:
        "Our anodizing methods minimize environmental impact through efficient resource use and reduced waste generation.",
      icon: "/assets/product/icons/4.svg",
    },
    {
      title: "UV Protection",
      description:
        "Prevents degradation from sun exposure, maintaining appearance and structural integrity in outdoor applications.",
      icon: "/assets/product/icons/5.svg",
    },
    {
      title: "Low Maintenance",
      description:
        "Anodized surfaces are easy to clean and maintain, requiring minimal upkeep while retaining their appearance over time.",
      icon: "/assets/product/icons/6.svg",
    },
  ];
  const anodizingSteps = [
    {
      id: "01",
      title: "Surface Preparation",
      description:
        "Aluminum parts are thoroughly cleaned and etched to remove impurities, ensuring optimal anodizing adhesion.",
    },
    {
      id: "02",
      title: "Anodizing",
      description:
        "The aluminum is immersed in an electrolytic bath, forming a durable and corrosion-resistant oxide layer on the surface.",
    },
    {
      id: "03",
      title: "Coloring (Optional)",
      description:
        "Color dyes or metallic salts are added to the anodized surface for customized finishes and aesthetic appeal.",
    },
    {
      id: "04",
      title: "Sealing",
      description:
        "The pores of the anodized layer are sealed with steam or chemicals to lock in color and improve durability.",
    },
  ];

  return (
    <div>
      <HeroSection
        title="Aluminium Anodizing"
        description="Enhancing durability, aesthetics, and corrosion resistance through advanced surface finishing technology."
      />
      <ProductAbout
        subtitle="Welcome to Mass Anodizing"
        title="Enhancing Aluminium 
with Lasting Strength & Beauty"
        description="Aluminium anodizing is a surface treatment that transforms aluminium into a more durable, corrosion-resistant, and aesthetically appealing material. Through an advanced electrochemical process, it adds a protective oxide layer, ideal for both functional and decorative applications.
Whether it's for industrial use, architectural detailing, or premium finishings — anodizing elevates the aluminium’s quality, ensuring longevity and performance."
        image="/assets/product/anodizing.png"
      />
      <Benefits
        benefitsData={benefitsData}
        title="Benefits of Our Anodizing Services"
        description="Our advanced anodizing process provides numerous advantages that enhance the performance, appearance, and longevity of your aluminum components."
      />
      <ProcessEfficiency/>
      <Process
        ProcessData={anodizingSteps}
        subtitle="Precision Engineering"
        title="Our Anodizing Process"
        description="Experience a refined anodizing process that boosts durability, elevates finish quality, and delivers long-term protection for your aluminum products."
      />
      <WhyChoose />
      <FAQContactPage />
    </div>
  );
}

export default page;
