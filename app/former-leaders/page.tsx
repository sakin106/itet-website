"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { CtaBanner } from "@/app/components/CTA";
import { Search } from "lucide-react";

interface Leader {
  id: string;
  name: string;
  role: "President" | "Secretary General";
  council: string;
  tenure: string;
  affiliation: string;
  image: string;
}

export default function FormerLeadersPage() {
  const [filter, setFilter] = useState<"All" | "President" | "Secretary General">("All");
  const [search, setSearch] = useState("");

  const leaders: Leader[] = [
    {
      id: "1",
      name: "Engr. Md. Shafiqur Rahman",
      role: "President",
      council: "14th Central Council",
      tenure: "2021 – 2024",
      affiliation: "Managing Director, Hams Group",
      image: "/assets/alumni1.jpg",
    },
    {
      id: "2",
      name: "Engr. Md. Shakawat Hossain",
      role: "Secretary General",
      council: "14th Central Council",
      tenure: "2021 – 2024",
      affiliation: "Executive Director, Robintex Group",
      image: "/assets/secretary.jpg",
    },
    {
      id: "3",
      name: "Engr. Md. Salim Reza",
      role: "President",
      council: "13th Central Council",
      tenure: "2018 – 2021",
      affiliation: "Director (Technical), Square Textiles Ltd.",
      image: "/assets/alumni2.jpg",
    },
    {
      id: "4",
      name: "Engr. Md. Enayet Hossain",
      role: "Secretary General",
      council: "13th Central Council",
      tenure: "2018 – 2021",
      affiliation: "Managing Director, Textreach International",
      image: "/assets/president.jpg",
    },
    {
      id: "5",
      name: "Engr. Md. Mozaffar Hossain",
      role: "President",
      council: "12th Central Council",
      tenure: "2015 – 2018",
      affiliation: "Former MP & Chairman, SIM Group",
      image: "/assets/alumni1.jpg",
    },
    {
      id: "6",
      name: "Engr. Md. Masudur Rahman",
      role: "Secretary General",
      council: "12th Central Council",
      tenure: "2015 – 2018",
      affiliation: "Chief Operating Officer, DBL Group",
      image: "/assets/alumni2.jpg",
    },
    {
      id: "7",
      name: "Engr. Syed Mohammad Ismail",
      role: "President",
      council: "11th Central Council",
      tenure: "2012 – 2015",
      affiliation: "Director, Apex Spinning & Knitting Mills",
      image: "/assets/alumni1.jpg",
    },
    {
      id: "8",
      name: "Engr. Md. Rafiqul Islam",
      role: "Secretary General",
      council: "11th Central Council",
      tenure: "2012 – 2015",
      affiliation: "General Manager, Beximco Textiles Ltd.",
      image: "/assets/alumni2.jpg",
    },
    {
      id: "9",
      name: "Engr. Abdur Razzak",
      role: "President",
      council: "10th Central Council",
      tenure: "2009 – 2012",
      affiliation: "Managing Director, Pacific Cottons Ltd.",
      image: "/assets/alumni1.jpg",
    },
    {
      id: "10",
      name: "Engr. K. M. Rezaul Hasanat",
      role: "Secretary General",
      council: "10th Central Council",
      tenure: "2009 – 2012",
      affiliation: "Chairman & CEO, Viyellatex Group",
      image: "/assets/alumni2.jpg",
    },
    {
      id: "11",
      name: "Engr. Md. Abul Kashem",
      role: "President",
      council: "9th Central Council",
      tenure: "2006 – 2009",
      affiliation: "Chairman, Kashem Textiles Ltd.",
      image: "/assets/alumni1.jpg",
    },
    {
      id: "12",
      name: "Engr. Md. Nurul Islam",
      role: "Secretary General",
      council: "9th Central Council",
      tenure: "2006 – 2009",
      affiliation: "Executive Director, Ha-Meem Group",
      image: "/assets/alumni2.jpg",
    },
  ];

  const filteredLeaders = leaders.filter((leader) => {
    const matchesRole = filter === "All" || leader.role === filter;
    const matchesSearch =
      leader.name.toLowerCase().includes(search.toLowerCase()) ||
      leader.affiliation.toLowerCase().includes(search.toLowerCase()) ||
      leader.council.toLowerCase().includes(search.toLowerCase()) ||
      leader.tenure.includes(search);
    return matchesRole && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-primary selection:text-white flex flex-col">
      <Header />

      {/* 1. Clean Light Theme Hero Section (matching /committee) */}
      <section className="relative pt-12 pb-10 sm:pt-16 sm:pb-14 overflow-hidden bg-gradient-to-b from-amber-500/[0.04] via-transparent to-transparent">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-xs">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-700">
                About ITET
              </span>
              <span className="text-gray-300">|</span>
              <span className="text-xs text-gray-500 font-medium">Former Leaders</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold font-manuale tracking-tight text-gray-800 leading-tight">
              Former Presidents <br className="hidden sm:inline" />
              <span className="text-primary font-semibold">&amp; Secretary Generals</span> of ITET
            </h1>

            <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
              Honoring the past leaders and pioneering presidents who guided ITET across previous councils.
            </p>

            {/* Simple Centered Search */}
            <div className="pt-2 max-w-md mx-auto relative flex items-center">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by leader name or council..."
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-gray-50/80 hover:bg-gray-50 focus:bg-white border border-gray-200 focus:border-primary rounded-full focus:outline-hidden focus:ring-2 focus:ring-primary/20 transition-all shadow-inner"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex items-center justify-center gap-2 pt-2">
              {(["All", "President", "Secretary General"] as const).map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setFilter(role)}
                  className={`px-3.5 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                    filter === role
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {role === "All" ? "All Leaders" : role === "President" ? "Presidents" : "Secretary Generals"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Clean Grid of Cards (Matching committee layout) */}
      <main className="flex-1 pb-16 pt-6">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredLeaders.map((leader) => (
              <div
                key={leader.id}
                className="bg-white rounded-xl border border-gray-200 shadow-2xs hover:shadow-md hover:border-gray-300 transition-all p-3 flex flex-col justify-between text-center group"
              >
                <div>
                  <div className="relative aspect-[4/4.5] overflow-hidden rounded-lg bg-gray-100 mb-2.5">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <span className="inline-block text-[10px] font-semibold text-primary uppercase tracking-wider mb-1">
                    {leader.role}
                  </span>
                  <h3 className="font-semibold text-xs sm:text-sm text-gray-900 leading-tight line-clamp-2">
                    {leader.name}
                  </h3>
                </div>
                <div className="pt-2 mt-2 border-t border-gray-100 text-[11px] text-gray-500">
                  <p className="font-medium text-gray-700">{leader.council}</p>
                  <p className="text-[10px] text-gray-400">{leader.tenure}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredLeaders.length === 0 && (
            <div className="text-center py-12 text-sm text-gray-500">
              No former leaders match your search query.
            </div>
          )}
        </div>
      </main>

      <CtaBanner />
      <Footer />
    </div>
  );
}
