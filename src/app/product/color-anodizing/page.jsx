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
      title: "Enhanced Aesthetics",
      description:
        "Offers a vast range of aesthetic finishes from natural metallic tones to brilliant, vibrant colors, with consistent results and excellent color stability.",
      icon: "/assets/product/icons/1.svg",
    },
    {
      title: "Improved Durability",
      description:
        "Significantly increases surface hardness, providing superior wear and abrasion resistance for demanding applications.",
      icon: "/assets/product/icons/2.svg",
    },
    {
      title: "Excellent Corrosion Resistance",
      description:
        "Creates a protective barrier that shields aluminum from environmental factors and chemical exposure, extending product lifespan and maintaining color vibrancy.",
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
        title="Color Anodizing"
        description="Discover who we are, what we stand for, and how at MASS, we're transforming the surface finishing industry with smarter, lasting, and vibrant solutions ."
      />
      <ProductAbout
        subtitle="Welcome to Mass Anodizing"
        title="Enhancing Aluminium with Vibrant Colors & Lasting Finishes"
        description="Color anodizing is a specialized surface treatment at MASS that transforms aluminium into a visually striking and durable material. Through an advanced electrochemical process, we apply a protective oxide layer that can be infused with a vast spectrum of vibrant colors, ideal for both aesthetic appeal and functional durability. Whether it's for unique product aesthetics, architectural accents, or brand differentiation – color anodizing elevates the aluminium's appeal, ensuring longevity and a brilliant finish."
        image="/assets/product/color.png"
      />
      <Benefits
        benefitsData={benefitsData}
        title="Benefits of Our Color Anodizing"
        description="Our advanced color anodizing process provides numerous advantages that enhance the performance, appearance, and longevity of your aluminum components ."
      />
            <ProcessEfficiency/>

      <Process
        ProcessData={anodizingSteps}
        subtitle="Precision Coloring"
        title="Our Color Anodizing Process"
        description="Experience a refined color anodizing process that enhances aesthetics, boosts durability, and delivers long-term vibrancy to your aluminum components."
      />
        <WhyChoose/>
              <FAQContactPage/>
        
    </div>
  );
}

export default page;
