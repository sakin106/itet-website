import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  badge?: string;
  title: string;
  highlightTitle?: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
}

export function PageHeader({
  badge,
  title,
  highlightTitle,
  description,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <div className="relative bg-[#070b18] text-white pt-10 pb-12 sm:pt-14 sm:pb-16 border-b border-white/10 overflow-hidden">
      {/* Background textile texture + gradient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/assets/footer-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-15 mix-blend-screen scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050813] via-[#070b18]/90 to-[#050813]" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-20 left-10 w-72 h-72 bg-sky-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
        {/* Breadcrumb nav */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-1.5 text-xs text-gray-400 flex-wrap">
            <li className="flex items-center gap-1.5">
              <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
            </li>
            {breadcrumbs.map((crumb, idx) => (
              <li key={idx} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-gray-600" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-primary transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gray-200 font-medium">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold text-primary uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span>{badge}</span>
          </div>
        )}

        {/* Title */}
        <h1 className="font-manuale text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
          {title} {highlightTitle && <span className="text-primary font-normal">{highlightTitle}</span>}
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-gray-300/85 max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
