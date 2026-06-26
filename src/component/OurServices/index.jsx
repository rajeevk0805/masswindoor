// import Image from "next/image"

// export default function ServicesSection() {
//   return (
//     <section className="w-full py-24 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-20">
//           <h2 className="text-3xl  lg:text-5xl font-bold mb-4">Our Services</h2>
//           <div className="border-1 border-[#0C8582] w-30 items-center text-center m-auto mt-2 "></div>

//           <p className="text-[#969696] max-w-3xl mx-auto mt-4 text-center text-sm lg:text-lg">
//             We specialize in high-quality surface treating services that improve the durability, aesthetics, and
//             functionality of your products.
//           </p>
//         </div>

//         {/* Powder Coating */}
//         <div className="grid md:grid-cols-2 gap-14 mb-16">
//           <div className="order-1 md:order-2 m-auto">
//             <h3 className="text-xl font-semibold mb-4">Powder Coating</h3>
//             <div className="space-y-4">
//               <p className="text-gray-600">
//                 Lorem ipsum dolor sit amet consectetur. Ultricies eget fermentum integer molestie vulputate vitae diam.
//                 Ultricies consectetur suspendisse ligula diam.
//               </p>
//               <p className="text-gray-600">
//                 Lorem ipsum dolor sit amet consectetur. Ultricies eget fermentum integer molestie vulputate vitae diam.
//                 Ultricies consectetur suspendisse ligula diam.
//               </p>
//             </div>
//           </div>
//           <div className="order-2 md:order-1">
//             <div className="rounded-lg overflow-hidden h-64 md:h-full">
//               <Image
//                 src="/assets/power-coating.png"
//                 alt="Powder Coating"
//                 width={600}
//                 height={400}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Color Anodizing */}
//         <div className="grid md:grid-cols-2 gap-14 mb-16">
//           <div className="order-1 md:order-1 m-auto">
//             <h3 className="text-xl font-semibold mb-4">Color Anodizing</h3>
//             <div className="space-y-4">
//               <p className="text-gray-600">
//                 Lorem ipsum dolor sit amet consectetur. Ultricies eget fermentum integer molestie vulputate vitae diam.
//                 Ultricies consectetur suspendisse ligula diam.
//               </p>
//               <p className="text-gray-600">
//                 Lorem ipsum dolor sit amet consectetur. Ultricies eget fermentum integer molestie vulputate vitae diam.
//                 Ultricies consectetur suspendisse ligula diam.
//               </p>
//             </div>
//           </div>
//           <div className="order-2 md:order-2">
//             <div className="rounded-lg overflow-hidden h-64 md:h-full">
//               <Image
//                 src="/assets/color-anado.png"
//                 alt="Color Anodizing"
//                 width={600}
//                 height={400}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Aluminium Anodizing */}
//         <div className="grid md:grid-cols-2 gap-14">
//           <div className="order-1 md:order-2 m-auto">
//             <h3 className="text-xl font-semibold mb-4">Aluminium Anodizing</h3>
//             <div className="space-y-4">
//               <p className="text-gray-600">
//                 Lorem ipsum dolor sit amet consectetur. Ultricies eget fermentum integer molestie vulputate vitae diam.
//                 Ultricies consectetur suspendisse ligula diam.
//               </p>
//               <p className="text-gray-600">
//                 Lorem ipsum dolor sit amet consectetur. Ultricies eget fermentum integer molestie vulputate vitae diam.
//                 Ultricies consectetur suspendisse ligula diam.
//               </p>
//             </div>
//           </div>
//           <div className="order-2 md:order-1">
//             <div className="rounded-lg overflow-hidden h-64 md:h-full">
//               <Image
//                 src="/assets/aluminium.png"
//                 alt="Aluminium Anodizing"
//                 width={600}
//                 height={400}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function ServicesSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <section className="w-full py-24 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-semibold mb-4">
            Our Services
          </h2>
          <div className="border-1 border-[#0C8582] w-30 items-center text-center m-auto mt-2 "></div>

          <p className="text-[#969696] max-w-3xl mx-auto mt-4">
            We specialize in high-quality surface treating services that improve
            the durability, aesthetics, and functionality of your products.
          </p>
        </div>

        {/* Powder Coating */}
        <div className="grid md:grid-cols-2 lg:gap-16 gap-8 mb-16  ">
          <div className="order-1 ">
            <div className=" rounded-2xl lg:rounded-4xl overflow-hidden h-48 md:h-80 ">
              <Image
                src="/assets/power-coating.png"
                alt="Powder Coating"
                width={600}
                height={400}
                data-aos="fade-right"
                className="w-full h-full object-cover "
              />
            </div>
          </div>
          <div
            className="order-2 mt-0 lg:mt-4 md:mt-6 md:m-auto "
            data-aos="fade-left"
          >
            <h3 className="text-xl font-semibold mb-4">Powder Coating</h3>
            <div className="space-y-4 ">
              <p className="text-gray-600">
                Powder coating is a dry finishing technique that involves
                applying finely ground pigment and resin particles to a surface
                using an electrostatic charge. This process allows the particles
                to adhere evenly to the object, creating a uniform layer. Once
                coated, the item is heated in a curing oven, which melts and
                fuses the powder into a solid, smooth coating. The result is a
                durable finish that is highly resistant to chipping, scratching,
                and fading, making it ideal for both industrial and consumer
                products.
              </p>
              <p className="text-gray-600">
                It{'\''}s versatile, eco-friendly, and available in many colors and
                textures, making it ideal for various materials and long-lasting
                finishes.
              </p>
            </div>
          </div>
        </div>

        {/* Color Anodizing */}
        <div className="grid md:grid-cols-2 lg:gap-16 gap-8 mb-16">
          <div className="order-1 md:order-2">
            <div className="rounded-2xl lg:rounded-4xl overflow-hidden h-48 md:h-80">
              <Image
                src="/assets/color-anado.png"
                alt="Color Anodizing"
                width={800}
                height={700}
                data-aos="fade-right"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div
            className="order-2 mt-4 md:mt-6 md:order-1 md:m-auto"
            data-aos="fade-left"
          >
            <h3 className="text-xl font-semibold mb-4">Color Anodizing</h3>
            <div className="space-y-4">
              <p className="text-gray-600">
                Color anodizing is an electrochemical process that strengthens
                and colors the natural oxide layer on metals like aluminum and
                titanium. Unlike paint or powder coating, it doesn't add a
                separate layer but enhances the metal surface itself. Colors are
                created either by adjusting the oxide layer’s thickness, which
                refracts light to produce different hues, or by adding dyes that
                penetrate the porous surface before it is sealed.
              </p>
              <p className="text-gray-600">
                It provides a corrosion- and wear-resistant finish by either
                refracting light through varying oxide thickness or using dyes
                absorbed into the surface.
              </p>
            </div>
          </div>
        </div>

        {/* Aluminium Anodizing */}
        <div className="grid md:grid-cols-2 lg:gap-16 gap-8">
          <div className="order-1">
            <div className="rounded-2xl lg:rounded-4xl overflow-hidden h-48 md:h-80">
              <Image
                src="/assets/aluminium.png"
                alt="Aluminium Anodizing"
                width={600}
                data-aos="fade-right"
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="order-2 mt-4 md:mt-6 md:m-auto" data-aos="fade-left">
            <h3 className="text-xl font-semibold mb-4">Aluminium Anodizing</h3>
            <div className="space-y-4">
              <p className="text-gray-600">
                Aluminium anodizing is an electrochemical process that forms a
                protective oxide layer on the metal’s surface, significantly
                improving its resistance to corrosion and wear. This layer is
                not just a coating but becomes part of the metal itself,
                enhancing its durability without compromising its natural
                appearance.
              </p>
              <p className="text-gray-600">
                The anodized surface is porous, allowing dyes to be absorbed for
                vibrant and long-lasting colors. Once sealed, the finish offers
                both aesthetic appeal and functional protection, making it ideal
                for use in architecture, electronics, automotive parts, and
                household items.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
