"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Testimonial data
const testimonials = [
  {
    id: 1,
    rating: 4.5,
    reviews: 5,
    quote:
      "I absolutely love my new case! The design is sleek, and it provides great protection without adding bulk. Highly recommended!",
    name: "Alexander Ball",
    position: "Manager",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    rating: 4.5,
    reviews: 5,
    quote:
      "I was looking for a stylish yet sturdy case, and this exceeded my expectations. The grip is fantastic, and it feels premium!",
    name: "Angela H. Lott",
    position: "HR",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    rating: 4.5,
    reviews: 5,
    quote:
      "I've dropped my phone multiple times, and this case has saved it every single time. The protection is top-notch!",
    name: "Nadine R. Creech",
    position: "CEO",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    rating: 4.5,
    reviews: 5,
    quote:
      "I love how many stylish options they have. I got one for myself and another as a gift—both are amazing!",
    name: "Md. Shadan",
    position: "Manager",
    avatar: "/placeholder.svg?height=80&width=80",
  },
 
];

// Render stars based on rating
const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(
        <svg
          key={i}
          className="w-4 h-4 fill-amber-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    } else if (i === fullStars && hasHalfStar) {
      stars.push(
        <svg
          key={i}
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <defs>
            <linearGradient id="half" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" stopColor="#FBBF24" />
              <stop offset="50%" stopColor="#D1D5DB" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half)"
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      );
    } else {
      stars.push(
        <svg
          key={i}
          className="w-4 h-4 fill-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
  }

  return stars;
};

export default function TestimonialSlider() {
  return (
    <div className="w-full py-12 lg:my-24 my-12 px-4 md:px-6 bg-[#d3f1f1]">
      <div className="container ">
        <div className="bg-white rounded-xl p-5  mb-8">
          <h2 className="text-2xl font-bold text-left mb-2">
            Loved by Customers
          </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      {renderStars(testimonial.rating)}
                      <span className="text-sm text-gray-500 ml-2">
                        {testimonial.rating}/5 Reviews
                      </span>
                    </div>
                    <p className="text-sm mb-6 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 border">
                        <AvatarImage
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end mt-4">
            <CarouselPrevious className="relative right-auto mr-2 mt-10" />
            <CarouselNext className="relative right-auto mt-10" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
