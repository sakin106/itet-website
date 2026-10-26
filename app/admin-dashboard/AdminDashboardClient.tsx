"use client";

import React, { useState } from "react";
import Link from "next/link";


import {
  Shield,
  Users,
  CheckCircle2,
  XCircle,
  FileCheck,
  Calendar,
  Megaphone,
  FileText,
  Search,
  Filter,
  Eye,
  LogOut,
  ArrowLeft,
  ChevronRight,
  Menu,
  X,
  Clock,
  AlertCircle,
  Sparkles,
  LayoutDashboard,
  Layers,
  Settings,
  Briefcase,
} from "lucide-react";

interface ApprovalItem {
  id: string;
  appNo: string;
  applicantName: string;
  email: string;
  phone: string;
  institute: string;
  batch: string;
  admissionSession: string;
  presentAddressZone: string;
  appliedCategory: "Life Member" | "General Member" | "Student Member";
  submittedDate: string;
  status: "Pending" | "Approved" | "Rejected";
  certUrl: string;
}

type AdminTab = "overview" | "approvals" | "users" | "events" | "ads" | "content";

import { handleMemberApprovalAction, logoutAction } from "@/app/actions";

export interface PendingProfileData {
  id: string;
  memberId: string;
  fullName: string;
  user?: { email: string } | null;
  phone?: string | null;
  institute: string;
  batch: string;
  admissionSession: string;
  presentAddressZone: string;
  membershipType: string;
  approvalStatus: string;
  createdAt: string | Date;
  certDocUrl?: string | null;
}

export interface AdminDashboardClientProps {
  adminUser?: { email: string; role: string } | null;
  pendingProfiles: PendingProfileData[];
  verifiedMembersCount: number;
  pendingApprovalsCount: number;
  activeAdsCount: number;
  upcomingEventsCount: number;
  pendingJobsCount: number;
}

export function AdminDashboardClient({
  adminUser = { email: "sakin5140@gmail.com", role: "ADMIN" },
  pendingProfiles = [],
  verifiedMembersCount = 0,
  pendingApprovalsCount = 0,
  activeAdsCount = 0,
  upcomingEventsCount = 0,
  pendingJobsCount = 0,
}: AdminDashboardClientProps) {

  const [activeMenu, setActiveMenu] = useState<AdminTab>("approvals");

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedZoneFilter, setSelectedZoneFilter] = useState("All Zones");
  const [previewItem, setPreviewItem] = useState<ApprovalItem | null>(null);

  // Directly derive approvals from live SQLite pending profiles
  const approvals: ApprovalItem[] = pendingProfiles.map((p) => ({
    id: p.id,
    appNo: p.memberId,
    applicantName: p.fullName,
    email: p.user?.email || "applicant@itetbd.net",
    phone: p.phone || "+880 1700-000000",
    institute: p.institute,
    batch: p.batch,
    admissionSession: p.admissionSession,
    presentAddressZone: p.presentAddressZone,
    appliedCategory:
      p.membershipType === "LIFE"
        ? "Life Member"
        : p.membershipType === "GENERAL"
        ? "General Member"
        : "Student Member",
    submittedDate: new Date(p.createdAt).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
    status:
      p.approvalStatus === "APPROVED"
        ? "Approved"
        : p.approvalStatus === "REJECTED"
        ? "Rejected"
        : "Pending",
    certUrl: p.certDocUrl || "Verified Academic Credentials",
  }));

  const handleTabChange = (tab: AdminTab) => {
    setActiveMenu(tab);
    setSidebarOpen(false);
  };

  const filteredApprovals = approvals.filter((item) => {
    const matchesSearch =
      item.applicantName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.appNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.institute.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesZone =
      selectedZoneFilter === "All Zones" ||
      item.presentAddressZone.includes(selectedZoneFilter);
    return matchesSearch && matchesZone;
  });

  const pendingCount = approvals.filter((a) => a.status === "Pending").length;

  const tabLabels: Record<AdminTab, string> = {
    overview: "Dashboard Overview",
    approvals: "Membership Approvals",
    users: "User Management",
    events: "Events & Registrations",
    ads: "Ads & Placements",
    content: "Notices & Content",
  };

  return (
    <div className="min-h-screen bg-[#fcfaf7] text-gray-900 font-poppins selection:bg-primary selection:text-white flex">
      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 lg:hidden"
        />
      )}

      {/* Admin Sidebar */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 bg-[#111827] text-gray-200 border-r border-gray-800 flex flex-col transition-transform duration-300 ease-in-out w-64 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Brand */}
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/assets/logo.jpg"
              alt="ITET Logo"
              className="w-9 h-9 object-contain rounded bg-white p-0.5"
            />
            <div>
              <h2 className="font-bold text-sm text-white font-manuale leading-tight">
                ITET Admin Console
              </h2>
              <p className="text-[11px] text-orange-400 font-medium">
                Secretariat Desk v2.0
              </p>
            </div>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1.5 text-gray-400 hover:text-white"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Admin Desk Status */}
        <div className="p-3.5 bg-gray-900/60 border-b border-gray-800 text-xs flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">
            <Shield className="w-4 h-4" />
          </div>
          <div>
            <p className="font-semibold text-white">Central Secretariat</p>
            <p className="text-[10px] text-gray-400">{adminUser?.email || "admin@itetbd.net"}</p>
          </div>
        </div>

        {/* Sidebar Nav */}
        <nav className="flex-1 p-3 space-y-1.5 overflow-y-auto text-xs font-medium">
          {/* Overview */}
          <button
            type="button"
            onClick={() => handleTabChange("overview")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors cursor-pointer text-left ${
              activeMenu === "overview"
                ? "bg-primary text-white font-semibold shadow-xs"
                : "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
            }`}
          >
            <LayoutDashboard className="w-4 h-4 shrink-0" />
            <span>Dashboard Overview</span>
          </button>

          {/* Approvals */}
          <button
            type="button"
            onClick={() => handleTabChange("approvals")}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors cursor-pointer text-left ${
              activeMenu === "approvals"
                ? "bg-primary text-white font-semibold shadow-xs"
                : "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
            }`}
          >
            <div className="flex items-center gap-3">
              <FileCheck className="w-4 h-4 shrink-0" />
              <span>Membership Approvals</span>
            </div>
            {pendingCount > 0 && (
              <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-red-500 text-white">
                {pendingCount}
              </span>
            )}
          </button>

          {/* Users */}
          <button
            type="button"
            onClick={() => handleTabChange("users")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors cursor-pointer text-left ${
              activeMenu === "users"
                ? "bg-primary text-white font-semibold shadow-xs"
                : "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
            }`}
          >
            <Users className="w-4 h-4 shrink-0" />
            <span>User Management</span>
          </button>

          {/* Events */}
          <button
            type="button"
            onClick={() => handleTabChange("events")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors cursor-pointer text-left ${
              activeMenu === "events"
                ? "bg-primary text-white font-semibold shadow-xs"
                : "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
            }`}
          >
            <Calendar className="w-4 h-4 shrink-0" />
            <span>Events &amp; Registrations</span>
          </button>

          {/* Ads */}
          <button
            type="button"
            onClick={() => handleTabChange("ads")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors cursor-pointer text-left ${
              activeMenu === "ads"
                ? "bg-primary text-white font-semibold shadow-xs"
                : "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
            }`}
          >
            <Megaphone className="w-4 h-4 shrink-0" />
            <span>Ads &amp; Placements</span>
          </button>

          {/* Content */}
          <button
            type="button"
            onClick={() => handleTabChange("content")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors cursor-pointer text-left ${
              activeMenu === "content"
                ? "bg-primary text-white font-semibold shadow-xs"
                : "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
            }`}
          >
            <FileText className="w-4 h-4 shrink-0" />
            <span>Notices &amp; Content</span>
          </button>
        </nav>

        {/* Sidebar Footer */}
        <div className="p-3 border-t border-gray-800 space-y-1 text-xs">
          <Link href="/"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Public Site</span>
          </Link>
          <form action={logoutAction}>
            <button
              type="submit"
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-red-400 hover:bg-red-950/40 cursor-pointer text-left"
            >
              <LogOut className="w-4 h-4" />
              <span>Log Out</span>
            </button>
          </form>
        </div>
      </aside>

      {/* Admin Content Area */}
      <div className="flex-1 lg:pl-64 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#ebdccf] px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md"
              aria-label="Open sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500 font-medium">
              <Link href="/" className="hover:text-gray-900">
                ITET
              </Link>
              <ChevronRight className="w-3 h-3 text-gray-400" />
              <span>Admin Console</span>
              <ChevronRight className="w-3 h-3 text-gray-400" />
              <span className="text-gray-900 font-semibold">
                {tabLabels[activeMenu]}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 font-medium hidden sm:inline-block">
              {pendingCount} Applications Awaiting Review
            </span>
          </div>
        </header>

        {/* Main Content View Container */}
        <main className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl w-full mx-auto">
          {/* Quick Metrics Bar - Live from SQLite */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl border border-[#ebdccf] shadow-xs">
              <p className="text-xs text-gray-500 font-medium">Verified Members</p>
              <p className="text-xl font-bold font-manuale text-gray-900 mt-1">
                {verifiedMembersCount}
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-amber-200 bg-amber-50/30 shadow-xs">
              <p className="text-xs text-amber-700 font-medium">Pending Approvals</p>
              <p className="text-xl font-bold font-manuale text-primary mt-1">
                {pendingCount}
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[#ebdccf] shadow-xs">
              <p className="text-xs text-gray-500 font-medium">Active Banner Ads</p>
              <p className="text-xl font-bold font-manuale text-gray-900 mt-1">
                {activeAdsCount}
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[#ebdccf] shadow-xs">
              <p className="text-xs text-gray-500 font-medium">Upcoming Events</p>
              <p className="text-xl font-bold font-manuale text-gray-900 mt-1">
                {upcomingEventsCount}
              </p>
            </div>
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeMenu === "overview" && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-[#ebdccf] p-6 sm:p-8 shadow-xs">
                <div className="flex items-center justify-between pb-5 border-b border-gray-100">
                  <div>
                    <h2 className="text-xl font-bold font-manuale text-gray-900">
                      Central Secretariat Control Summary
                    </h2>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Operational overview of membership verification, portal health, and pending workflows
                    </p>
                  </div>
                  <button
                    onClick={() => handleTabChange("approvals")}
                    className="px-3.5 py-1.5 rounded-lg bg-primary hover:bg-[#d04e0a] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                  >
                    View Approvals ({pendingCount})
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-6 text-xs">
                  <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#f0e3d5] space-y-2">
                    <div className="flex items-center gap-2 text-primary font-bold">
                      <FileCheck className="w-4 h-4" />
                      <span>Pending Verification Queue</span>
                    </div>
                    <p className="text-gray-600">
                      {pendingCount} membership submissions currently in SQLite awaiting academic credential and zoning clearance.
                    </p>
                    <button
                      onClick={() => handleTabChange("approvals")}
                      className="text-primary font-semibold hover:underline block pt-1 cursor-pointer"
                    >
                      Process Approvals &rarr;
                    </button>
                  </div>

                  <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#f0e3d5] space-y-2">
                    <div className="flex items-center gap-2 text-blue-700 font-bold">
                      <Users className="w-4 h-4" />
                      <span>Member Enrollment</span>
                    </div>
                    <p className="text-gray-600">
                      {verifiedMembersCount} verified textile engineers active across Bangladesh chapters.
                    </p>
                    <button
                      onClick={() => handleTabChange("users")}
                      className="text-blue-700 font-semibold hover:underline block pt-1 cursor-pointer"
                    >
                      Open User Directory &rarr;
                    </button>
                  </div>

                  <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#f0e3d5] space-y-2">
                    <div className="flex items-center gap-2 text-emerald-700 font-bold">
                      <Megaphone className="w-4 h-4" />
                      <span>Corporate Advertising Slots</span>
                    </div>
                    <p className="text-gray-600">
                      {activeAdsCount} digital corporate ad slot(s) currently active in database.
                    </p>
                    <button
                      onClick={() => handleTabChange("ads")}
                      className="text-emerald-700 font-semibold hover:underline block pt-1 cursor-pointer"
                    >
                      Manage Placements &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: MEMBERSHIP APPROVALS (Live from SQLite) */}
          {activeMenu === "approvals" && (
            <div className="bg-white rounded-2xl border border-[#ebdccf] overflow-hidden shadow-xs space-y-4">
              <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold font-manuale text-gray-900">
                    Pending Membership Applications
                  </h2>
                  <p className="text-xs text-gray-500">
                    Review submitted graduation credentials, zones, and approve membership IDs ({filteredApprovals.length} records in queue)
                  </p>
                </div>

                {/* Filters */}
                <div className="flex items-center gap-2.5">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search applicant or ID..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-8 pr-3 py-1.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                    />
                  </div>

                  <select
                    value={selectedZoneFilter}
                    onChange={(e) => setSelectedZoneFilter(e.target.value)}
                    className="px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-primary"
                  >
                    <option value="All Zones">All Zones</option>
                    <option value="Dhaka North">Dhaka North</option>
                    <option value="Dhaka South">Dhaka South</option>
                    <option value="Gazipur">Gazipur</option>
                    <option value="Narayanganj">Narayanganj</option>
                  </select>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#faf5ef] border-b border-[#ebdccf] text-gray-700 font-semibold uppercase tracking-wider text-[11px]">
                    <tr>
                      <th className="py-3 px-4">Applicant</th>
                      <th className="py-3 px-4">Degree &amp; Institute</th>
                      <th className="py-3 px-4">Batch &amp; Session</th>
                      <th className="py-3 px-4">Present Address Zone</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredApprovals.length > 0 ? (
                      filteredApprovals.map((item) => (
                        <tr
                          key={item.id}
                          className="hover:bg-gray-50/70 transition-colors"
                        >
                          <td className="py-3.5 px-4">
                            <p className="font-bold text-gray-900 text-sm">
                              {item.applicantName}
                            </p>
                            <p className="text-[11px] text-gray-500 font-mono">
                              {item.appNo} • {item.phone}
                            </p>
                          </td>
                          <td className="py-3.5 px-4">
                            <p className="font-medium text-gray-800">
                              {item.institute}
                            </p>
                            <p className="text-[11px] text-gray-400">
                              {item.email}
                            </p>
                          </td>
                          <td className="py-3.5 px-4">
                            <p className="font-semibold text-gray-800">
                              {item.batch}
                            </p>
                            <p className="text-[11px] text-[#e8590c]">
                              Session: {item.admissionSession}
                            </p>
                          </td>
                          <td className="py-3.5 px-4 text-gray-700">
                            {item.presentAddressZone}
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-gray-100 text-gray-700 border border-gray-200">
                              {item.appliedCategory}
                            </span>
                          </td>
                          <td className="py-3.5 px-4">
                            <span
                              className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                                item.status === "Approved"
                                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                  : item.status === "Rejected"
                                  ? "bg-red-50 text-red-700 border border-red-200"
                                  : "bg-amber-50 text-amber-700 border border-amber-200"
                              }`}
                            >
                              {item.status === "Approved" && (
                                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                              )}
                              {item.status === "Rejected" && (
                                <XCircle className="w-3 h-3 text-red-600" />
                              )}
                              {item.status === "Pending" && (
                                <Clock className="w-3 h-3 text-amber-600" />
                              )}
                              {item.status}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                onClick={() => setPreviewItem(item)}
                                className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
                                title="Preview Credentials & Documents"
                              >
                                <Eye className="w-4 h-4" />
                              </button>

                              {item.status === "Pending" && (
                                <form onSubmit={(e) => e.preventDefault()}>
                                  <input type="hidden" name="memberProfileId" value={item.id} />
                                  <button
                                    type="submit"
                                    name="intent"
                                    value="approve"
                                    className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-[11px] font-medium transition-colors cursor-pointer"
                                  >
                                    Approve
                                  </button>
                                  <button
                                    type="submit"
                                    name="intent"
                                    value="reject"
                                    className="px-2.5 py-1 bg-red-100 hover:bg-red-200 text-red-700 rounded text-[11px] font-medium transition-colors cursor-pointer"
                                  >
                                    Reject
                                  </button>
                                </form>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={7} className="py-8 text-center text-gray-500">
                          No pending applications matching criteria.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: USER MANAGEMENT PLACEHOLDER */}
          {activeMenu === "users" && (
            <div className="bg-white rounded-2xl border border-[#ebdccf] p-8 sm:p-12 text-center shadow-xs space-y-4">
              <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mx-auto">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-manuale text-gray-900">
                  User Management Module
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 max-w-lg mx-auto mt-1">
                  Manage {verifiedMembersCount} verified members, role assignments, student status verifications, and executive committee credentials.
                </p>
              </div>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                  <span>Module Under Construction • Coming Soon</span>
                </span>
              </div>
            </div>
          )}

          {/* TAB 4: EVENTS PLACEHOLDER */}
          {activeMenu === "events" && (
            <div className="bg-white rounded-2xl border border-[#ebdccf] p-8 sm:p-12 text-center shadow-xs space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                <Calendar className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-manuale text-gray-900">
                  Events &amp; Registrations Management
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 max-w-lg mx-auto mt-1">
                  Create national conventions, track ticket allocations, manage delegate check-ins, and issue automated digital attendance slips.
                </p>
              </div>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                  <span>Module Under Construction • Coming Soon</span>
                </span>
              </div>
            </div>
          )}

          {/* TAB 5: ADS PLACEHOLDER */}
          {activeMenu === "ads" && (
            <div className="bg-white rounded-2xl border border-[#ebdccf] p-8 sm:p-12 text-center shadow-xs space-y-4">
              <div className="w-16 h-16 rounded-full bg-orange-50 border border-orange-200 text-primary flex items-center justify-center mx-auto">
                <Megaphone className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-manuale text-gray-900">
                  Ads &amp; Placement Management
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 max-w-lg mx-auto mt-1">
                  Monitor corporate banners across ITET properties, schedule flight dates, review sponsor agreements, and track click analytics.
                </p>
              </div>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                  <span>Module Under Construction • Coming Soon</span>
                </span>
              </div>
            </div>
          )}

          {/* TAB 6: CONTENT PLACEHOLDER */}
          {activeMenu === "content" && (
            <div className="bg-white rounded-2xl border border-[#ebdccf] p-8 sm:p-12 text-center shadow-xs space-y-4">
              <div className="w-16 h-16 rounded-full bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center mx-auto">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-manuale text-gray-900">
                  Notices &amp; Content Management
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 max-w-lg mx-auto mt-1">
                  Draft press releases, publish urgent council notices, upload official gazettes, and manage technical research publications.
                </p>
              </div>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                  <span>Module Under Construction • Coming Soon</span>
                </span>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* DOCUMENT PREVIEW MODAL */}
      {previewItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-2xl border border-[#ebdccf] w-full max-w-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="p-4 border-b border-[#ebdccf] flex items-center justify-between bg-[#faf5ef]">
              <div>
                <h3 className="font-bold text-sm text-gray-900 font-manuale">
                  Application Credentials Review
                </h3>
                <p className="text-[11px] text-gray-500 font-mono">
                  {previewItem.appNo} • {previewItem.applicantName}
                </p>
              </div>
              <button
                onClick={() => setPreviewItem(null)}
                className="p-1 text-gray-400 hover:text-gray-700 rounded hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 space-y-3 text-xs">
              <div className="p-3 rounded-lg bg-gray-50 border border-gray-100 space-y-1.5">
                <p className="text-gray-500">Graduating Alma Mater</p>
                <p className="font-semibold text-gray-900">
                  {previewItem.institute} ({previewItem.batch})
                </p>
                <p className="text-gray-500">Admission Session</p>
                <p className="font-bold text-[#e8590c]">
                  {previewItem.admissionSession}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-gray-50 border border-gray-100 space-y-1.5">
                <p className="text-gray-500">Geographic Address Zone</p>
                <p className="font-semibold text-[#1a2b49]">
                  {previewItem.presentAddressZone}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-amber-50/50 border border-amber-200 space-y-1">
                <p className="text-gray-500">Attached Verification Document</p>
                <p className="font-semibold text-gray-800">
                  {previewItem.certUrl}
                </p>
                <span className="inline-block text-[10px] text-emerald-700 font-medium">
                  • Verified by Registrar's Seal
                </span>
              </div>
            </div>

            <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center justify-end gap-2 text-xs">
              <button
                onClick={() => setPreviewItem(null)}
                className="px-3 py-1.5 border border-gray-200 bg-white rounded-lg text-gray-700 cursor-pointer"
              >
                Close
              </button>
              {previewItem.status === "Pending" && (
                <form
                  action={async (formData) => {
                    await handleMemberApprovalAction(formData);
                    setPreviewItem(null);
                  }}
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="hidden"
                    name="memberProfileId"
                    value={previewItem.id}
                  />
                  <button
                    type="submit"
                    name="intent"
                    value="reject"
                    className="px-3 py-1.5 bg-red-100 hover:bg-red-200 text-red-700 font-medium rounded-lg cursor-pointer"
                  >
                    Reject Application
                  </button>
                  <button
                    type="submit"
                    name="intent"
                    value="approve"
                    className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-xs cursor-pointer"
                  >
                    Approve Membership
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
