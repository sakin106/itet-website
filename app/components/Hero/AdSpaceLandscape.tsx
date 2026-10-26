import React from "react";
import Link from "next/link";
import { Image as ImageIcon } from "lucide-react";

export function AdSpaceLandscape() {
  return (
    <div className="relative w-full aspect-[21/9] overflow-hidden rounded-2xl shadow-lg border border-[#1d355c]/60 bg-gradient-to-b from-[#0a1c3b] via-[#081734] to-[#051126] shrink-0 flex items-center justify-center p-3 sm:p-4 select-none">
      {/* Background vector curves */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 120"
        preserveAspectRatio="none"
      >
        <path
          d="M -20,60 C 120,110 240,20 380,80 C 480,120 540,40 620,70"
          fill="none"
          stroke="rgba(148, 185, 235, 0.25)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M -10,90 C 150,30 280,110 420,50 C 500,20 560,90 620,40"
          fill="none"
          stroke="rgba(148, 185, 235, 0.18)"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="relative z-10 flex items-center justify-between w-full max-w-xl px-2 sm:px-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/20 shadow-inner flex items-center justify-center text-white shrink-0">
            <ImageIcon className="w-[22px] h-[22px] stroke-[1.75] text-white" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.22em] text-[#9db3d4] uppercase leading-tight">
              AD SPACE
            </span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">
                21:9
              </span>
              <span className="text-[11px] sm:text-xs text-[#8fa7c7] font-medium">
                (Landscape)
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] backdrop-blur-md border border-white/20 text-white text-xs font-medium shadow-md transition-all hover:border-white/35"
          >
            <span>Book this space</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
