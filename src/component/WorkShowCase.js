"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Define the categories and their associated images
const categories = [
  { id: "all", name: "All" },
  { id: "aluminium", name: "Aluminium Anodising" },
  { id: "powder", name: "Powder Coating" },
  { id: "color", name: "Color Anodising" },
];

// Sample image data for each category
const imagesByCategory = {
  all: [
    { id: 1, src: "/assets/product/anodizing.png", alt: "mass" },
    { id: 2, src: "/assets/product/anodizing.png", alt: "Project showcase 2" },
    { id: 3, src: "/assets/product/anodizing.png", alt: "Project showcase 3" },
    { id: 4, src: "/assets/product/anodizing.png", alt: "Project showcase 4" },
    { id: 5, src: "/assets/product/anodizing.png", alt: "Project showcase 5" },
  ],
  aluminium: [
    { id: 6, src: "/assets/product/color.png", alt: "Aluminium project 1" },
    { id: 7, src: "/assets/product/anodizing.png", alt: "Aluminium project 2" },
    { id: 8, src: "/assets/product/anodizing.png", alt: "Aluminium project 3" },
    { id: 9, src: "/assets/product/anodizing.png", alt: "Aluminium project 4" },
    {
      id: 10,
      src: "/assets/product/anodizing.png",
      alt: "Aluminium project 5",
    },
  ],
  powder: [
    {
      id: 11,
      src: "/assets/product/anodizing.png",
      alt: "Powder coating project 1",
    },
    {
      id: 12,
      src: "/assets/product/anodizing.png",
      alt: "Powder coating project 2",
    },
    {
      id: 13,
      src: "/assets/product/anodizing.png",
      alt: "Powder coating project 3",
    },
    {
      id: 14,
      src: "/assets/product/anodizing.png",
      alt: "Powder coating project 4",
    },
    {
      id: 15,
      src: "/assets/product/anodizing.png",
      alt: "Powder coating project 5",
    },
  ],
  color: [
    {
      id: 16,
      src: "/assets/product/anodizing.png",
      alt: "Color anodising project 1",
    },
    {
      id: 17,
      src: "/assets/product/anodizing.png",
      alt: "Color anodising project 2",
    },
    {
      id: 18,
      src: "/assets/product/anodizing.png",
      alt: "Color anodising project 3",
    },
    {
      id: 19,
      src: "/assets/product/anodizing.png",
      alt: "Color anodising project 4",
    },
    {
      id: 20,
      src: "/assets/product/anodizing.png",
      alt: "Color anodising project 5",
    },
  ],
};

export default function WorkShowcase() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="mx-auto px-4 py-16 ">
      <div className="container ">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-2">
            See Our Work in Action
          </h2>
          <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">
            Browse through our recent installations, designs, and smart window &
            door transformations delivered with precision and care.
          </p>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 ">
            <div className="md:col-span-1 row-span-2    ">
              <div className="h-full">
                <Image
                  src={
                    imagesByCategory[activeCategory][0].src ||
                    "/placeholder.svg"
                  }
                  alt={imagesByCategory[activeCategory][0].alt}
                  width={600}
                  height={400}
                  className="w-full  object-cover rounded-md"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 md:col-span-1 gap-4">
              {imagesByCategory[activeCategory].slice(1, 5).map((image) => (
                <div key={image.id} className="">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap  w-full">
            <div className="inline-flex w-full justify-between rounded-xl overflow-hidden bg-teal-700 p-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "lg:px-22 px-6 py-4 rounded-lg  text-xs lg:text-sm font-medium transition-colors  text-white ",
                    activeCategory === category.id
                      ? "bg-[#0A3238] text-white "
                      : ""
                  )}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

      
      </div>
    </div>
  );
}
