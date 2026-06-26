"use client";

import { Card } from "@/components/ui/card";

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
            <img
              src="/assets/crescent.svg"
              alt="Standard Handle"
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
            <img
              src="/assets/cockspur.svg"
              alt="Premium Handle"
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
            <img
              src="/assets/espagnolette.svg"
              alt="Security Handle"
              className="max-w-full max-h-full"
            />
          </div>
          <h3 className="font-semibold mt-2 text-xs">Espagnolette Handle</h3>
        </div>
      </Card>
    </div>
  );
}
