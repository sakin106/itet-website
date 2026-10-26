"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Bell,
  MapPin,
  Clock,
  Paperclip,
  ChevronRight,
} from "lucide-react";

export function EventsAndNotices() {
  const [activeTab, setActiveTab] = useState<"All" | "Today" | "This Week" | "Month">("All");

  const notices = [
    {
      id: "1",
      date: { month: "OCT", day: "20" },
      title: "আইটিইটি বাংলাদেশের মহাসচিবের বিদেশে অবস্থানকালীন ভারপ্রাপ্ত মহাসচিবের দায়িত্ব অর্পণ প্রসঙ্গে।",
      timestamp: "October 20, 2026",
      category: "General",
      hasAttachment: true,
      period: "All",
    },
    {
      id: "2",
      date: { month: "OCT", day: "19" },
      title: "ITET Membership Renewal & Revised Fee Notice",
      timestamp: "October 19, 2026",
      category: "General",
      hasAttachment: true,
      period: "All",
    },
    {
      id: "3",
      date: { month: "OCT", day: "19" },
      title: "ITET Membership Announcement",
      timestamp: "October 19, 2026",
      category: "General",
      hasAttachment: true,
      period: "This Week",
    },
    {
      id: "4",
      date: { month: "OCT", day: "17" },
      title: "শোকবার্তা",
      timestamp: "October 17, 2026",
      category: "General",
      hasAttachment: true,
      period: "Month",
    },
  ];

  const filteredNotices =
    activeTab === "All"
      ? notices
      : notices.filter((n) => n.period === activeTab);

  return (
    <div className="space-y-4">
      {/* 1. Events & Conclaves Card */}
      <div className="bg-white rounded-2xl border border-gray-200/80 p-5 shadow-xs">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-orange-50 border border-orange-200/60 flex items-center justify-center text-primary">
              <Calendar className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-gray-900 text-sm sm:text-base font-manuale">
              Events &amp; Conclaves
            </h3>
          </div>
          <Link
            href="/events"
            className="text-xs font-semibold text-primary hover:underline flex items-center gap-0.5"
          >
            <span>View All</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Featured Event Item */}
        <div className="p-3.5 rounded-xl border border-gray-100 bg-gray-50/70 hover:bg-orange-50/30 transition-all duration-200">
          <div className="flex items-start gap-3.5">
            {/* Calendar date badge */}
            <div className="w-12 h-13 rounded-lg bg-white border border-gray-200 text-center flex flex-col justify-center shrink-0 shadow-2xs overflow-hidden">
              <span className="bg-primary text-white text-[9px] font-bold py-0.5 uppercase tracking-wider">
                SEP
              </span>
              <span className="font-black text-gray-900 text-lg leading-tight">
                26
              </span>
              <span className="text-[9px] text-gray-400 font-medium">2026</span>
            </div>

            {/* Event details */}
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-xs sm:text-sm text-gray-900 hover:text-primary transition-colors line-clamp-1 mb-1.5 cursor-pointer">
                Installation Ceremony of the 15th ITET Council (2026–...)
              </h4>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-1.5 mb-2">
                <span className="text-[10px] font-bold text-red-700 bg-red-50 border border-red-200/60 px-2 py-0.5 rounded">
                  Members Only
                </span>
                <span className="text-[10px] font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded">
                  Reg: 24 Sept 2026
                </span>
                <span className="text-[10px] font-bold text-rose-600 bg-rose-50 border border-rose-200 px-1.5 py-0.5 rounded">
                  Closed
                </span>
              </div>

              {/* Venue & Time */}
              <div className="flex items-center gap-3 text-[11px] text-gray-500">
                <span className="flex items-center gap-1 truncate">
                  <MapPin className="w-3 h-3 text-gray-400 shrink-0" />
                  <span>গলফ গার্ডেন, আর্মি গলফ ক্লাব</span>
                </span>
                <span className="flex items-center gap-1 shrink-0">
                  <Clock className="w-3 h-3 text-gray-400" />
                  <span>07:00 PM - 11:00 PM</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Latest Notices Card */}
      <div className="bg-white rounded-2xl border border-gray-200/80 p-5 shadow-xs">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-orange-50 border border-orange-200/60 flex items-center justify-center text-primary">
              <Bell className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-gray-900 text-sm sm:text-base font-manuale">
              Latest Notices
            </h3>
          </div>
          <Link
            href="/notices"
            className="text-xs font-semibold text-primary hover:underline flex items-center gap-0.5"
          >
            <span>View All</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Tab filters */}
        <div className="flex items-center gap-1 bg-gray-100/80 p-1 rounded-lg mb-3">
          {(["All", "Today", "This Week", "Month"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                activeTab === tab
                  ? "bg-white text-gray-900 shadow-2xs"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Notices scrollable list */}
        <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
          {filteredNotices.map((notice) => (
            <div
              key={notice.id}
              className="flex items-center justify-between p-2.5 rounded-lg border border-gray-100 hover:border-orange-200 hover:bg-orange-50/20 transition-all duration-150 group"
            >
              <div className="flex items-center gap-3 min-w-0">
                {/* Date Badge */}
                <div className="w-10 h-10 rounded-md bg-gray-50 border border-gray-200 flex flex-col items-center justify-center shrink-0">
                  <span className="text-[9px] font-bold text-gray-400 uppercase leading-none">
                    {notice.date.month}
                  </span>
                  <span className="text-sm font-bold text-gray-800 leading-tight">
                    {notice.date.day}
                  </span>
                </div>

                {/* Notice text */}
                <div className="min-w-0">
                  <h5 className="text-xs font-semibold text-gray-800 group-hover:text-primary transition-colors truncate">
                    {notice.title}
                  </h5>
                  <div className="flex items-center gap-2 text-[10px] text-gray-400 mt-0.5">
                    <span>{notice.timestamp}</span>
                    {notice.hasAttachment && (
                      <span className="flex items-center gap-0.5 text-orange-600 font-medium">
                        <Paperclip className="w-2.5 h-2.5" />
                        <span>Attached</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Category pill */}
              <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded shrink-0 ml-2">
                {notice.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
