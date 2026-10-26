"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { CtaBanner } from "@/app/components/CTA";
import {
  BookOpen,
  Search,
  ChevronDown,
  MapPin,
  Share2,
  FileText,
  ExternalLink,
  ArrowRight,
  RotateCw,
  Download,
} from "lucide-react";

interface PublicationItem {
  id: string;
  type: string;
  year: string;
  discipline: string;
  title: string;
  authors: string;
  institution: string;
  publisher: string;
  abstract: string;
  keywords: string[];
  pdfUrl?: string;
  sourceUrl?: string;
}

export default function PublicationPage() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("All Types");
  const [discipline, setDiscipline] = useState("All Disciplines");
  const [year, setYear] = useState("All Years");

  const publications: PublicationItem[] = [
    {
      id: "1",
      type: "RESEARCH ARTICLE",
      year: "2023",
      discipline: "Technical Textiles",
      title: "Ecofriendly functionalization of jute-cotton blended yarn using Azadirachta Indica leaves",
      authors: "MD.Muhibul Hasan, Engr. Fahim Ahmed",
      institution: "Bangladesh University of Textiles (BUTEX)",
      publisher: "Elsevier",
      abstract:
        "Antibacterial materials have received a lot of attention and acceptance in the market and in everyday life over the last couple of decades. Many antibacterial finishes have been developed for textiles using both natural and synthetic agents to prevent microbial colonization.",
      keywords: [
        "jutton yarn",
        "Pad-dry-cure method",
        "Antibacterial yarn",
        "Neem extraction",
        "Ecofriendly",
      ],
      pdfUrl: "/assets/logo.jpg",
      sourceUrl: "https://elsevier.com",
    },
    {
      id: "2",
      type: "RESEARCH ARTICLE",
      year: "2024",
      discipline: "Sustainability & Wet Processing",
      title: "Bio-Preparation and Salt-Free Reactive Dyeing of Cellulosic Fabrics",
      authors: "Engr. Shamim Al Mamun, Dr. Md. Abdullah",
      institution: "Dhaka University of Engineering & Technology (DUET)",
      publisher: "Springer Nature",
      abstract:
        "Investigating cationic modification of cotton fibers to eliminate sodium sulfate salt requirement in reactive dyeing, drastically reducing electrolyte discharge in textile wastewater.",
      keywords: [
        "Salt-free dyeing",
        "Cationization",
        "Reactive dye",
        "Effluent reduction",
        "Textile sustainability",
      ],
      pdfUrl: "/assets/logo.jpg",
      sourceUrl: "https://springer.com",
    },
    {
      id: "3",
      type: "POLICY WHITE PAPER",
      year: "2026",
      discipline: "Industry 4.0 & Sustainability",
      title: "Building a Productive, Innovative & Circular Textile Economy for Bangladesh",
      authors: "ITET Research & Policy Directorate",
      institution: "Institution of Textile Engineers & Technologists (ITET)",
      publisher: "ITET Policy Monograph Series",
      abstract:
        "Strategic policy interventions addressing raw cotton volatility, local man-made fiber (MMF) spinning expansion, recycled yarn tax holidays, and solar rooftop mandates for green certified garment factories.",
      keywords: [
        "MMF Policy",
        "Circular Recycling",
        "Export Competitiveness",
        "Tariff Rationalization",
      ],
      pdfUrl: "/assets/logo.jpg",
      sourceUrl: "https://itetbd.net",
    },
  ];

  const types = [
    "All Types",
    "Journal Articles",
    "Theses & Dissertations",
    "Conference Papers",
    "Book Chapters",
    "Research Articles",
    "Review Papers",
    "Whitepapers",
  ];

  const filteredPubs = publications.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.authors.toLowerCase().includes(search.toLowerCase()) ||
      p.abstract.toLowerCase().includes(search.toLowerCase());
    const matchesType =
      selectedType === "All Types" ||
      (selectedType === "Research Articles" && p.type === "RESEARCH ARTICLE") ||
      (selectedType === "Whitepapers" && p.type === "POLICY WHITE PAPER");
    const matchesDiscipline =
      discipline === "All Disciplines" || p.discipline.includes(discipline);
    const matchesYear = year === "All Years" || p.year === year;
    return matchesSearch && matchesType && matchesDiscipline && matchesYear;
  });

  return (
    <div className="min-h-screen bg-[#fbfaf6] pb-20 font-sans selection:bg-primary selection:text-white flex flex-col">
      <Header />

      {/* 1. Light Theme Hero Banner */}
      <section className="relative py-10 overflow-hidden bg-gradient-to-b from-amber-500/[0.04] via-transparent to-transparent">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 md:px-3.5 md:py-1.5 rounded-full bg-white shadow-xs border border-gray-100">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-700">
                Academic &amp; Research
              </span>
              <span className="text-gray-300">|</span>
              <span className="text-[10px] md:text-xs text-gray-500 font-medium">
                {filteredPubs.length} Published
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold font-manuale tracking-tight text-gray-800 leading-tight">
              Research Publications <br />
              <span className="text-primary font-semibold">&amp; Scholarly Works</span> of ITET
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Main Content & Scholarly Archive Filter Box */}
      <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%] flex-1">
        <div className="mt-8 sm:mt-10 max-w-7xl mx-auto space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 shadow-xs p-3.5 sm:p-5 space-y-3.5 sm:space-y-4">
            {/* Top row: Archive title + Search Input */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-orange-50 text-primary flex items-center justify-center shrink-0 border border-orange-200/60 shadow-2xs">
                  <BookOpen className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-primary" />
                </span>
                <div>
                  <h2 className="text-sm sm:text-base font-semibold text-gray-800 leading-tight">
                    Scholarly Archive
                  </h2>
                  <p className="text-[11px] sm:text-xs text-gray-500 line-clamp-1 sm:line-clamp-none">
                    Explore articles, filter by discipline, category, and year
                  </p>
                </div>
              </div>

              <div className="relative w-full lg:w-80">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Search className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search title, author, keyword, institut..."
                  className="w-full pl-9 pr-8 py-2 sm:py-2.5 text-xs sm:text-sm rounded-md border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-hidden transition-all text-gray-800 bg-stone-50/50 sm:bg-slate-50/70 focus:bg-white shadow-2xs"
                />
              </div>
            </div>

            {/* Middle row: Type pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none -mx-1 px-1">
              <span className="text-xs font-semibold text-stone-500 shrink-0 mr-1">Type:</span>
              {types.map((t) => {
                const isActive = selectedType === t;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSelectedType(t)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-all duration-150 cursor-pointer ${
                      isActive
                        ? "bg-primary text-white font-semibold shadow-2xs"
                        : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>

            {/* Bottom row: Dropdowns + Count & Refresh */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="relative w-full sm:w-auto">
                  <select
                    value={discipline}
                    onChange={(e) => setDiscipline(e.target.value)}
                    className="w-full sm:w-auto appearance-none bg-stone-50/50 sm:bg-white border border-gray-200 rounded-md px-3 py-1.5 sm:py-2 pr-7 text-xs font-medium text-gray-700 hover:border-gray-300 focus:outline-hidden focus:border-primary cursor-pointer shadow-2xs"
                  >
                    <option value="All Disciplines">All Disciplines</option>
                    <option value="Technical Textiles">Technical Textiles</option>
                    <option value="Sustainability">Sustainability</option>
                    <option value="Spinning">Spinning</option>
                    <option value="Wet Processing">Wet Processing</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                <div className="relative w-full sm:w-auto">
                  <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full sm:w-auto appearance-none bg-stone-50/50 sm:bg-white border border-gray-200 rounded-md px-3 py-1.5 sm:py-2 pr-7 text-xs font-medium text-gray-700 hover:border-gray-300 focus:outline-hidden focus:border-primary cursor-pointer shadow-2xs"
                  >
                    <option value="All Years">All Years</option>
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2023">2023</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-500 self-end sm:self-auto">
                <span>
                  Showing <strong className="text-gray-900">{filteredPubs.length}</strong> of {publications.length} publications
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setSelectedType("All Types");
                    setDiscipline("All Disciplines");
                    setYear("All Years");
                  }}
                  className="p-1 hover:text-primary transition-colors cursor-pointer"
                  title="Reset filters"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* 3. Publication Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPubs.map((pub) => (
              <div
                key={pub.id}
                className="bg-white rounded-lg border border-gray-200/90 shadow-2xs hover:border-gray-300 hover:shadow-md transition-all p-5 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header: Type • Year • on line 1, Category on line 2 */}
                  <div className="space-y-1 mb-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="flex items-center gap-1.5 text-primary text-[11px] font-bold uppercase tracking-wider">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{pub.type}</span>
                        <span className="text-gray-300">•</span>
                        <span className="text-gray-500 font-medium">{pub.year}</span>
                        <span className="text-gray-300">•</span>
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          if (typeof window !== "undefined" && navigator.clipboard) {
                            navigator.clipboard.writeText(window.location.href);
                          }
                        }}
                        className="text-gray-400 hover:text-gray-600 p-1 rounded transition-colors cursor-pointer"
                        title="Share publication"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 font-medium">{pub.discipline}</p>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-base sm:text-[17px] text-gray-900 leading-snug line-clamp-2 hover:text-primary transition-colors cursor-pointer mb-2.5 font-sans">
                    {pub.title}
                  </h3>

                  {/* Authors & Affiliation */}
                  <div className="space-y-1 mb-3 text-xs text-gray-600">
                    <p>
                      <span className="text-gray-500">By </span>
                      <strong className="font-bold text-gray-900">{pub.authors}</strong>
                    </p>
                    <p className="flex items-center gap-1 text-gray-400 text-[11px]">
                      <MapPin className="w-3 h-3 text-gray-400 shrink-0" />
                      <span>{pub.institution}</span>
                    </p>
                  </div>

                  {/* Published In Box: Solid vertical orange bar on left edge, light gray background */}
                  <div className="bg-[#f8f9fa] border-l-[3px] border-primary px-3 py-2 rounded-r-md text-xs text-gray-600 mb-3.5">
                    <span className="text-gray-500">Published in: </span>
                    <span className="italic font-medium text-gray-800">{pub.publisher}</span>
                  </div>

                  {/* Abstract Text */}
                  <p className="text-xs text-gray-600 leading-relaxed font-normal mb-3.5 line-clamp-4">
                    {pub.abstract}
                  </p>

                  {/* Keywords Pill Box: Soft gray rounded box */}
                  <div className="p-2.5 rounded-lg bg-[#f8f9fa] border border-gray-100 text-[11px] text-gray-600 leading-relaxed font-sans mb-4">
                    <p>{pub.keywords.join("; ")}</p>
                  </div>
                </div>

                {/* Footer Action Row */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2 mt-auto">
                  <div className="flex items-center gap-2">
                    <a
                      href={pub.pdfUrl || "/assets/logo.jpg"}
                      download={`${pub.id}_paper.pdf`}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 rounded-md shadow-2xs transition-colors"
                    >
                      <Download className="w-3 h-3 text-primary" />
                      <span>PDF</span>
                    </a>
                    <a
                      href={pub.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 rounded-md shadow-2xs transition-colors"
                    >
                      <ExternalLink className="w-3 h-3 text-gray-400" />
                      <span>Source</span>
                    </a>
                  </div>

                  <a
                    href="#details"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-dark transition-colors"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CtaBanner />
      <Footer />
    </div>
  );
}
