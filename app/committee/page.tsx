"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { CtaBanner } from "@/app/components/CTA";
import { PageHeader } from "@/app/components/Common/PageHeader";
import { Mail, Phone, Building, Award } from "lucide-react";

export default function CommitteePage() {
  const [filter, setFilter] = useState<"All" | "Executive" | "Advisory">("All");

  const leaders = [
    {
      name: "Engr. Md. Enayet Hossain",
      role: "President",
      category: "Executive",
      organization: "15th Central Executive Council, ITET",
      image: "/assets/president.jpg",
      email: "president@itetbd.net",
    },
    {
      name: "Engr. Md. Shakawat Hossain",
      role: "Secretary General",
      category: "Executive",
      organization: "15th Central Executive Council, ITET",
      image: "/assets/secretary.jpg",
      email: "secretarygeneral@itetbd.net",
    },
    {
      name: "Engr. Abdus Sobhan, CIP",
      role: "Senior Vice President",
      category: "Executive",
      organization: "Managing Director, Auko-Tex Group",
      image: "/assets/alumni1.jpg",
      email: "vicepresident1@itetbd.net",
    },
    {
      name: "Engr. Salim Reza",
      role: "Vice President",
      category: "Executive",
      organization: "Director, Square Textiles Ltd.",
      image: "/assets/alumni2.jpg",
      email: "vicepresident2@itetbd.net",
    },
    {
      name: "Engr. Towhidur Rahman",
      role: "Joint Secretary General",
      category: "Executive",
      organization: "Executive Director, DBL Group",
      image: "/assets/alumni1.jpg",
      email: "jointsec@itetbd.net",
    },
    {
      name: "Engr. Mohammad Riazul Islam",
      role: "Chief Advisor",
      category: "Advisory",
      organization: "Chairman, RAJUK & IEB Central Leader",
      image: "/assets/alumni2.jpg",
      email: "advisor@itetbd.net",
    },
    {
      name: "Engr. Shafiqur Rahman",
      role: "Advisor",
      category: "Advisory",
      organization: "Former President, ITET",
      image: "/assets/alumni1.jpg",
      email: "advisory@itetbd.net",
    },
    {
      name: "Engr. Ashfaqur Rahman",
      role: "Treasurer",
      category: "Executive",
      organization: "General Manager, Beximco Textiles Ltd.",
      image: "/assets/alumni2.jpg",
      email: "treasurer@itetbd.net",
    },
  ];

  const filteredLeaders =
    filter === "All" ? leaders : leaders.filter((l) => l.category === filter);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-primary selection:text-white flex flex-col">
      <Header />
      <PageHeader
        badge="Executive Governance"
        title="15th Central"
        highlightTitle="Executive Council"
        description="Meet the esteemed leaders, innovators, and office-bearers elected to steer ITET Bangladesh."
        breadcrumbs={[{ label: "About ITET" }, { label: "Committee Members" }]}
      />

      <main className="flex-1 py-12 lg:py-16 bg-[#fbfaf6]">
        <div className="mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          {/* Filter Pills */}
          <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2">
            {(["All", "Executive", "Advisory"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  filter === tab
                    ? "bg-primary text-white shadow-xs"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {tab === "All" ? "All Committee Members" : `${tab} Committee`}
              </button>
            ))}
          </div>

          {/* Grid of Leaders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredLeaders.map((leader, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200/80 p-5 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden mb-4 border-2 border-gray-100 group-hover:border-primary/50 transition-colors bg-gray-50">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 bg-secondary/80 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {leader.role}
                  </div>
                </div>

                <h3 className="font-manuale text-base sm:text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                  {leader.name}
                </h3>
                <p className="text-xs font-semibold text-primary mt-0.5 mb-2">{leader.role}</p>
                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-4 flex-1">
                  {leader.organization}
                </p>

                <div className="w-full pt-3 border-t border-gray-100 flex items-center justify-center gap-3 text-gray-400">
                  <a
                    href={`mailto:${leader.email}`}
                    className="p-1.5 rounded-full hover:bg-orange-50 hover:text-primary transition-colors"
                    title={`Email ${leader.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    <span className="text-[10px] font-bold">in</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <CtaBanner />
      <Footer />
    </div>
  );
}
