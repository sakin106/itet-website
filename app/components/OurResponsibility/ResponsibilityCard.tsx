import React from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

interface ResponsibilityCardProps {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

export function ResponsibilityCard({
  number,
  icon: Icon,
  title,
  description,
  href,
}: ResponsibilityCardProps) {
  const content = (
    <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group h-full">
      <div>
        {/* Top Header Row: Icon + Number */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-700 group-hover:bg-orange-50 group-hover:text-primary group-hover:border-orange-200 transition-colors shadow-2xs">
            <Icon className="w-5 h-5 stroke-[1.75]" />
          </div>
          <span className="text-4xl sm:text-5xl font-black text-gray-200 group-hover:text-orange-200/80 transition-colors select-none font-sans tracking-tight">
            {number}
          </span>
        </div>

        {/* Card Title */}
        <h3 className="font-bold text-base sm:text-[17px] text-gray-900 mb-3 group-hover:text-primary transition-colors leading-snug">
          {title}
        </h3>

        {/* Card Description */}
        <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed font-normal mb-4">
          {description}
        </p>
      </div>

      {href && (
        <div className="flex items-center gap-1.5 text-xs font-semibold text-primary pt-2 group-hover:translate-x-1 transition-transform">
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
}

