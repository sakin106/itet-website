"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Quote } from "lucide-react";

export function LeadershipSpotlight() {
  const [activeLeader, setActiveLeader] = useState<"secretary" | "president">("secretary");

  const leaders = {
    secretary: {
      role: "SECRETARY GENERAL, ITET'S MESSAGE",
      quote: "Reform, Modernization & Global Recognition",
      text: "It is both an honor and a profound responsibility to serve as Secretary General of ITET. Since its establishment, ITET has been working relentlessly for the professional growth and dignity of textile engineers...",
      name: "Engr. A.S.M Hafizur Rahman Nixon",
      designation: "Secretary General, ITET",
      image: "/assets/secretary.jpg",
    },
    president: {
      role: "PRESIDENT, ITET'S MESSAGE",
      quote: "Connecting Textile Engineers, Building a Stronger Future",
      text: "Bismillahir Rahmanir Rahim Assalamu Alaikum. It is a proud moment to introduce the official website of the Institution of Textile Engineers & Technologists (ITET)...",
      name: "Engr. Md. Enayet Hossain",
      designation: "President, ITET",
      image: "/assets/president.jpg",
    },
  };

  const current = leaders[activeLeader];

  return (
    <div className="rounded-2xl bg-[#070d1d] text-white p-5 sm:p-6 border border-gray-800/80 shadow-lg relative overflow-hidden flex flex-col justify-between">
      {/* Background subtle watermark icon */}
      <div className="absolute right-4 bottom-2 text-white/5 pointer-events-none select-none">
        <Quote className="w-24 h-24 stroke-1" />
      </div>

      <div>
        {/* Toggle between Secretary & President */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveLeader("secretary")}
              className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full transition-all cursor-pointer ${
                activeLeader === "secretary"
                  ? "bg-primary text-white shadow-xs"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Secretary General
            </button>
            <button
              type="button"
              onClick={() => setActiveLeader("president")}
              className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full transition-all cursor-pointer ${
                activeLeader === "president"
                  ? "bg-primary text-white shadow-xs"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              President
            </button>
          </div>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 border-2 border-white/15 bg-gray-800 shadow-md">
            <img
              src={current.image}
              alt={current.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 text-primary text-[10px] font-bold tracking-widest uppercase mb-1">
              <Quote className="w-3 h-3 fill-current" />
              <span>{current.role}</span>
            </div>

            <h4 className="text-sm sm:text-base font-semibold text-orange-400 italic mb-1.5 font-manuale leading-snug">
              "{current.quote}"
            </h4>

            <p className="text-xs text-gray-300/85 leading-relaxed line-clamp-3 mb-3">
              {current.text}
            </p>

            <div className="flex items-center justify-between pt-1">
              <div>
                <h5 className="text-sm font-bold text-white leading-tight">
                  {current.name}
                </h5>
                <p className="text-xs text-gray-400 font-medium">
                  {current.designation}
                </p>
              </div>
              <Link
                href="/committee"
                className="text-xs font-semibold text-primary hover:text-orange-300 flex items-center gap-1 transition-colors"
              >
                <span>View Council</span>
                <span className="text-sm">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
