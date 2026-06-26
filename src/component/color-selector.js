// "use client";

// import { Card } from "@/components/ui/card";
// import { Check } from "lucide-react";
// import Image from "next/image";

// export default function ColorSelector({
//   selectedColor,
//   onSelect,
//   setFinishType,
//   finishType,
// }) {
//   const colors = [
//     { id: "grey", name: "Dark Grey", hex: "#242424", border: "#242424" },
//     { id: "purple", name: "Purple", hex: "#A600FF", border: "#A600FF" },
//     { id: "yellow", name: "Yellow", hex: "#FFCA05", border: "#FFCA05" },
//     { id: "blue", name: "Blue", hex: "#5361FF", border: "#5361FF" },
//   ];

//   return (
//     <div className="space-y-4">
//       <div className="grid grid-cols-4 gap-3">
//         {colors.map((color) => (
//           <div key={color.id} className="flex flex-col items-center gap-1">
//             <button
//               className="relative w-20 h-12 rounded-lg border-2 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
//               style={{
//                 backgroundColor: color.hex,
//                 borderColor: color.border,
//               }}
//               onClick={() => onSelect(color.id)}
//               aria-label={`Select ${color.name} color`}
//             >
//               {selectedColor === color.id && (
//                 <Check
//                   className={`h-6 w-6  ${
//                     color.id === "white" || color.id === "yellow"
//                       ? "text-black"
//                       : "text-white"
//                   }`}
//                 />
//               )}
//             </button>
//             <span className="text-xs pt-1">{color.name}</span>
//           </div>
//         ))}
//       </div>

//       <div className="mt-4 flex gap-2 w-full justify-between">
//         <Card
//           className={`p-4  w-full border-2 ${
//             selectedColor === "custom" ? "border-green-700" : "border-gray-200"
//           }`}
//         >
//           <div
//             className="flex w-full items-center gap-3 cursor-pointer"
//             onClick={() => onSelect("custom")}
//           >
//             {/* <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"></div> */}
//             <Image src="/assets/matte.svg" height={40} width={40} alt="mass" />
//             <div>
//               <h3 className="font-semibold">Matte</h3>
//             </div>
//             {selectedColor === "custom" && (
//               <Check className="ml-auto h-5 w-5 text-green-700" />
//             )}
//           </div>
//         </Card>
//         <Card
//           className={`p-4 w-full border-2 ${
//             selectedColor === "custom" ? "border-green-700" : "border-gray-200"
//           }`}
//         >
//           <div
//             className="flex items-center gap-3 cursor-pointer m-auto"
//             onClick={() => onSelect("custom")}
//           >
//             <Image src="/assets/glossy.svg" height={40} width={40} alt="mass" />
//             <div>
//               <h3 className="font-semibold">Glossy</h3>
//             </div>
//             {selectedColor === "custom" && (
//               <Check className="ml-auto h-5 w-5 text-green-700" />
//             )}
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function ColorSelector({
  selectedColor,
  onSelect,
  finishType,
  setFinishType,
}) {
  const colors = [
    { id: "grey", name: "Dark Grey", hex: "#242424", border: "#242424" },
    { id: "purple", name: "Purple", hex: "#A600FF", border: "#A600FF" },
    { id: "yellow", name: "Yellow", hex: "#FFCA05", border: "#FFCA05" },
    { id: "blue", name: "Blue", hex: "#5361FF", border: "#5361FF" },
  ];

  return (
    <div className="space-y-4">
      {/* Color selection */}
      <div className="grid grid-cols-4 gap-3">
        {colors.map((color) => (
          <div key={color.id} className="flex flex-col items-center gap-1">
            <button
              className="relative w-20 h-12 rounded-lg border-2 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
              style={{
                backgroundColor: color.hex,
                borderColor: color.border,
              }}
              onClick={() => onSelect(color.id)}
              aria-label={`Select ${color.name} color`}
            >
              {selectedColor === color.id && (
                <Check
                  className={`h-6 w-6 ${
                    color.id === "white" || color.id === "yellow"
                      ? "text-black"
                      : "text-white"
                  }`}
                />
              )}
            </button>
            <span className="text-xs pt-1">{color.name}</span>
          </div>
        ))}
      </div>

      {/* Finish Type Selection */}
      <div className="mt-4 flex gap-2 w-full justify-between">
        {/* Matte Card */}
        <Card
          className={`p-4 w-full border-2 ${
            finishType === "matte" ? "border-green-700" : "border-gray-200"
          }`}
          onClick={() => setFinishType("matte")}
        >
          <div className="flex w-full items-center gap-3 cursor-pointer">
            <Image src="/assets/matte.svg" height={40} width={40} alt="matte" />
            <div>
              <h3 className="font-semibold">Matte</h3>
            </div>
            {finishType === "matte" && (
              <Check className="ml-auto h-5 w-5 text-green-700" />
            )}
          </div>
        </Card>

        {/* Glossy Card */}
        <Card
          className={`p-4 w-full border-2 ${
            finishType === "glossy" ? "border-green-700" : "border-gray-200"
          }`}
          onClick={() => setFinishType("glossy")}
        >
          <div className="flex items-center gap-3 cursor-pointer ">
            <Image src="/assets/glossy.svg" height={40} width={40} alt="glossy" />
            <div>
              <h3 className="font-semibold">Glossy</h3>
            </div>
            {finishType === "glossy" && (
              <Check className="ml-auto h-5 w-5 text-green-700" />
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
