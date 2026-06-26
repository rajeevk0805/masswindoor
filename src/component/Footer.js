import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0A3238] text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex justify-between lg:py-12 py-6 items-center">
          <h1 className="text-xl lg:text-5xl font-semibold">
            Let’s <span className="text-[#29EDE8]">Connect</span> there
          </h1>
          <div>
            <button className="px-4 py-2 bg-[#29EDE8] text-[#0A3238] rounded-full hover:bg-gray-700 transition-colors cursor-pointer">
              Contact Us
            </button>
          </div>
        </div>
        <div className="border-b border-[#29EDE8] mb-10"></div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 justify-between mb-10">
          <div>
            {/* <h2 className="text-2xl font-bold ">MASS</h2> */}
            <Image
              src="/whitelogo.svg"
              height={100}
              width={100}
              alt="logo"
              className="object-cover"
            />
            <p className="mt-4 text-white text-sm lg:text-md">
              MASS is your trusted partner for high-quality uPVC and aluminium
              windows & doors. With a focus on customization, transparency, and
              doorstep service, we bring modern design and lasting durability
              right to your home.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link
                href="#"
                className="text-black hover:text-white bg-white rounded-full p-1"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-black hover:text-white bg-white rounded-full p-1"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-black hover:text-white bg-white rounded-full p-1"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-black hover:text-white bg-white rounded-full p-1"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="lg:items-center lg:m-auto text-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#29EDE8]">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="#" className="ttext-white0 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white hover:text-white">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white hover:text-white">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white hover:text-white">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="items-center lg:m-auto text-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#29EDE8]">
                Get In touch
              </h3>
              <ul className="mt-4 space-y-4">
                <li className="text-white">
                  Near Alpana Cinema Hall Digha Ashiana Road , Digha-800011 , Patna Bihar
                  <br />
                </li>
                <li className="text-white">+91 9334154407</li>
                <li className="text-white">mohdsaleh129@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#D7F9FF] py-6">
        <div className="mt-12  text-[10px] lg:text-[14px] border-gray-800 pt-8 container py-2 flex justify-between flex-col lg:flex-row ">
          <p className=" text-[#004430] mb-4 lg:mb-0 ">
            &copy; {new Date().getFullYear()} All rights reserved. | Built with
            ❤️ by Destiny IT Services Pvt. Ltd..
          </p>
          <div className="items-center m-auto">
            <Link href="/terms-&-conditions" className="text-[#004430] pr-8">
              Terms & Conditions
            </Link>
            <Link href="/privacy-policy" className="text-[#004430]">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
