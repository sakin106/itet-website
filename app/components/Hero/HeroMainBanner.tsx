import React from "react";

export function HeroMainBanner() {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-gray-200/80 bg-white shadow-xs p-6 sm:p-7 flex flex-col justify-between min-h-[200px]">
      {/* Background building texture overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-15 pointer-events-none overflow-hidden">
        <img
          src="/assets/hero-building-bg.jpg"
          alt="Building Architecture Background"
          className="w-full h-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      </div>

      <div className="relative z-10">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/70 text-[11px] font-bold text-primary mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span>Welcome to ITET</span>
        </div>

        {/* Big Heading */}
        <h2 className="font-manuale text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-gray-900 tracking-tight leading-tight mb-2">
          Uniting Textile Professionals. <br />
          <span className="text-primary font-bold">Advancing Industry.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-lg">
          ITET is the trusted platform for textile engineers to connect, share knowledge, and contribute to sustainable industry success.
        </p>
      </div>
    </div>
  );
}
