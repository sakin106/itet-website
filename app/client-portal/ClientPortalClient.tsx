"use client";

import React, { useState } from "react";
import Link from "next/link";

import { logoutAction } from "@/app/actions";

import {
  LayoutDashboard,
  ArrowLeft,
  Menu,
  X,
  House,
  ChevronRight,
  Sparkles,
  UserCheck,
  HelpCircle,
  Globe,
  Megaphone,
  Briefcase,
  CheckCircle2,
  Clock,
  ExternalLink,
  Eye,
  MousePointerClick,
  Building2,
  Calendar,
  LogOut,
} from "lucide-react";

type ClientTab = "dashboard" | "ads" | "jobs";

export interface ClientJobData {
  id: string;
  title: string;
  companyName: string;
  jobLocation: string;
  employmentType: string;
  salaryRange?: string | null;
  description: string;
  applicationDeadline?: string | Date | null;
  approvalStatus: string;
}

export interface ClientAdData {
  id: string;
  title: string;
  clientName: string;
  placement: string;
  aspectRatio: string;
  imageUrl: string;
  targetUrl?: string | null;
  durationDays: number;
  impressionsCount: number;
  clicksCount: number;
  approvalStatus: string;
}

export interface ClientPortalClientProps {
  clientUser?: { email: string; role?: string } | null;
  jobs?: ClientJobData[];
  ads?: ClientAdData[];
}

export function ClientPortalClient({
  clientUser = { email: "client@squaregroup.com", role: "CLIENT" },
  jobs = [],
  ads = [],
}: ClientPortalClientProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<ClientTab>("dashboard");

  const toggleSidebar = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      setCollapsed((prev) => !prev);
    } else {
      setMobileOpen((prev) => !prev);
    }
  };

  const totalImpressions = ads.reduce((acc, a) => acc + a.impressionsCount, 0);
  const totalClicks = ads.reduce((acc, a) => acc + a.clicksCount, 0);

  return (
    <div className="font-sans min-h-screen bg-gray-50/70 text-gray-900 antialiased selection:bg-primary selection:text-white">
      <div className="flex min-h-screen font-poppins">
        {/* Mobile Backdrop */}
        <div
          onClick={() => setMobileOpen(false)}
          className={`fixed inset-0 bg-black/40 backdrop-blur-xs z-40 lg:hidden transition-opacity duration-300 ease-in-out ${
            mobileOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          aria-hidden="true"
        />

        {/* Sidebar */}
        <aside
          className={`fixed top-0 bottom-0 left-0 z-50 bg-white border-r border-gray-200 flex flex-col transition-[width,transform] duration-300 ease-in-out shadow-xs ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 ${collapsed ? "lg:w-20 w-64" : "lg:w-64 w-64"}`}
        >
          {/* Sidebar Top: Logo & Title */}
          <div className="p-4 border-b border-gray-200 flex items-center transition-all duration-300 ease-in-out justify-between">
            <div className="relative group min-w-0">
              <Link href="/client-portal" className="flex items-center gap-3 min-w-0">
                <div className="relative w-9 h-9 shrink-0">
                  <img
                    alt="ITET Logo"
                    decoding="async"
                    className="object-contain w-full h-full"
                    src="/assets/logo.jpg"
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    collapsed
                      ? "lg:opacity-0 lg:max-w-0"
                      : "opacity-100 max-w-[180px]"
                  }`}
                >
                  <h2 className="font-bold text-md text-gray-800 leading-tight whitespace-nowrap font-manuale">
                    ITET Bangladesh
                  </h2>
                  <p className="text-[11px] text-gray-500 font-medium whitespace-nowrap">
                    Client &amp; Partner Portal
                  </p>
                </div>
              </Link>
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="lg:hidden p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer transition-colors duration-200"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-3 space-y-1.5 overflow-y-auto">
            {/* Dashboard */}
            <button
              type="button"
              onClick={() => {
                setActiveTab("dashboard");
                setMobileOpen(false);
              }}
              className={`w-full flex items-center justify-between rounded-md text-sm font-medium transition-all duration-200 px-3 py-2.5 cursor-pointer text-left ${
                activeTab === "dashboard"
                  ? "bg-gray-900 text-white font-semibold shadow-xs"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <LayoutDashboard
                  className={`w-5 h-5 shrink-0 transition-colors duration-200 ${
                    activeTab === "dashboard" ? "text-white" : "text-gray-500"
                  }`}
                />
                <span
                  className={`whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ${
                    collapsed
                      ? "lg:opacity-0 lg:max-w-0"
                      : "opacity-100 max-w-[150px]"
                  }`}
                >
                  Client Dashboard
                </span>
              </div>
            </button>

            {/* Ad Banners */}
            <button
              type="button"
              onClick={() => {
                setActiveTab("ads");
                setMobileOpen(false);
              }}
              className={`w-full flex items-center justify-between rounded-md text-sm font-medium transition-all duration-200 px-3 py-2.5 cursor-pointer text-left ${
                activeTab === "ads"
                  ? "bg-gray-900 text-white font-semibold shadow-xs"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <Megaphone
                  className={`w-5 h-5 shrink-0 transition-colors duration-200 ${
                    activeTab === "ads" ? "text-white" : "text-gray-500"
                  }`}
                />
                <span
                  className={`whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ${
                    collapsed
                      ? "lg:opacity-0 lg:max-w-0"
                      : "opacity-100 max-w-[150px]"
                  }`}
                >
                  Ad Banners
                </span>
              </div>
              {!collapsed && (
                <span className="text-[10px] bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded-full font-bold">
                  {ads.length}
                </span>
              )}
            </button>

            {/* Job Circulars */}
            <button
              type="button"
              onClick={() => {
                setActiveTab("jobs");
                setMobileOpen(false);
              }}
              className={`w-full flex items-center justify-between rounded-md text-sm font-medium transition-all duration-200 px-3 py-2.5 cursor-pointer text-left ${
                activeTab === "jobs"
                  ? "bg-gray-900 text-white font-semibold shadow-xs"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <Briefcase
                  className={`w-5 h-5 shrink-0 transition-colors duration-200 ${
                    activeTab === "jobs" ? "text-white" : "text-gray-500"
                  }`}
                />
                <span
                  className={`whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ${
                    collapsed
                      ? "lg:opacity-0 lg:max-w-0"
                      : "opacity-100 max-w-[150px]"
                  }`}
                >
                  Job Circulars
                </span>
              </div>
              {!collapsed && (
                <span className="text-[10px] bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded-full font-bold">
                  {jobs.length}
                </span>
              )}
            </button>
          </nav>

          {/* Sidebar Bottom: Back to Main Site & Version */}
          <div className="p-3 border-t border-gray-200 space-y-1">
            <div className="relative group">
              <Link href="/"
                className="w-full flex items-center rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200 cursor-pointer px-3 py-2 text-left"
              >
                <ArrowLeft className="w-5 h-5 shrink-0 text-gray-500 group-hover:text-gray-800" />
                <span
                  className={`whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ml-3 ${
                    collapsed
                      ? "lg:opacity-0 lg:max-w-0 lg:ml-0"
                      : "opacity-100 max-w-[160px]"
                  }`}
                >
                  Back to Main Site
                </span>
              </Link>
            </div>
            <form action={logoutAction}>
              <button
                type="submit"
                className="w-full flex items-center rounded-md text-sm font-medium text-red-600 hover:bg-red-50 transition-all duration-200 cursor-pointer px-3 py-2 text-left"
              >
                <LogOut className="w-5 h-5 shrink-0 text-red-500" />
                <span
                  className={`whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ml-3 ${
                    collapsed
                      ? "lg:opacity-0 lg:max-w-0 lg:ml-0"
                      : "opacity-100 max-w-[160px]"
                  }`}
                >
                  Log Out
                </span>
              </button>
            </form>
            <div
              className={`text-center mt-3 font-manuale italic transition-opacity duration-300 ${
                collapsed ? "lg:hidden" : "block"
              }`}
            >
              <h4 className="text-xs text-gray-400">Client Portal v1.0.0</h4>
            </div>
          </div>
        </aside>

        {/* Main Application Area */}
        <div
          className={`flex-1 flex flex-col min-w-0 transition-[padding] duration-300 ease-in-out ${
            collapsed ? "lg:pl-20" : "lg:pl-64"
          }`}
        >
          {/* Header */}
          <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-2xs">
            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-18">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <button
                  type="button"
                  onClick={toggleSidebar}
                  className="p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900/10 cursor-pointer transition-colors duration-200"
                  aria-label="Toggle Navigation Sidebar"
                  title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                >
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
                </button>

                {/* Breadcrumbs */}
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hidden sm:flex">
                    <Link href="/"
                      className="hover:text-gray-900 flex items-center gap-1"
                    >
                      <House className="w-3 h-3" />
                      <span>ITET</span>
                    </Link>
                    <ChevronRight className="w-3 h-3 text-gray-300" />
                    <Link href="/client-portal" className="hover:text-gray-900">
                      <span>Corporate Portal</span>
                    </Link>
                    <ChevronRight className="w-3 h-3 text-gray-300" />
                    <span className="text-gray-900 font-semibold truncate max-w-[200px]">
                      {activeTab === "dashboard"
                        ? "Client Dashboard"
                        : activeTab === "ads"
                        ? "Ad Banners"
                        : "Job Circulars"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <div className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Corporate Client Verified</span>
                </div>

                <Link href="/member-portal"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 hover:text-gray-900 transition-colors"
                  title="Switch to Member Portal"
                >
                  <UserCheck className="w-3.5 h-3.5 text-gray-600" />
                  <span>Member Portal</span>
                </Link>

                <Link href="/contact"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-gray-200 text-xs font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                  title="Contact ITET"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-gray-500" />
                  <span>Support</span>
                </Link>

                <Link href="/"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gray-900 text-white text-xs font-semibold hover:bg-gray-800 transition-colors shadow-xs"
                  title="Return to Main Website"
                >
                  <Globe className="w-3.5 h-3.5 text-white/80" />
                  <span>Main Site</span>
                </Link>
              </div>
            </div>
          </header>

          {/* Main Dashboard Content - Live SQLite Binding */}
          <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 w-full mx-auto font-poppins space-y-6">
            {/* Corporate Desk Summary Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-gray-100">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-primary font-bold">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h1 className="text-lg sm:text-xl font-bold font-manuale text-gray-900">
                      Square Textiles Ltd. (Corporate Desk)
                    </h1>
                    <p className="text-xs text-gray-500">
                      Account: {clientUser?.email || "client@squaregroup.com"} • Role: {clientUser?.role || "CLIENT"}
                    </p>
                  </div>
                </div>
                <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Active SLA Agreement
                </span>
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-5">
                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200/70">
                  <p className="text-[11px] text-gray-500 font-medium">Active Banner Ads</p>
                  <p className="text-lg font-bold font-manuale text-gray-900 mt-0.5">
                    {ads.length}
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200/70">
                  <p className="text-[11px] text-gray-500 font-medium">Delivered Impressions</p>
                  <p className="text-lg font-bold font-manuale text-primary mt-0.5">
                    {totalImpressions.toLocaleString()}
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200/70">
                  <p className="text-[11px] text-gray-500 font-medium">Click Conversions</p>
                  <p className="text-lg font-bold font-manuale text-gray-900 mt-0.5">
                    {totalClicks.toLocaleString()}
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200/70">
                  <p className="text-[11px] text-gray-500 font-medium">Job Postings</p>
                  <p className="text-lg font-bold font-manuale text-gray-900 mt-0.5">
                    {jobs.length}
                  </p>
                </div>
              </div>
            </div>

            {/* SECTION 1: Active Ad Banners (Live from SQLite) */}
            {(activeTab === "dashboard" || activeTab === "ads") && (
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div>
                    <h3 className="font-bold text-base font-manuale text-gray-900">
                      Active Digital Ad Banners
                    </h3>
                    <p className="text-xs text-gray-500">
                      Published 9:16 vertical &amp; landscape media flight schedules (Live from SQLite)
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {ads.length} Campaign{ads.length === 1 ? "" : "s"}
                  </span>
                </div>

                <div className="divide-y divide-gray-100">
                  {ads.length > 0 ? (
                    ads.map((ad) => (
                      <div
                        key={ad.id}
                        className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-4 min-w-0">
                          <div className="w-16 h-20 rounded-lg bg-gray-100 border border-gray-200 overflow-hidden shrink-0">
                            <img
                              src={ad.imageUrl}
                              alt={ad.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="font-bold text-sm text-gray-900">
                                {ad.title}
                              </h4>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                                {ad.aspectRatio}
                              </span>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-50 text-primary border border-orange-200">
                                {ad.placement}
                              </span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                              Client: {ad.clientName} • Flight: {ad.durationDays} Days Duration
                            </p>
                            <a
                              href={ad.targetUrl || "#"}
                              target="_blank"
                              rel="noreferrer"
                              className="text-xs text-sky-600 hover:underline flex items-center gap-1 mt-1"
                            >
                              <span>Destination: {ad.targetUrl || "Website"}</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>

                        <div className="flex items-center gap-5 text-xs shrink-0 self-end md:self-auto">
                          <div className="text-right">
                            <p className="font-bold text-gray-900">
                              {ad.impressionsCount.toLocaleString()} Views
                            </p>
                            <p className="text-[11px] text-gray-400">
                              {ad.clicksCount.toLocaleString()} Clicks
                            </p>
                          </div>

                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            <span>{ad.approvalStatus}</span>
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-gray-500 py-6 text-center">
                      No active ad banner campaigns found in database.
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* SECTION 2: Active Job Circulars (Live from SQLite) */}
            {(activeTab === "dashboard" || activeTab === "jobs") && (
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div>
                    <h3 className="font-bold text-base font-manuale text-gray-900">
                      Corporate Job Circular Submissions
                    </h3>
                    <p className="text-xs text-gray-500">
                      Recruitment listings posted for verified ITET engineering talent
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {jobs.length} Circular{jobs.length === 1 ? "" : "s"}
                  </span>
                </div>

                <div className="divide-y divide-gray-100">
                  {jobs.length > 0 ? (
                    jobs.map((job) => (
                      <div
                        key={job.id}
                        className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-4"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-bold text-sm text-gray-900">
                              {job.title}
                            </h4>
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                              {job.employmentType.replace("_", " ")}
                            </span>
                          </div>
                          <p className="text-xs text-gray-600">
                            {job.companyName} • {job.jobLocation} • Salary: {job.salaryRange || "Negotiable"}
                          </p>
                          <p className="text-xs text-gray-500 line-clamp-1 max-w-xl">
                            {job.description}
                          </p>
                        </div>

                        <div className="flex items-center gap-4 text-xs shrink-0 self-end md:self-auto">
                          <div className="text-right">
                            <p className="text-gray-500">Deadline</p>
                            <p className="font-semibold text-gray-800">
                              {job.applicationDeadline
                                ? new Date(job.applicationDeadline).toLocaleDateString("en-US", {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                  })
                                : "Open"}
                            </p>
                          </div>

                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            <span>{job.approvalStatus}</span>
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-gray-500 py-6 text-center">
                      No job circulars found in database.
                    </p>
                  )}
                </div>
              </div>
            )}
          </main>

          {/* Footer matching live production DOM */}
          <footer className="border-t border-gray-200 bg-white py-4 px-6 text-center text-xs text-gray-500 flex justify-center font-manuale mt-auto">
            <div className="text-gray-500 flex items-center gap-1 text-center">
              <span>Designed &amp; Developed by SAKIN BIN JABED</span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
