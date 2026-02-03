// "use client";
// import Image from "next/image";

// export default function HeroCube() {
//     return (
//         <section className="h-screen w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white overflow-hidden">

//             {/* LEFT SIDE */}
//             <div className="md:w-1/2 space-y-6 text-center md:text-left">
//                 <h1 className="text-4xl md:text-6xl font-bold leading-tight">
//                     Build Amazing <span className="text-indigo-500">Experiences</span>
//                 </h1>

//                 <p className="text-slate-300 text-lg">
//                     Create stunning web interfaces with smooth animations and modern 3D
//                     effects using Next.js and Tailwind CSS.
//                 </p>

//                 <button className="mt-4 px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-300 hover:-translate-y-1">
//                     Get Started
//                 </button>
//             </div>

//             {/* RIGHT SIDE */}
//             <div className="md:w-1/2 flex justify-center items-center mt-16 md:mt-0">

//                 <div className="w-[300px] h-[300px] perspective-1200">
//                     <div className="relative w-full h-full preserve-3d animate-cube-rotate animate-cube-float">

//                         {/* FRONT */}
//                         <div className="absolute w-full h-full rounded-2xl overflow-hidden"
//                             style={{ transform: "rotateY(0deg) translateZ(150px)" }}>
//                             <Image src="https://picsum.photos/400?1" alt="" fill className="object-cover" />
//                         </div>

//                         {/* BACK */}
//                         <div className="absolute w-full h-full rounded-2xl overflow-hidden"
//                             style={{ transform: "rotateY(180deg) translateZ(150px)" }}>
//                             <Image src="https://picsum.photos/400?2" alt="" fill className="object-cover" />
//                         </div>

//                         {/* RIGHT */}
//                         <div className="absolute w-full h-full rounded-2xl overflow-hidden"
//                             style={{ transform: "rotateY(90deg) translateZ(150px)" }}>
//                             <Image src="https://picsum.photos/400?3" alt="" fill className="object-cover" />
//                         </div>

//                         {/* LEFT */}
//                         <div className="absolute w-full h-full rounded-2xl overflow-hidden"
//                             style={{ transform: "rotateY(-90deg) translateZ(150px)" }}>
//                             <Image src="https://picsum.photos/400?4" alt="" fill className="object-cover" />
//                         </div>

//                         {/* TOP */}
//                         <div className="absolute w-full h-full rounded-2xl overflow-hidden"
//                             style={{ transform: "rotateX(90deg) translateZ(150px)" }}>
//                             <Image src="https://picsum.photos/400?5" alt="" fill className="object-cover" />
//                         </div>

//                         {/* BOTTOM */}
//                         <div className="absolute w-full h-full rounded-2xl overflow-hidden"
//                             style={{ transform: "rotateX(-90deg) translateZ(150px)" }}>
//                             <Image src="https://picsum.photos/400?6" alt="" fill className="object-cover" />
//                         </div>

//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// }
