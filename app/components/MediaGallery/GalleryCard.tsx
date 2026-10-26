import { ArrowUpRight, Maximize2 } from "lucide-react";

interface GalleryCardProps {
  image: string;
  title: string;
  category: string;
  label?: string;
  span: string;
}

export function GalleryCard({ image, title, category, label, span }: GalleryCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-md sm:rounded-lg bg-neutral-200/90 cursor-pointer shadow-[0_2px_10px_-3px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 ring-1 ring-black/[0.04] ${span} h-[165px] sm:h-[240px] md:h-[280px] lg:h-[360px]`}
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Always-visible date/label pill */}
      {label && (
        <div className="hidden sm:block absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10 transition-all duration-300 transform group-hover:translate-y-[-2px]">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 bg-white/95 hover:bg-white text-neutral-900 text-[11px] sm:text-xs font-semibold rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all duration-200 border border-white/40">
            <span className="truncate max-w-[120px] sm:max-w-[180px] tracking-tight">{label}</span>
            <ArrowUpRight className="w-3.5 h-3.5 shrink-0 stroke-[2.5] text-neutral-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      )}

      {/* Expand icon */}
      <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-1 group-hover:translate-y-0">
        <span className="p-1.5 sm:p-2 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-md transition-colors border border-white/20 inline-flex items-center justify-center">
          <Maximize2 className="w-3.5 h-3.5" />
        </span>
      </div>

      {/* Category tag */}
      <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-1 group-hover:translate-y-0">
        <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-black/50 text-white/90 text-[9px] sm:text-[10px] font-medium backdrop-blur-md border border-white/10 uppercase tracking-wider">
          {category}
        </span>
      </div>

      {/* Caption (sits above the pill when one exists) */}
      <div
        className={`absolute inset-x-0 bottom-0 p-2.5 sm:p-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 ${label ? "sm:bottom-14" : ""}`}
      >
        <h4 className="text-white text-[11px] sm:text-sm font-medium line-clamp-2 leading-tight drop-shadow-sm">
          {title}
        </h4>
        <div className="flex items-center gap-1 mt-1 text-primary text-[9.5px] sm:text-[11px] font-semibold">
          <span>View photo</span>
          <ArrowUpRight className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
}
