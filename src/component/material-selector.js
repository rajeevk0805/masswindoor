"use client";

import { Card } from "@/components/ui/card";

export default function MaterialSelector({ selectedMaterial, onSelect }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card
        className={`p-4 cursor-pointer border-2 ${
          selectedMaterial === "upvc" ? "border-green-700" : "border-gray-200"
        }`}
        onClick={() => onSelect("upvc")}
      >
        <div className="flex flex-col items-center">
          <div className="w-18 h-18 flex items-center justify-center">
            <img
              src="/assets/low_maintance.svg"
              alt="UPVC Material"
              className="max-w-full max-h-full"
            />
          </div>
          <h3 className="font-semibold mt-2">UPVC</h3>
          <p className="text-xs text-center text-gray-500 mt-1">
            Durable and low maintenance
          </p>
        </div>
      </Card>

      <Card
        className={`p-4 cursor-pointer border-2 ${
          selectedMaterial === "aluminum"
            ? "border-green-700"
            : "border-gray-200"
        }`}
        onClick={() => onSelect("aluminum")}
      >
        <div className="flex flex-col items-center">
          <div className="w-18 h-18 flex items-center justify-center">
            <img
              src="/assets/high-main.svg"
              alt="Aluminum Material"
              className="max-w-full max-h-full"
            />
          </div>
          <h3 className="font-semibold mt-2">Aluminum</h3>
          <p className="text-xs text-center text-gray-500 mt-1">
            Sleek and modern appearance
          </p>
        </div>
      </Card>
    </div>
  );
}
