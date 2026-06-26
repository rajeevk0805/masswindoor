import Image from "next/image";
import Link from "next/link";

export default function SmartCustomization() {
  return (
    <section className="bg-[linear-gradient(270deg,_rgba(4,78,76,0.2)_0%,_rgba(24,191,195,0.2)_100%)] py-16 px-4 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 text-center md:text-left">
          <h2 className="text-2xl md:text-5xl font-semibold text-gray-800">
            Smart Customization - Get
            <br className="hidden md:block" />
            <span className="text-[#017C7B]"> Your Offer Today</span>
          </h2>

          <Link href="/calculator" className="mt-4 md:mt-0 bg-[#0A3238] text-white px-6 py-3 rounded-full font-medium">
            Customize Now
          </Link>
        </div>

        {/* Card Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="py-8   bg-white rounded-2xl border border-[#D8FFFE]  p-6 flex flex-col hover:shadow-[0px_8.08px_0px_0px_#1F2A44] transition-all "
            >
              <div className="w-full h-40 flex justify-center mb-4">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={260}
                  height={260}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 mt-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{card.description}</p>
              <Link
                href="#"
                className="text-[#017C7B] text-sm font-medium mt-auto flex items-center gap-1"
              >
                Learn more <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





const cards = [
  {
    title: "Choose Your Product",
    description:
      "Select what you're planning to install as per your requirement.",
    image: "/assets/customize/1.png",
  },
  {
    title: "Select Size & Style",
    description:
      "Select what you're planning to install as per your requirement.",
    image: "/assets/customize/2.png",
  },
  {
    title: "Pick Material & Glass",
    description:
      "Select what you're planning to install as per your requirement.",
    image: "/assets/customize/4.png",
  },
];
