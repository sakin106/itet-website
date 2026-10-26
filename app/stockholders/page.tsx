"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { CtaBanner } from "@/app/components/CTA";
import { Search, CheckCircle2 } from "lucide-react";

interface Stockholder {
  id: string;
  folioNo: string;
  name: string;
  designation: string;
  organization: string;
  category: "Founding Director" | "Institutional" | "Life Member" | "Trustee";
  sharesHeld: number;
  sharePercentage: string;
}

export default function StockholdersPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string>("All");

  const stockholders: Stockholder[] = [
    {
      id: "1",
      folioNo: "ITET-SH-001",
      name: "Engr. Md. Enayet Hossain",
      designation: "Managing Director",
      organization: "Textreach International",
      category: "Founding Director",
      sharesHeld: 25000,
      sharePercentage: "5.00%",
    },
    {
      id: "2",
      folioNo: "ITET-SH-002",
      name: "Engr. Abdus Sobhan, CIP",
      designation: "Managing Director",
      organization: "Auko-Tex Group",
      category: "Institutional",
      sharesHeld: 40000,
      sharePercentage: "8.00%",
    },
    {
      id: "3",
      folioNo: "ITET-SH-003",
      name: "Engr. Md. Shakawat Hossain",
      designation: "Executive Director",
      organization: "Robintex Group",
      category: "Founding Director",
      sharesHeld: 20000,
      sharePercentage: "4.00%",
    },
    {
      id: "4",
      folioNo: "ITET-SH-004",
      name: "Square Textiles Ltd.",
      designation: "Corporate Enterprise",
      organization: "Square Group",
      category: "Institutional",
      sharesHeld: 50000,
      sharePercentage: "10.00%",
    },
    {
      id: "5",
      folioNo: "ITET-SH-005",
      name: "Engr. Md. Salim Reza",
      designation: "Director (Technical)",
      organization: "Square Textiles Ltd.",
      category: "Life Member",
      sharesHeld: 15000,
      sharePercentage: "3.00%",
    },
    {
      id: "6",
      folioNo: "ITET-SH-006",
      name: "Hams Garments Ltd.",
      designation: "Corporate Enterprise",
      organization: "Hams Group",
      category: "Institutional",
      sharesHeld: 35000,
      sharePercentage: "7.00%",
    },
    {
      id: "7",
      folioNo: "ITET-SH-007",
      name: "Engr. Towhidur Rahman",
      designation: "Executive Director",
      organization: "DBL Group",
      category: "Trustee",
      sharesHeld: 15000,
      sharePercentage: "3.00%",
    },
    {
      id: "8",
      folioNo: "ITET-SH-008",
      name: "Engr. Mohammad Riazul Islam",
      designation: "Chairman",
      organization: "RAJUK",
      category: "Life Member",
      sharesHeld: 12500,
      sharePercentage: "2.50%",
    },
    {
      id: "9",
      folioNo: "ITET-SH-009",
      name: "Engr. Md. Shamim Al Mamun",
      designation: "Managing Director",
      organization: "Apex Spinning & Knitting",
      category: "Life Member",
      sharesHeld: 10000,
      sharePercentage: "2.00%",
    },
    {
      id: "10",
      folioNo: "ITET-SH-010",
      name: "ITET Central Welfare Trust",
      designation: "Statutory Trust Body",
      organization: "ITET Bangladesh",
      category: "Trustee",
      sharesHeld: 75000,
      sharePercentage: "15.00%",
    },
  ];

  const categories = ["All", "Founding Director", "Institutional", "Life Member", "Trustee"];

  const filteredStockholders = stockholders.filter((sh) => {
    const matchesCat = filter === "All" || sh.category === filter;
    const matchesSearch =
      sh.name.toLowerCase().includes(search.toLowerCase()) ||
      sh.organization.toLowerCase().includes(search.toLowerCase()) ||
      sh.folioNo.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-primary selection:text-white flex flex-col">
      <Header />

      {/* 1. Clean Light Theme Hero Section */}
      <section className="relative pt-12 pb-10 sm:pt-16 sm:pb-14 overflow-hidden bg-gradient-to-b from-amber-500/[0.04] via-transparent to-transparent">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-xs">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-700">
                Governance
              </span>
              <span className="text-gray-300">|</span>
              <span className="text-xs text-gray-500 font-medium">Share Registry</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold font-manuale tracking-tight text-gray-800 leading-tight">
              Official Stockholder <br className="hidden sm:inline" />
              <span className="text-primary font-semibold">&amp; Share Registry</span> of ITET
            </h1>

            <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
              Verified record of institutional shareholders, patrons, and founding investors of ITET commercial enterprises.
            </p>

            {/* Centered Search */}
            <div className="pt-2 max-w-md mx-auto relative flex items-center">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search shareholder by name or folio no..."
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-gray-50/80 hover:bg-gray-50 focus:bg-white border border-gray-200 focus:border-primary rounded-full focus:outline-hidden focus:ring-2 focus:ring-primary/20 transition-all shadow-inner"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex items-center justify-center gap-2 pt-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  className={`px-3.5 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                    filter === cat
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat === "All" ? "All Categories" : cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Clean, Minimal Responsive Data Table */}
      <main className="flex-1 pb-16 pt-6">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%] max-w-6xl mx-auto">
          <div className="bg-white rounded-xl border border-gray-200 shadow-2xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#f8f9fa] border-b border-gray-200 text-gray-600 font-semibold text-xs">
                  <tr>
                    <th className="py-3 px-4 sm:px-6">Folio No.</th>
                    <th className="py-3 px-4">Shareholder Entity</th>
                    <th className="py-3 px-4">Designation / Company</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4 text-right">Shares Held</th>
                    <th className="py-3 px-4 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 font-sans">
                  {filteredStockholders.map((sh) => (
                    <tr key={sh.id} className="hover:bg-amber-500/[0.02] transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-mono text-xs font-semibold text-gray-800">
                        {sh.folioNo}
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-gray-900">
                        {sh.name}
                      </td>
                      <td className="py-3.5 px-4 text-gray-600 text-xs">
                        <span className="font-medium text-gray-800">{sh.designation}</span>, {sh.organization}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-block text-[11px] font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">
                          {sh.category}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <span className="font-bold text-gray-900">{sh.sharesHeld.toLocaleString()}</span>
                        <span className="text-xs text-primary font-semibold ml-1.5">({sh.sharePercentage})</span>
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Verified</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="py-3 px-4 sm:px-6 bg-[#f8f9fa] border-t border-gray-200 text-xs text-gray-500 flex items-center justify-between">
              <span>Showing {filteredStockholders.length} of {stockholders.length} stockholders</span>
              <span>Audited by ITET Commercial Secretariat</span>
            </div>
          </div>
        </div>
      </main>

      <CtaBanner />
      <Footer />
    </div>
  );
}
