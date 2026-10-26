import React from "react";
import Link from "next/link";
import { Image as ImageIcon } from "lucide-react";

export function AdSpaceSquare() {
  return (
    <div className="relative w-full max-w-[400px] aspect-square rounded-2xl overflow-hidden shadow-lg border border-[#1d355c]/60 bg-gradient-to-b from-[#0a1c3b] via-[#081734] to-[#051126] flex flex-col items-center justify-center p-4 text-center select-none">
      {/* Background abstract curves */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
        preserveAspectRatio="none"
      >
        <path
          d="M -10,180 C 60,250 120,240 180,165 C 240,90 280,50 310,65 C 340,80 355,230 380,410"
          fill="none"
          stroke="rgba(148, 185, 235, 0.28)"
          strokeWidth="1.6"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M -15,130 C 50,220 120,270 190,190 C 260,110 310,210 350,360 C 370,430 390,320 420,130"
          fill="none"
          stroke="rgba(148, 185, 235, 0.2)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M -10,310 C 60,180 120,150 190,220 C 250,280 300,410 360,380 C 390,360 410,240 420,100"
          fill="none"
          stroke="rgba(148, 185, 235, 0.15)"
          strokeWidth="1.4"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="relative z-10 flex flex-col items-center justify-center max-w-[260px]">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/20 shadow-inner flex items-center justify-center text-white mb-2.5">
          <ImageIcon className="w-6 h-6 stroke-[1.75] text-white" />
        </div>
        <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-[#9db3d4] uppercase leading-none">
          AD SPACE
        </span>
        <span className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-none mt-1.5">
          1:1
        </span>
        <span className="text-[11px] sm:text-xs text-[#8fa7c7] font-medium mt-1">
          (Square)
        </span>
        <Link
          href="/contact"
          className="mt-3.5 inline-flex items-center justify-center px-4 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] backdrop-blur-md border border-white/20 text-white text-xs font-medium shadow-md transition-all hover:border-white/35"
        >
          <span>Book this space</span>
        </Link>
      </div>
    </div>
  );
}
