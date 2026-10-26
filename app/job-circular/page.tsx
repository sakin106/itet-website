"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { CtaBanner } from "@/app/components/CTA";
import {
  Briefcase,
  Search,
  ChevronDown,
  LayoutGrid,
  List,
  RotateCw,
  Building,
  MapPin,
  Clock,
  Calendar,
  ExternalLink,
  DollarSign,
  ArrowRight,
} from "lucide-react";

interface JobItem {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  level: string;
  discipline: string;
  salary: string;
  deadline: string;
  skills: string[];
}

export default function JobCircularPage() {
  const [search, setSearch] = useState("");
  const [discipline, setDiscipline] = useState("All Categories & Disciplines");
  const [level, setLevel] = useState("All Levels");
  const [selectedType, setSelectedType] = useState("All Types");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const jobs: JobItem[] = [
    {
      id: "1",
      title: "General Manager (Spinning Operations)",
      company: "Square Textiles Ltd.",
      location: "Bhaluka, Mymensingh",
      type: "Full-time",
      level: "Executive / Management",
      discipline: "Spinning",
      salary: "৳ 2,50,000 - ৳ 3,20,000 / month",
      deadline: "November 15, 2026",
      skills: ["Ring Spinning", "Rotor", "Cost Optimization"],
    },
    {
      id: "2",
      title: "Assistant General Manager (Dyeing & Finishing)",
      company: "Auko-Tex Group",
      location: "Tongi, Gazipur",
      type: "Full-time",
      level: "Mid-Senior Level",
      discipline: "Dyeing & Finishing",
      salary: "৳ 1,80,000 - ৳ 2,20,000 / month",
      deadline: "November 10, 2026",
      skills: ["Exhaust Dyeing", "Continuous Washing", "Color Matching"],
    },
    {
      id: "3",
      title: "Senior Fabric Technologist",
      company: "Epic Group Sourcing Hub",
      location: "Gulshan-2, Dhaka",
      type: "Full-time",
      level: "Mid-Senior Level",
      discipline: "Garments & Merchandising",
      salary: "৳ 1,50,000 - ৳ 1,90,000 / month",
      deadline: "November 30, 2026",
      skills: ["Fabric Sourcing", "R&D", "Audit Compliance"],
    },
  ];

  const types = [
    "All Types",
    "Full-time",
    "Part-time",
    "Contractual",
    "Internship",
    "Remote",
    "Hybrid",
  ];

  const filteredJobs = jobs.filter((j) => {
    const matchesSearch =
      j.title.toLowerCase().includes(search.toLowerCase()) ||
      j.company.toLowerCase().includes(search.toLowerCase()) ||
      j.location.toLowerCase().includes(search.toLowerCase());
    const matchesDiscipline =
      discipline === "All Categories & Disciplines" || j.discipline === discipline;
    const matchesLevel = level === "All Levels" || j.level === level;
    const matchesType = selectedType === "All Types" || j.type === selectedType;
    return matchesSearch && matchesDiscipline && matchesLevel && matchesType;
  });

  return (
    <div className="min-h-screen bg-[#fbfaf6] pb-20 font-sans selection:bg-primary selection:text-white flex flex-col">
      <Header />

      {/* 1. Light Theme Hero Section */}
      <section className="relative py-10 overflow-hidden bg-gradient-to-b from-amber-500/[0.04] via-transparent to-transparent">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 md:px-3.5 md:py-1.5 rounded-full bg-white shadow-xs border border-gray-100">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-700">
                Career &amp; Recruitment
              </span>
              <span className="text-gray-300">|</span>
              <span className="text-[10px] md:text-xs text-gray-500 font-medium">
                {filteredJobs.length} Active
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold font-manuale tracking-tight text-gray-800 leading-tight">
              Textile &amp; Engineering Careers <br />
              <span className="text-primary font-semibold">&amp; Employment Opportunities</span>
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Main Filter Card */}
      <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%] flex-1">
        <div className="mt-8 sm:mt-10 max-w-7xl mx-auto space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 shadow-xs p-3.5 sm:p-5 space-y-3.5 sm:space-y-4">
            {/* Top row: search + 2 dropdowns + layout toggles */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-3">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by job title, company name, skill, or location..."
                  className="w-full pl-9 pr-4 py-2 sm:py-2.5 text-xs sm:text-sm rounded-md border border-gray-200 focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary shadow-2xs"
                />
              </div>

              {/* Category / Discipline */}
              <div className="relative w-full lg:w-60">
                <select
                  value={discipline}
                  onChange={(e) => setDiscipline(e.target.value)}
                  className="w-full appearance-none bg-stone-50/50 sm:bg-white border border-gray-200 rounded-md px-3 py-2 sm:py-2.5 pr-8 text-xs sm:text-sm font-medium text-gray-700 hover:border-gray-300 focus:outline-hidden focus:border-primary cursor-pointer shadow-2xs"
                >
                  <option value="All Categories & Disciplines">All Categories &amp; Disciplines</option>
                  <option value="Spinning">Spinning</option>
                  <option value="Dyeing & Finishing">Dyeing &amp; Finishing</option>
                  <option value="Garments & Merchandising">Garments &amp; Merchandising</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Levels */}
              <div className="relative w-full lg:w-48">
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="w-full appearance-none bg-stone-50/50 sm:bg-white border border-gray-200 rounded-md px-3 py-2 sm:py-2.5 pr-8 text-xs sm:text-sm font-medium text-gray-700 hover:border-gray-300 focus:outline-hidden focus:border-primary cursor-pointer shadow-2xs"
                >
                  <option value="All Levels">All Levels</option>
                  <option value="Executive / Management">Executive / Management</option>
                  <option value="Mid-Senior Level">Mid-Senior Level</option>
                  <option value="Entry Level">Entry Level</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* View toggles */}
              <div className="flex items-center gap-1 border border-gray-200 rounded-md p-1 self-start lg:self-auto bg-stone-50">
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded cursor-pointer transition-colors ${
                    viewMode === "grid"
                      ? "bg-white text-primary shadow-2xs"
                      : "text-gray-400 hover:text-gray-700"
                  }`}
                  title="Grid view"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 rounded cursor-pointer transition-colors ${
                    viewMode === "list"
                      ? "bg-white text-primary shadow-2xs"
                      : "text-gray-400 hover:text-gray-700"
                  }`}
                  title="List view"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Bottom row: Type pills + stats & refresh */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-gray-100">
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

              <div className="flex items-center gap-3 text-xs text-gray-500 self-end sm:self-auto">
                <span>
                  Showing <strong className="text-gray-900">{filteredJobs.length}</strong> of {jobs.length} circulars
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setDiscipline("All Categories & Disciplines");
                    setLevel("All Levels");
                    setSelectedType("All Types");
                  }}
                  className="flex items-center gap-1 px-2 py-1 rounded bg-stone-100 hover:bg-stone-200 text-gray-700 cursor-pointer transition-colors"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>Refresh</span>
                </button>
              </div>
            </div>
          </div>

          {/* 3. Job Circulars List / Empty State */}
          {filteredJobs.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-lg border border-gray-200/80 shadow-xs max-w-xl mx-auto my-8">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-200/60 text-primary mx-auto flex items-center justify-center mb-4 shadow-2xs">
                <Briefcase className="w-7 h-7" />
              </div>
              <h3 className="font-manuale text-xl font-bold text-gray-900 mb-2">
                No Job Circulars Found
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 max-w-sm mx-auto">
                There are currently no active job circulars published matching these criteria. Please check back soon!
              </p>
            </div>
          ) : (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "space-y-4"
              }
            >
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-lg border border-gray-200/90 shadow-xs hover:border-primary/40 hover:shadow-md transition-all p-5 sm:p-6 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-50 text-primary border border-orange-200/60">
                        {job.discipline}
                      </span>
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        {job.type}
                      </span>
                    </div>

                    <h3 className="font-manuale text-base sm:text-lg font-bold text-gray-900 leading-snug hover:text-primary transition-colors cursor-pointer">
                      {job.title}
                    </h3>

                    <div className="space-y-1.5 text-xs text-gray-600">
                      <p className="flex items-center gap-1.5 font-medium text-gray-800">
                        <Building className="w-3.5 h-3.5 text-primary" />
                        <span>{job.company}</span>
                      </p>
                      <p className="flex items-center gap-1.5 text-gray-500">
                        <MapPin className="w-3.5 h-3.5 text-gray-400" />
                        <span>{job.location}</span>
                      </p>
                      <p className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                        <DollarSign className="w-3.5 h-3.5" />
                        <span>{job.salary}</span>
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {job.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] bg-stone-50 text-stone-600 border border-stone-100 px-2 py-0.5 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3 mt-4">
                    <span className="text-[11px] text-gray-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>Deadline: {job.deadline}</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => alert(`Applying for ${job.title}...`)}
                      className="px-3.5 py-1.5 rounded-md bg-secondary hover:bg-primary text-white text-xs font-semibold transition-colors flex items-center gap-1 shadow-2xs cursor-pointer"
                    >
                      <span>Apply</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <CtaBanner />
      <Footer />
    </div>
  );
}
