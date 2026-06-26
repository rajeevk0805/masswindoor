"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function HardwareSelector({ selectedHardware, onSelect }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card
        className={`p-4 cursor-pointer border-2 ${
          selectedHardware === "Crescent-Handle"
            ? "border-green-700"
            : "border-gray-200"
        }`}
        onClick={() => onSelect("Crescent-Handle")}
      >
        <div className="flex flex-col items-center">
          <div className=" flex items-center justify-center">
            <Image
              src="/assets/crescent.svg"
              alt="Standard Handle"
              width={80}
              height={80}
              className="max-w-full max-h-full"
            />
          </div>
          <h3 className="font-semibold text-xs mt-2">Crescent Handle</h3>
        </div>
      </Card>

      <Card
        className={`p-4 cursor-pointer border-2 ${
          selectedHardware === "Cockspur-Handle"
            ? "border-green-700"
            : "border-gray-200"
        }`}
        onClick={() => onSelect("Cockspur-Handle")}
      >
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center">
            <Image
              src="/assets/cockspur.svg"
              alt="Premium Handle"
              width={80}
              height={80}
              className="max-w-full max-h-full"
            />
          </div>
          <h3 className="font-semibold mt-2 text-xs">Cockspur Handle</h3>
        </div>
      </Card>

      <Card
        className={`p-4 cursor-pointer border-2 ${
          selectedHardware === "Espagnolette-Handle"
            ? "border-green-700"
            : "border-gray-200"
        }`}
        onClick={() => onSelect("Espagnolette-Handle")}
      >
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center">
            <Image
              src="/assets/espagnolette.svg"
              alt="Security Handle"
              width={80}
              height={80}
              className="max-w-full max-h-full"
            />
          </div>
          <h3 className="font-semibold mt-2 text-xs">Espagnolette Handle</h3>
        </div>
      </Card>
    </div>
  );
}