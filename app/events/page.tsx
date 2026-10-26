"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { CtaBanner } from "@/app/components/CTA";
import {
  Search,
  ChevronDown,
  Clock,
  Calendar,
  MapPin,
  Heart,
  ExternalLink,
} from "lucide-react";

interface EventItem {
  id: string;
  title: string;
  month: string;
  day: string;
  fullDate: string;
  badge: string;
  fee: string;
  time: string;
  deadline: string;
  venue: string;
  topic: string;
  type: string;
  status: "Open" | "Closed";
  isFree: boolean;
  isMembersOnly: boolean;
  isUpcoming: boolean;
}

export default function EventsPage() {
  const [search, setSearch] = useState("");
  const [topic, setTopic] = useState("All");
  const [type, setType] = useState("All");
  const [freeOnly, setFreeOnly] = useState(false);
  const [membersOnly, setMembersOnly] = useState(false);
  const [upcomingOnly, setUpcomingOnly] = useState(false);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const events: EventItem[] = [
    {
      id: "1",
      title: "Installation Ceremony of the 15th ITET Council (2026–2028)",
      month: "SEP",
      day: "26",
      fullDate: "Sep 26, 2026",
      badge: "Members Exclusive",
      fee: "৳0",
      time: "07:00 PM - 11:00 PM",
      deadline: "24 Sept 2026 (Closed)",
      venue: "গল্ফ গার্ডেন, আর্মি গল্ফ ক্লাব",
      topic: "Leadership",
      type: "Conclaves",
      status: "Closed",
      isFree: true,
      isMembersOnly: true,
      isUpcoming: false,
    },
    {
      id: "2",
      title: "National Textile Conclave 2026: Circular Fashion & Zero Discharge",
      month: "NOV",
      day: "14",
      fullDate: "Nov 14, 2026",
      badge: "Flagship Summit",
      fee: "৳500",
      time: "09:30 AM - 05:00 PM",
      deadline: "10 Nov 2026 (Open)",
      venue: "Bangabandhu International Conference Center (BICC), Dhaka",
      topic: "Sustainability",
      type: "Conferences",
      status: "Open",
      isFree: false,
      isMembersOnly: false,
      isUpcoming: true,
    },
    {
      id: "3",
      title: "CPD Seminar: AI & Digital Automation in Spinning & Weaving Mills",
      month: "NOV",
      day: "28",
      fullDate: "Nov 28, 2026",
      badge: "CPD Masterclass",
      fee: "৳0",
      time: "03:00 PM - 07:00 PM",
      deadline: "25 Nov 2026 (Open)",
      venue: "ITET Auditorium, Sector #11, Uttara, Dhaka",
      topic: "Machinery",
      type: "Seminars",
      status: "Open",
      isFree: true,
      isMembersOnly: true,
      isUpcoming: true,
    },
  ];

  const toggleFav = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredEvents = events.filter((e) => {
    const matchesSearch =
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.venue.toLowerCase().includes(search.toLowerCase());
    const matchesTopic = topic === "All" || e.topic === topic;
    const matchesType = type === "All" || e.type === type;
    const matchesFree = !freeOnly || e.isFree;
    const matchesMembers = !membersOnly || e.isMembersOnly;
    const matchesUpcoming = !upcomingOnly || e.isUpcoming;
    return (
      matchesSearch &&
      matchesTopic &&
      matchesType &&
      matchesFree &&
      matchesMembers &&
      matchesUpcoming
    );
  });

  return (
    <div className="min-h-screen bg-[#fbfaf6] pb-20 font-sans selection:bg-primary selection:text-white flex flex-col">
      <Header />

      {/* 1. Light Theme Header */}
      <section className="relative py-10 overflow-hidden bg-gradient-to-b from-amber-500/[0.04] via-transparent to-transparent">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 md:px-3.5 md:py-1.5 rounded-full bg-white shadow-xs border border-gray-100">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-700">
                ITET Events &amp; Conclaves
              </span>
              <span className="text-gray-300">|</span>
              <span className="text-[10px] md:text-xs text-gray-500 font-medium">
                {filteredEvents.length} Total Events
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold font-manuale tracking-tight text-gray-800 leading-tight">
              Conferences, Seminars <br className="" />
              <span className="text-primary font-semibold">&amp; Conclaves</span> of ITET
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Main Content */}
      <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%] flex-1">
        <div className="mt-8 sm:mt-10 max-w-7xl mx-auto space-y-6">
          {/* Sub Header Bar */}
          <div className="flex items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-gray-600">
              Showing <strong className="text-gray-900 font-semibold">{filteredEvents.length}</strong> events
            </div>
            <Link href="/member-portal"
              className="bg-secondary hover:bg-primary px-4 py-2 rounded-md text-white text-xs sm:text-sm font-semibold transition-colors shadow-2xs"
            >
              My Registered Events
            </Link>
          </div>

          {/* Filter Bar with Inputs, Selects, and Toggle Switches */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-xs p-3.5 sm:p-5 mb-6 sm:mb-8 space-y-3 sm:space-y-4 lg:space-y-0 lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3 flex-1">
              {/* Search box */}
              <div className="relative flex-1 min-w-0 sm:min-w-[200px]">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search events, topic or city..."
                  className="w-full pl-9 pr-8 py-2 sm:py-2.5 bg-stone-50/50 sm:bg-white border border-gray-200 rounded-md text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-primary focus:border-primary shadow-2xs transition-colors"
                />
              </div>

              {/* Topic Select */}
              <div className="relative w-full sm:w-auto">
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full sm:w-auto appearance-none bg-white border border-gray-200 rounded-md px-3 py-2 sm:px-4 sm:py-2.5 pr-7 sm:pr-9 text-xs sm:text-sm font-semibold text-gray-700 hover:border-gray-300 focus:outline-hidden focus:ring-1 focus:ring-primary focus:border-primary cursor-pointer shadow-2xs transition-colors"
                >
                  <option value="All">All Topics</option>
                  <option value="Textile">Textile Eng.</option>
                  <option value="Sustainability">Sustainability</option>
                  <option value="Machinery">Machinery &amp; Tech</option>
                  <option value="Leadership">Leadership</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Types Select */}
              <div className="relative w-full sm:w-auto">
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full sm:w-auto appearance-none bg-white border border-gray-200 rounded-md px-3 py-2 sm:px-4 sm:py-2.5 pr-7 sm:pr-9 text-xs sm:text-sm font-semibold text-gray-700 hover:border-gray-300 focus:outline-hidden focus:ring-1 focus:ring-primary focus:border-primary cursor-pointer shadow-2xs transition-colors"
                >
                  <option value="All">All Types</option>
                  <option value="Conferences">Conferences</option>
                  <option value="Seminars">Seminars</option>
                  <option value="Conclaves">Conclaves</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* 3 Toggle Switches */}
            <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto pt-2 lg:pt-0 border-t lg:border-t-0 border-gray-100">
              {/* Toggle 1: Free Events */}
              <label className="flex items-center gap-1.5 sm:gap-2.5 text-[11px] sm:text-xs font-semibold text-gray-700 cursor-pointer select-none">
                <div
                  onClick={() => setFreeOnly(!freeOnly)}
                  className={`w-8 h-4.5 sm:w-10 sm:h-5 flex items-center rounded-full p-0.5 transition-colors duration-200 shrink-0 ${
                    freeOnly ? "bg-primary" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`bg-white w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full shadow-md transform transition-transform duration-200 ${
                      freeOnly ? "translate-x-4 sm:translate-x-5" : "translate-x-0"
                    }`}
                  />
                </div>
                <span className="whitespace-nowrap">Free Events</span>
              </label>

              {/* Toggle 2: Members Only */}
              <label className="flex items-center gap-1.5 sm:gap-2.5 text-[11px] sm:text-xs font-semibold text-gray-700 cursor-pointer select-none">
                <div
                  onClick={() => setMembersOnly(!membersOnly)}
                  className={`w-8 h-4.5 sm:w-10 sm:h-5 flex items-center rounded-full p-0.5 transition-colors duration-200 shrink-0 ${
                    membersOnly ? "bg-primary" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`bg-white w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full shadow-md transform transition-transform duration-200 ${
                      membersOnly ? "translate-x-4 sm:translate-x-5" : "translate-x-0"
                    }`}
                  />
                </div>
                <span className="whitespace-nowrap">Members Only</span>
              </label>

              {/* Toggle 3: Upcoming */}
              <label className="flex items-center gap-1.5 sm:gap-2.5 text-[11px] sm:text-xs font-semibold text-gray-700 cursor-pointer select-none">
                <div
                  onClick={() => setUpcomingOnly(!upcomingOnly)}
                  className={`w-8 h-4.5 sm:w-10 sm:h-5 flex items-center rounded-full p-0.5 transition-colors duration-200 shrink-0 ${
                    upcomingOnly ? "bg-primary" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`bg-white w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full shadow-md transform transition-transform duration-200 ${
                      upcomingOnly ? "translate-x-4 sm:translate-x-5" : "translate-x-0"
                    }`}
                  />
                </div>
                <span className="whitespace-nowrap">Upcoming</span>
              </label>
            </div>
          </div>

          {/* 2-Column Event Cards Grid with Red Date Block */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
            {filteredEvents.map((evt) => {
              const isFav = !!favorites[evt.id];
              return (
                <div
                  key={evt.id}
                  className="bg-white rounded-lg border border-gray-200 shadow-xs hover:shadow-md hover:border-gray-300 transition-all duration-200 p-3.5 sm:p-5 flex flex-row items-start sm:items-stretch gap-3 sm:gap-4 relative group"
                >
                  {/* Heart / Favorite Button */}
                  <button
                    type="button"
                    onClick={() => toggleFav(evt.id)}
                    className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 text-gray-400 hover:text-rose-500 transition-colors cursor-pointer z-10"
                    title="Save to favorites"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isFav ? "fill-rose-500 text-rose-500" : "text-gray-400"
                      }`}
                    />
                  </button>

                  {/* Prominent Red Calendar Date Block */}
                  <div className="w-[74px] sm:w-[88px] shrink-0 flex flex-col rounded-lg overflow-hidden border border-gray-200 shadow-xs bg-white self-start sm:self-stretch">
                    <div className="relative w-full">
                      <div className="bg-[#f43f5e] w-full py-1 sm:py-1.5 px-1.5 sm:px-2 relative">
                        <div className="flex justify-around items-center absolute -top-1 left-0 right-0 px-2 sm:px-3">
                          <div className="w-1.5 h-1.5 sm:h-2 bg-gray-300/80 rounded-full shadow-inner" />
                          <div className="w-1.5 h-1.5 sm:h-2 bg-gray-300/80 rounded-full shadow-inner" />
                        </div>
                        <span className="block text-[10px] sm:text-[11px] font-black tracking-wider text-white text-center uppercase leading-tight pt-0.5">
                          {evt.month}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center sm:flex-1 sm:justify-between p-1.5 sm:p-2 bg-white">
                      <span className="text-2xl sm:text-3xl font-black text-[#f43f5e] tracking-tighter leading-none mt-0.5 sm:mt-1">
                        {evt.day}
                      </span>
                      <span className="text-[9px] sm:text-[10px] text-gray-400 font-medium text-center mt-1 sm:mt-2 leading-tight">
                        {evt.fullDate}
                      </span>
                    </div>
                  </div>

                  {/* Event Details Content */}
                  <div className="flex-1 flex flex-col justify-between min-w-0 pr-6 sm:pr-4">
                    <div className="space-y-1.5 sm:space-y-2">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-800 leading-snug line-clamp-2 hover:text-primary transition-colors cursor-pointer font-sans">
                        {evt.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                        <span className="text-[10px] sm:text-[11px] font-semibold px-2 sm:px-2.5 py-0.5 rounded-md inline-block bg-rose-50 text-rose-600">
                          {evt.badge}
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-semibold px-1.5 sm:px-2 py-0.5 rounded-md inline-flex items-center bg-amber-50 text-amber-800 border border-amber-100">
                          {evt.fee}
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-medium text-gray-600 bg-gray-50 border border-gray-100 px-1.5 sm:px-2 py-0.5 rounded-md inline-flex items-center gap-1">
                          <Clock className="w-3 h-3 text-gray-400 shrink-0" />
                          <span>{evt.time}</span>
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-medium border px-1.5 sm:px-2 py-0.5 rounded-md inline-flex items-center gap-1 text-rose-700 bg-rose-50 border-rose-200 font-semibold">
                          <Calendar className="w-3 h-3 text-stone-500 shrink-0" />
                          <span>Reg Deadline: {evt.deadline}</span>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2 pt-2.5 sm:pt-3 mt-3 sm:mt-auto border-t border-gray-100/60">
                      <div className="flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs text-gray-600 font-medium min-w-0 flex-1">
                        <MapPin className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                        <span className="truncate" title={evt.venue}>
                          {evt.venue}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                        <span
                          className={`text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-sm ${
                            evt.status === "Closed"
                              ? "bg-rose-50 text-rose-600 border border-rose-200"
                              : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          }`}
                        >
                          {evt.status}
                        </span>
                        <a
                          href={`#event-${evt.id}`}
                          className="text-gray-400 hover:text-primary transition-colors"
                          title="View external link"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <CtaBanner />
      <Footer />
    </div>
  );
}
