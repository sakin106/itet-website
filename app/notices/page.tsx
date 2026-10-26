"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { CtaBanner } from "@/app/components/CTA";
import {
  Bell,
  Search,
  Lightbulb,
  Image as ImageIcon,
  Share2,
  Eye,
  ChevronRight,
  Download,
  Calendar,
  X,
  FileText,
} from "lucide-react";

interface NoticeItem {
  id: string;
  title: string;
  category: "General" | "Official Circulars" | "Academic & Tech" | "Holidays" | "Events" | "Grants & Fellowship" | "Exam & Assessment";
  dateFormatted: string;
  dateBadge: string;
  period: "Today" | "This Week" | "Earlier";
  buttonType: "Download Image" | "Direct Download";
  body?: string;
  hasAttachment?: boolean;
}

export default function NoticesPage() {
  const [search, setSearch] = useState("");
  const [periodFilter, setPeriodFilter] = useState<"All" | "Today" | "This Week" | "Earlier">("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const notices: NoticeItem[] = [
    {
      id: "1",
      title: "আইটিইটি বাংলাদেশের মহাসচিবের বিদেশে অবস্থানকালীন দায়িত্ব হস্তান্তর প্রসঙ্গে",
      category: "General",
      dateFormatted: "October 20, 2026",
      dateBadge: "Oct 20",
      period: "Today",
      buttonType: "Download Image",
      body: "এতদ্বারা আইটিইটি-র সকল সদস্যবৃন্দের অবগতির জন্য জানানো যাচ্ছে যে, মহাসচিব প্রকৌশলী মোঃ সাখাওয়াত হোসেন মহোদয়ের বিদেশে অবস্থানকালীন সময়ে ভারপ্রাপ্ত মহাসচিবের দায়িত্ব অর্পণ করা হয়েছে।",
      hasAttachment: true,
    },
    {
      id: "2",
      title: "ITET Membership Renewal & Revised Fee Notice",
      category: "General",
      dateFormatted: "October 19, 2026",
      dateBadge: "Oct 19",
      period: "This Week",
      buttonType: "Direct Download",
      body: "ITET Membership Renewal & Revised Fee Notice আসসালামু আলাইকুম ও আন্তরিক শুভেচ্ছা। প্রিয় টেক্সটাইল প্রকৌশলীবৃন্দ, ইনস্টিটিউশন অব টেক্সটাইল ইঞ্জিনিয়ার্স অ্যান্ড টেকনোলজিস্টস (ITET) বাংলাদেশ-এর সকল সদস্যকে জানানো যাচ্ছে যে, সংগঠনের কার্যক্রমকে আরও গতিশীল ও শক্তিশালী করার লক্ষ্যে বার্ষিক চাঁদা প্রদান প্রক্রিয়া চালু হয়েছে।",
      hasAttachment: true,
    },
    {
      id: "3",
      title: "ITET Membership Announcement",
      category: "General",
      dateFormatted: "October 19, 2026",
      dateBadge: "Oct 19",
      period: "This Week",
      buttonType: "Direct Download",
      body: "Announcement regarding verification and issuance of new smart RFID cards for active General and Life Members across all zonal divisions.",
      hasAttachment: true,
    },
    {
      id: "4",
      title: "শোকবার্তা",
      category: "General",
      dateFormatted: "October 17, 2026",
      dateBadge: "Oct 17",
      period: "Earlier",
      buttonType: "Download Image",
      body: "শোকবার্তা ও জানাজার সময়সূচিঃ বুটেক্সের অধ্যাপক ড. মো: মশিউর রহমান খানের ইন্তেকালে আইটিইটির গভীর শোক প্রকাশ। গভীর শোক ও ভারাক্রান্ত হৃদয়ে জানাচ্ছি যে, বাংলাদেশ টেক্সটাইল বিশ্ববিদ্যালয়ের (বুটেক্স) ফ্যাব্রিক ইঞ্জিনিয়ারিং বিভাগের সাবেক ডিন ও অধ্যাপক পরলোকগমন করেছেন।",
      hasAttachment: true,
    },
    {
      id: "5",
      title: "তিতাস গ্যাসকে আইটিইটির প্রস্তাবনা।",
      category: "General",
      dateFormatted: "September 14, 2026",
      dateBadge: "Sep 14",
      period: "Earlier",
      buttonType: "Direct Download",
      body: "তিতাস গ্যাসের ব্যবস্থাপনা পরিচালকের সঙ্গে ITET প্রতিনিধিবৃন্দের মতবিনিময় — শিল্পখাতে গ্যাসের চাপ বৃদ্ধির জোর দাবি। দেশের টেক্সটাইল ও শিল্পখাতে চলমান তীব্র গ্যাস সংকট, নিম্ন গ্যাসের চাপ এবং এর ফলে শিল্পকারখানার উৎপাদন ব্যাহত ও বন্ধ হয়ে যাওয়ার আশঙ্কা নিয়ে ITET প্রতিনিধি দল বিস্তারিত প্রস্তাবনা পেশ করে।",
      hasAttachment: true,
    },
    {
      id: "6",
      title: "বস্ত্র খাতের উন্নয়ন ও সংস্কারে বস্ত্র অধিদপ্তরের মহাপরিচালকের সাথে ITET-এর ১৫তম কাউন্সিলের ফলপ্রসূ বৈঠক",
      category: "General",
      dateFormatted: "August 23, 2026",
      dateBadge: "Aug 23",
      period: "Earlier",
      buttonType: "Direct Download",
      body: "বস্ত্র খাতের উন্নয়ন ও সংস্কারে বস্ত্র অধিদপ্তরের মহাপরিচালকের সাথে ITET-এর ১৫তম কাউন্সিলের ফলপ্রসূ বৈঠক আজ (২৩শে আগস্ট ২০২৬) অনুষ্ঠিত হয়। The Institution of Textile Engineers & Technologists (ITET)-এর নবনির্বাচিত ১৫তম কাউন্সিলের সম্মানিত সভাপতি ইঞ্জি. মো: এনায়েত হোসেন এবং মহাসচিব ইঞ্জি. এ.এস.এম. উপস্থিত ছিলেন।",
      hasAttachment: true,
    },
  ];

  const categories = [
    { label: "All Notices", value: "All", count: 6 },
    { label: "Official Circulars", value: "Official Circulars", count: 0 },
    { label: "Academic & Tech", value: "Academic & Tech", count: 0 },
    { label: "Holidays", value: "Holidays", count: 0 },
    { label: "General", value: "General", count: 6 },
    { label: "Events", value: "Events", count: 0 },
    { label: "Grants & Fellowship", value: "Grants & Fellowship", count: 0 },
    { label: "Exam & Assessment", value: "Exam & Assessment", count: 0 },
  ];

  const handleCopyLink = (id: string) => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredNotices = notices.filter((n) => {
    const matchesSearch =
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      (n.body && n.body.toLowerCase().includes(search.toLowerCase()));
    const matchesPeriod = periodFilter === "All" || n.period === periodFilter;
    const matchesCat = categoryFilter === "All" || n.category === categoryFilter;
    return matchesSearch && matchesPeriod && matchesCat;
  });

  return (
    <div className="min-h-screen bg-[#fbfaf6] pb-16 font-sans selection:bg-primary selection:text-white flex flex-col">
      <Header />

      {/* 1. Light Theme Hero Section */}
      <section className="relative py-10 overflow-hidden bg-gradient-to-b from-amber-500/[0.04] via-transparent to-transparent">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-2 py-0.5 md:px-3.5 md:py-1.5 rounded-full bg-white shadow-xs border border-gray-100">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-700">
                ITET Official Notices
              </span>
              <span className="text-gray-300">|</span>
              <span className="text-[10px] md:text-xs text-gray-500 font-medium">
                {filteredNotices.length} Total Notices
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold font-manuale tracking-tight text-gray-800 leading-tight">
              Official Circulars <br />
              <span className="text-primary font-semibold">&amp; Notice Board</span> of ITET
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Notice Center Search Card & Filter Pills */}
      <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%] flex-1">
        <div className="mt-8 sm:mt-10 max-w-7xl mx-auto space-y-6">
          <div className="bg-white rounded-lg border border-gray-200/80 shadow-xs p-4 sm:p-5 space-y-4">
            {/* Header + Search input */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-md bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Bell className="w-4 h-4 text-primary" />
                </span>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-gray-800 leading-tight">
                    Notice Center
                  </h2>
                  <p className="text-xs text-gray-500">
                    Filter by date intervals, categories, or search circular titles
                  </p>
                </div>
              </div>

              <div className="relative w-full sm:w-80">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Search className="w-3.5 h-3.5" />
                </div>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search notices..."
                  className="w-full pl-9 pr-8 py-2 text-xs rounded-md border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-hidden transition-all text-gray-800 bg-slate-50/50 focus:bg-white"
                />
              </div>
            </div>

            {/* Date Intervals Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="bg-stone-100 p-1 rounded-md grid grid-cols-4 sm:flex gap-1 text-center border border-stone-200/60">
                {(["All", "Today", "This Week", "Earlier"] as const).map((period) => (
                  <button
                    key={period}
                    type="button"
                    onClick={() => setPeriodFilter(period)}
                    className={`py-1.5 px-3 text-xs transition-all font-medium rounded-md cursor-pointer ${
                      periodFilter === period
                        ? "bg-white text-stone-900 font-semibold shadow-xs"
                        : "text-stone-600 hover:text-stone-900"
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Pills with Notification Counts */}
            <div className="hidden sm:flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar pt-1">
              {categories.map((cat) => {
                const isActive = categoryFilter === cat.value;
                return (
                  <button
                    key={cat.value}
                    type="button"
                    onClick={() => setCategoryFilter(cat.value)}
                    className={`shrink-0 px-3 py-1.5 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? "bg-primary text-white shadow-2xs"
                        : "bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900 border border-stone-200/60"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`px-1.5 py-0.2 rounded-md text-[10px] font-bold ${
                        isActive ? "bg-white/20 text-white" : "bg-stone-200 text-stone-700"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. 2-Column Notice Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
            {filteredNotices.map((notice) => (
              <div
                key={notice.id}
                className="group bg-white rounded-lg border border-gray-200/80 shadow-2xs hover:shadow-md hover:border-primary/40 transition-all duration-200 p-5 flex flex-col justify-between cursor-pointer relative"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-9 h-9 rounded-full border border-gray-200/90 bg-slate-50 flex items-center justify-center text-gray-600 shrink-0 shadow-2xs group-hover:border-primary group-hover:text-primary transition-colors">
                        <Lightbulb className="w-4 h-4" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase border bg-blue-50 text-blue-700 border-blue-200 truncate">
                        {notice.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs text-gray-500 font-medium">{notice.dateBadge}</span>
                    </div>
                  </div>

                  <h3
                    onClick={() => setSelectedNotice(notice)}
                    className="font-bold text-sm sm:text-base text-gray-800 group-hover:text-primary transition-colors line-clamp-2 leading-snug mb-2 font-sans"
                  >
                    {notice.title}
                  </h3>

                  {notice.body && (
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-3">
                      {notice.body}
                    </p>
                  )}
                </div>

                {/* Card Actions Bottom Row */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2 mt-auto">
                  <div className="flex items-center gap-2 min-w-0">
                    <a
                      href="/assets/logo.jpg"
                      download={`${notice.title.slice(0, 20)}.jpg`}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold text-white bg-secondary hover:bg-primary rounded-md transition-all duration-150 cursor-pointer shadow-2xs"
                      title={notice.buttonType}
                    >
                      {notice.buttonType === "Download Image" ? (
                        <ImageIcon className="w-3 h-3" />
                      ) : (
                        <Download className="w-3 h-3" />
                      )}
                      <span>{notice.buttonType}</span>
                    </a>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => handleCopyLink(notice.id)}
                      title="Copy notice link"
                      className="p-1.5 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedNotice(notice)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary pl-1 hover:text-primary-dark transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Notice Detail Modal */}
          {selectedNotice && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
              onClick={() => setSelectedNotice(null)}
            >
              <div
                className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-100 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setSelectedNotice(null)}
                  className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase border bg-blue-50 text-blue-700 border-blue-200">
                    {selectedNotice.category}
                  </span>
                  <span className="text-xs text-gray-400">Published on {selectedNotice.dateFormatted}</span>
                </div>

                <h3 className="font-manuale text-xl font-bold text-gray-900 mb-4 leading-snug">
                  {selectedNotice.title}
                </h3>

                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-xs sm:text-sm text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
                  {selectedNotice.body}
                </div>

                <div className="flex justify-end items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedNotice(null)}
                    className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer"
                  >
                    Close
                  </button>
                  <a
                    href="/assets/logo.jpg"
                    download={`${selectedNotice.id}_notice.pdf`}
                    className="px-4 py-2 text-xs font-semibold text-white bg-primary hover:bg-orange-600 rounded-lg flex items-center gap-1.5 shadow-xs"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Attachment</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <CtaBanner />
      <Footer />
    </div>
  );
}
