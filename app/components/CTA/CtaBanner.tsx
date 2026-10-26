import React from "react";
import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="w-full py-10 md:py-16 bg-[#f7f5ef]">
      <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
        <div className="relative overflow-hidden rounded-lg bg-white shadow-[0_20px_50px_rgba(245,74,0,0.06),0_4px_16px_rgba(15,23,43,0.04)] border border-orange-100/50 px-6 py-12 sm:py-16 sm:px-14 text-center">
          {/* Decorative Left Ring Vector */}
          <div
            className="pointer-events-none absolute -left-10 sm:-left-6 md:-left-2 top-[-10px] sm:top-0 md:top-2 w-44 h-44 sm:w-60 sm:h-60 md:w-76 md:h-76 select-none z-0"
            aria-hidden="true"
          >
            <div className="absolute left-6 top-6 w-40 h-40 rounded-full bg-[#f54a00]/15 blur-3xl" />
            <svg
              viewBox="0 0 260 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <defs>
                <linearGradient
                  id="brandLeftRingGrad"
                  x1="0%"
                  y1="70%"
                  x2="90%"
                  y2="10%"
                >
                  <stop offset="0%" stopColor="#c83800" />
                  <stop offset="35%" stopColor="#f54a00" />
                  <stop offset="70%" stopColor="#ff7839" />
                  <stop offset="92%" stopColor="#ffab7a" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ffd8c2" stopOpacity="0" />
                </linearGradient>
                <filter
                  id="brandLeftDropShadow"
                  x="-30%"
                  y="-30%"
                  width="160%"
                  height="160%"
                >
                  <feDropShadow
                    dx="2"
                    dy="12"
                    stdDeviation="10"
                    floodColor="#8c2800"
                    floodOpacity="0.22"
                  />
                </filter>
              </defs>
              <path
                d="M 2 110 C 10 170, 60 200, 110 180 C 160 160, 195 110, 215 65"
                stroke="url(#brandLeftRingGrad)"
                strokeWidth="36"
                strokeLinecap="round"
                filter="url(#brandLeftDropShadow)"
              />
            </svg>
          </div>

          {/* Decorative Right Ring Vector */}
          <div
            className="pointer-events-none absolute -right-10 sm:-right-6 md:-right-2 bottom-[-15px] sm:bottom-0 md:bottom-2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 select-none z-0"
            aria-hidden="true"
          >
            <div className="absolute right-6 bottom-6 w-44 h-44 rounded-full bg-[#ff7839]/15 blur-3xl" />
            <svg
              viewBox="0 0 280 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <defs>
                <linearGradient
                  id="brandRightRingGrad"
                  x1="10%"
                  y1="90%"
                  x2="90%"
                  y2="50%"
                >
                  <stop offset="0%" stopColor="#ffd8c2" stopOpacity="0" />
                  <stop offset="15%" stopColor="#ffab7a" stopOpacity="0.85" />
                  <stop offset="40%" stopColor="#ff7839" />
                  <stop offset="75%" stopColor="#f54a00" />
                  <stop offset="100%" stopColor="#d33c00" />
                </linearGradient>
                <filter
                  id="brandRightDropShadow"
                  x="-30%"
                  y="-30%"
                  width="160%"
                  height="160%"
                >
                  <feDropShadow
                    dx="-2"
                    dy="12"
                    stdDeviation="12"
                    floodColor="#8c2800"
                    floodOpacity="0.2"
                  />
                </filter>
              </defs>
              <path
                d="M 30 220 C 55 125, 135 75, 215 80 C 245 82, 268 95, 280 115"
                stroke="url(#brandRightRingGrad)"
                strokeWidth="38"
                strokeLinecap="round"
                filter="url(#brandRightDropShadow)"
              />
            </svg>
          </div>

          {/* Center Content */}
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 md:px-3.5 md:py-1.5 rounded-full bg-white border border-gray-200/80 shadow-xs mb-4 sm:mb-5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-700">
                ITET Bangladesh • Premier Community
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-gray-800 tracking-tight mb-3 font-manuale leading-tight text-balance">
              Empower Your Textile Career Today
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Join the largest network of textile engineers &amp; technologists in Bangladesh. Access exclusive industry insights, professional development, and career networking.
            </p>

            <div className="mt-7 sm:mt-8">
              <Link
                href="/membership-overview"
                className="group relative inline-flex items-center justify-center px-7 py-3 text-xs sm:text-sm font-semibold text-white rounded-md bg-secondary hover:bg-primary hover:brightness-105 active:scale-[0.98] transition-all duration-200 cursor-pointer overflow-hidden shadow-sm"
              >
                <span className="relative z-10">Become a Member</span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
