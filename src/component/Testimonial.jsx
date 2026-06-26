"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    quote:
      "Their team delivers professional and timely results. The quality of workmanship and attention to detail sets them apart from others in the industry.",
    name: "John Smith",
    title: "CEO",
    image: "/assets/product/avator.svg",
  },
  {
    id: 2,
    quote:
      "We've been working with them for years and have always been impressed with their professionalism and the quality of their work. Highly recommended!",
    name: "Jane Doe",
    title: "Marketing Director",
    image: "/assets/product/avator.svg",
  },
  {
    id: 3,
    quote:
      "The attention to detail and quality of service exceeded our expectations. They delivered our project on time and within budget.",
    name: "Robert Johnson",
    title: "Project Manager",
    image: "/assets/product/avator.svg",
  },
  {
    id: 4,
    quote:
      "The attention to detail and quality of service exceeded our expectations. They delivered our project on time and within budget.",
    name: "Robert Johnson",
    title: "Project Manager",
    image: "/assets/product/avator.svg",
  },
  {
    id: 5,
    quote:
      "The attention to detail and quality of service exceeded our expectations. They delivered our project on time and within budget.",
    name: "Robert Johnson",
    title: "Project Manager",
    image: "/assets/product/avator.svg",
  },
];

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [api, setApi] = useState(null);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    handleSelect();

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  const handleNext = () => {
    api?.scrollNext();
  };

  const handlePrevious = () => {
    api?.scrollPrev();
  };

  return (
    <section className="mb-18">
      <div className="relative ">
        <div className=" items-center  container text-center mb-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2 text-center">
              What Our Clients Say
            </h2>
            <p className="text-gray-500  text-center">
              Hear experiences from those who've trusted us with their custom
              projects and see what sets us apart.
            </p>
          </div>
        </div>

        <Carousel className="w-full !overflow-x-hidden " setApi={setApi}>
          <div className="my-10">
            <div className="flex gap-4 justify-end  container">
              <CarouselPrevious
                onClick={handlePrevious}
                className="z-10 h-10 w-10 static rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-700"
              />
              <CarouselNext
                onClick={handleNext}
                className="z-10 h-10 w-10 static rounded-full bg-teal-700 text-white hover:bg-teal-800"
              />
            </div>
          </div>
          <CarouselContent>
            {testimonials.map((testimonial, i) => {
              return (
                <CarouselItem
                  key={testimonial.id}
                  className={`md:basis-1/3 transition-opacity duration-300 ${
                    i === current + 1 ? "lg:opacity-100 " : "lg:opacity-30"
                  }`}
                >
                  <div className="p-6  rounded-lg h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 lg:w-52 lg:h-52 rounded-full  bg-gray-200">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={250}
                            height={250}
                            className="rounded-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="bg-[#F1F1F1] p-4 relative">
                        <p className="text-[#2D2E2E] mb-2">
                          {testimonial.quote}
                        </p>
                        <p className="font-medium">
                          {testimonial.name}, {testimonial.title}
                        </p>
                        <div className="absolute -top-10 -right-0    !z-[99999999]">
                          <Image
                            src="/assets/product/quote.svg"
                            height={30}
                            width={30}
                            alt="mass"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>

        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  current === index ? "bg-teal-700" : "bg-gray-300"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
