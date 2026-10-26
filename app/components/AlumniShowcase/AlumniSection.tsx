import React from "react";
import Link from "next/link";
import { AlumniCard } from "./AlumniCard";

export function AlumniSection() {
  const alumni = [
    {
      name: "Engr. Sanjida Islam",
      designation: "Honorable Member of ITET",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80",
      socials: {
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
    {
      name: "Engr. Mahbuba Hakim",
      designation: "Honorable Member of ITET",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80",
      socials: {
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
    {
      name: "Engr. Md. Shafiqur Rahman",
      designation: "Executive Member & Technologist",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80",
      socials: {
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
    {
      name: "Engr. Tanvir Ahmed",
      designation: "Life Member & RMG Consultant",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80",
      socials: {
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
  ];

  return (
    <section className="w-full bg-[#fbfaf6] py-16 sm:py-20 border-b border-gray-200/60">
      <div className="mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-manuale text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-900 tracking-tight leading-tight mb-3">
            Meet Our Proud Alumni
          </h2>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-normal">
            Connecting you with the remarkable leaders, innovators, and textile experts shaping our global industry.
          </p>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {alumni.map((member) => (
            <AlumniCard
              key={member.name}
              name={member.name}
              designation={member.designation}
              image={member.image}
              socials={member.socials}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/committee"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white hover:bg-primary hover:text-white text-gray-800 text-xs sm:text-sm font-semibold border border-gray-200/90 shadow-2xs transition-all duration-200"
          >
            <span>View All Committee Leaders &amp; Alumni</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
