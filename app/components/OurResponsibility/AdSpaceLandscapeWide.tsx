import React from "react";
import Link from "next/link";
import { Image as ImageIcon } from "lucide-react";

export function AdSpaceLandscapeWide() {
  return (
    <section className="py-10 lg:py-16">
      <div className="mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
        <div className="mt-8 sm:mt-12 flex justify-center">
    <div className="relative w-full aspect-[2.35/1] min-h-[140px] max-h-[360px] overflow-hidden rounded-2xl shadow-lg border border-[#1d355c]/60 bg-gradient-to-b from-[#0a1c3b] via-[#081734] to-[#051126] flex items-center justify-center p-4 sm:p-6 select-none">
      {/* Background vector wave paths */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 200"
        preserveAspectRatio="none"
      >
        <path
          d="M -50,110 C 180,180 380,40 580,130 C 780,210 880,70 1050,120"
          fill="none"
          stroke="rgba(148, 185, 235, 0.28)"
          strokeWidth="1.8"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M -30,160 C 220,50 420,170 650,80 C 850,20 940,150 1050,90"
          fill="none"
          stroke="rgba(148, 185, 235, 0.2)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M -20,70 C 250,140 480,20 720,160 C 880,230 960,60 1050,140"
          fill="none"
          stroke="rgba(148, 185, 235, 0.12)"
          strokeWidth="1.3"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="relative z-10 flex items-center justify-between w-full max-w-4xl px-2 sm:px-6 gap-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/20 shadow-inner flex items-center justify-center text-white shrink-0">
            <ImageIcon className="w-6 h-6 stroke-[1.75]" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-[#9db3d4] uppercase leading-tight">
              AD SPACE
            </span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-none">
                2.35:1
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
            className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium shadow-md transition-all hover:border-white/35"
          >
            <span>Book this space</span>
          </Link>
        </div>
      </div>
    </div>
        </div>
      </div>
    </section>
  );
}
