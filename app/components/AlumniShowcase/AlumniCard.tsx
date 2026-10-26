import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface AlumniCardProps {
  name: string;
  designation: string;
  image: string;
  socials?: {
    facebook?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export function AlumniCard({
  name,
  designation,
  image,
  socials = {},
}: AlumniCardProps) {
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Name & Title */}
        <div className="mb-3.5">
          <h3 className="font-bold text-base sm:text-[17px] text-gray-900 group-hover:text-primary transition-colors truncate leading-tight">
            {name}
          </h3>
          <p className="text-xs text-gray-500 truncate mt-0.5 font-medium">
            {designation}
          </p>
        </div>

        {/* Profile Photo */}
        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-orange-50/40 mb-4 border border-gray-100">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>
      </div>

      {/* Card Footer: Social badges & View Details */}
      <div className="flex items-center justify-between pt-2 border-t border-gray-100/60">
        {/* Social Icons */}
        <div className="flex items-center gap-1.5">
          {/* Facebook */}
          <a
            href={socials.facebook || "https://facebook.com"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Profile"
            className="w-7 h-7 rounded-full bg-gray-50 border border-gray-200/70 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
          >
            <span className="text-[10px] font-black">f</span>
          </a>

          {/* LinkedIn */}
          <a
            href={socials.linkedin || "https://linkedin.com"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-7 h-7 rounded-full bg-gray-50 border border-gray-200/70 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
          >
            <span className="text-[10px] font-bold">in</span>
          </a>

          {/* Instagram */}
          <a
            href={socials.instagram || "https://instagram.com"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="w-7 h-7 rounded-full bg-gray-50 border border-gray-200/70 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
          >
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>

        {/* View Details Link */}
        <Link
          href="/membership-overview"
          className="text-xs font-semibold text-gray-800 hover:text-primary transition-colors flex items-center gap-1 group/btn"
        >
          <span>View Details</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover/btn:text-primary transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
