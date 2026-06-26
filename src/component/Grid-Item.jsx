// import Image from "next/image"
// import Link from "next/link"

// export function GridItem({ title, description, image, className = "" }) {
//   return (
//     <div className={` ${className} !border-[#D8FFFE] rounded-3xl bg-[#F1F1F1] `}>
//       <div className="flex flex-col h-full">
//         <div className="mb-3">
//           <div className="relative w-12 h-12">
//             <Image src={image || "/placeholder.svg"} alt={title} fill className="object-contain" />
//           </div>
//         </div>
//         <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
//         <p className="text-sm text-gray-500 mb-4">{description}</p>
//         <div className="mt-auto">
//           <Link href="#" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
//             Learn more
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }
import Image from "next/image";
import Link from "next/link";

export function GridItem({ title, description, image, className = "" ,hoverImage }) {
  return (
    <div
      className={`group relative ${className} !border-[#D8FFFE] rounded-3xl bg-[#F1F1F1] overflow-hidden`}
    >
      <div className="flex flex-col h-full p-4">
        <div className="mb-3">
          <div className="relative w-12 h-12">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">{description}</p>
        {/* <div className="mt-auto">
          <Link
            href="#"
            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            Learn more
          </Link>
        </div> */}
      </div>

      {/* Hidden image appears on hover */}
      <div className="absolute inset-0 bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="relative w-full h-full">
          <Image
            src={hoverImage}
            alt={`${title} - Preview`}
            fill
            className="object-"
          />
        </div>
      </div>
    </div>
  );
}
