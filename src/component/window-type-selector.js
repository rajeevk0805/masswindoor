"use client";

import { Card } from "@/components/ui/card";

export default function WindowTypeSelector({ selectedType, onSelect }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card
        className={`p-4 cursor-pointer border-2 ${
          selectedType === "slider" ? "border-green-700" : "border-gray-200"
        }`}
        onClick={() => onSelect("slider")}
      >
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 flex items-center justify-center">
            <img
              src="/assets/slider.svg"
              alt="Slider Window"
              className="max-w-full max-h-full"
            />
          </div>
          <h3 className="font-semibold mt-2">Slider</h3>
          <p className="text-xs text-center text-gray-500 mt-1">
            Space-saving design that slides horizontally
          </p>
        </div>
      </Card>

      <Card
        className={`p-4 cursor-pointer border-2 ${
          selectedType === "casement" ? "border-green-700" : "border-gray-200"
        }`}
        onClick={() => onSelect("casement")}
      >
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 flex items-center justify-center">
            <img
              src="/assets/casement.svg"
              alt="Casement Window"
              className="max-w-full max-h-full"
            />
          </div>
          <h3 className="font-semibold mt-2">Casement</h3>
          <p className="text-xs text-center text-gray-500 mt-1">
            Hinged at the side and opens outward
          </p>
        </div>
      </Card>
    </div>
  );
}
