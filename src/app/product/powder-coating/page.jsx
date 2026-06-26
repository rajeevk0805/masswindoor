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
      title: "Superior Durability",
      description:
        "Creates an exceptionally tough finish, providing superior wear, impact, and abrasion resistance for even the most demanding applications.",
      icon: "/assets/product/icons/1.svg",
    },
    {
      title: "Enhanced Aesthetics",
      description:
        "Offers a wide range of vibrant colors, textures, and finishes, ensuring consistent results and excellent color stability for a premium look.",
      icon: "/assets/product/icons/2.svg",
    },
    {
      title: "Excellent Corrosion Resistance",
      description:
        "Forms a seamless barrier that shields surfaces from moisture, chemicals, and environmental factors, significantly extending product lifespan.",
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
        "Components are thoroughly cleaned, pre-treated, and dried to remove any impurities, ensuring optimal powder adhesion and a flawless finish.",
    },
    {
      id: "02",
      title: "Powder Application",
      description:
        "The dry powder is electrostatically applied to the prepared surface, ensuring uniform coverage and excellent adhesion for a consistent coating.",
    },
    {
      id: "03",
      title: "Curing (Baking)",
      description:
        "The coated parts are then transferred to a curing oven where heat melts the powder, allowing it to flow and form a smooth, hard, and durable film.",
    },
    {
      id: "04",
      title: "Quality Inspection",
      description:
        "After cooling, each coated item undergoes a rigorous quality inspection to verify thickness, adhesion, and appearance, guaranteeing a superior and long-lasting finish.",
    },
  ];
  return (
    <div>
      <HeroSection
        title="Powder Coating"
        description="Delivering vibrant, durable, and eco-friendly finishes that protect and elevate every surface."
      />
      <ProductAbout
        subtitle="Welcome to Mass Coating"
        title="Elevating Surfaces with Durable & Vibrant Powder Coatings"
        description="Powder coating is an advanced dry finishing process that applies a protective and decorative finish to a wide range of materials. Unlike liquid paint, it uses electrostatically charged powder, which is then cured under heat to form a hard, durable, and aesthetically pleasing layer. This process creates a finish that is more resistant to chipping, scratching, fading, and corrosion than conventional paints. Ideal for industrial components, automotive parts, furniture, and architectural elements – powder coating enhances product longevity, appearance, and overall performance."
        image="/assets/product/power.png"
      />
      <Benefits
        benefitsData={benefitsData}
        title="Benefits of Our Powder Coating"
        description="Our advanced powder coating process delivers numerous advantages that enhance the performance, appearance, and longevity of your components."
      />
                  <ProcessEfficiency/>

      <Process
        ProcessData={anodizingSteps}
        subtitle="Precision Application"
        title="Our Powder Coating Process"
        description="Experience a refined powder coating process that boosts durability, elevates finish quality, and delivers long-term protection for your components."
      />
      <WhyChoose />
      <FAQContactPage/>
    </div>
  );
}

export default page;
