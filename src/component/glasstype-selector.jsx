"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function GlassTypeSelector({ selectedGlassType, onSelect }) {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <Card
          className={`p-4 cursor-pointer border-2 ${
            selectedGlassType === "clear"
              ? "border-green-700"
              : "border-gray-200"
          }`}
          onClick={() => onSelect("clear")}
        >
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center">
              <Image
                src="/assets/clear-glass.svg"
                alt="Clear Glass"
                width={96}
                height={96}
                className="max-w-full max-h-full"
              />
            </div>
            <h3 className="font-semibold mt-2">Clear</h3>
          </div>
        </Card>

        <Card
          className={`p-4 cursor-pointer border-2 ${
            selectedGlassType === "frosted"
              ? "border-green-700"
              : "border-gray-200"
          }`}
          onClick={() => onSelect("frosted")}
        >
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center">
              <Image
                src="/assets/frosted.svg"
                alt="Frosted Glass"
                width={96}
                height={96}
                className="max-w-full max-h-full"
              />
            </div>
            <h3 className="font-semibold mt-2">Frosted</h3>
          </div>
        </Card>

        <Card
          className={`p-4 cursor-pointer border-2 ${
            selectedGlassType === "tinted"
              ? "border-green-700"
              : "border-gray-200"
          }`}
          onClick={() => onSelect("tinted")}
        >
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center">
              <Image
                src="/assets/tinted.svg"
                alt="Tinted Glass"
                width={96}
                height={96}
                className="max-w-full max-h-full"
              />
            </div>
            <h3 className="font-semibold mt-2">Tinted</h3>
          </div>
        </Card>
      </div>
      <div>
        <h2 className="text-[#5E5E5E] py-3 font-semibold text-lg">Glass Properties</h2>
        <ul className="flex justify-between">
          <li>Thermal Insulation</li>
          <li className="font-semibold py-2">Standard</li>
        </ul>
        <ul className="flex justify-between">
          <li>Privacy Level</li>
          <li className="font-semibold py-2">Low</li>
        </ul>
        <ul className="flex justify-between">
          <li>UV Protection</li>
          <li className="font-semibold">Basic</li>
        </ul>
      </div>
    </>
  );
}