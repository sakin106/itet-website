import React from "react";
import Link from "next/link";
import { Image as ImageIcon } from "lucide-react";

export function AdSpacePortrait() {
  return (
    <div className="relative w-full aspect-[3/4] lg:aspect-auto lg:h-full lg:min-h-[220px] overflow-hidden rounded-2xl shadow-lg border border-[#1d355c]/60 bg-gradient-to-b from-[#0a1c3b] via-[#081734] to-[#051126] flex flex-col items-center justify-center p-4 text-center select-none">
      {/* Background vector curves */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 450"
        preserveAspectRatio="none"
      >
        <path
          d="M -10,220 C 50,300 100,280 150,190 C 200,100 240,60 270,80 C 290,100 300,280 320,460"
          fill="none"
          stroke="rgba(148, 185, 235, 0.28)"
          strokeWidth="1.6"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M -15,160 C 40,260 90,320 160,220 C 220,120 260,250 290,400"
          fill="none"
          stroke="rgba(148, 185, 235, 0.2)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M -10,360 C 50,210 100,180 160,260 C 210,330 250,450 300,420"
          fill="none"
          stroke="rgba(148, 185, 235, 0.15)"
          strokeWidth="1.4"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="relative z-10 flex flex-col items-center justify-center max-w-[260px]">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/20 shadow-inner flex items-center justify-center text-white mb-3 sm:mb-3.5">
          <ImageIcon className="w-7 h-7 stroke-[1.75] text-white" />
        </div>
        <span className="text-[11px] sm:text-[11.5px] font-bold tracking-[0.22em] text-[#9db3d4] uppercase leading-none">
          AD SPACE
        </span>
        <span className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none mt-2">
          3:4
        </span>
        <span className="text-xs sm:text-[13px] text-[#8fa7c7] font-medium mt-1.5">
          (Portrait)
        </span>
        <Link
          href="/contact"
          className="mt-4 sm:mt-5 inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] backdrop-blur-md border border-white/20 text-white text-xs sm:text-[13px] font-medium shadow-md transition-all hover:border-white/35"
        >
          <span>Book this space</span>
        </Link>
      </div>
    </div>
  );
}
