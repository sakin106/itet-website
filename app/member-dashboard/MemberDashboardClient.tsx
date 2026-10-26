"use client";

import React, { useState } from "react";
import Link from "next/link";
import { logoutAction } from "@/app/actions";


import {
  User,
  Users,
  Download,
  Calendar,
  MessageSquare,
  LogOut,
  ArrowLeft,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Edit3,
  X,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  FileText,
  ChevronRight,
  Menu,
  Eye,
  EyeOff,
  Building2,
  ExternalLink,
  CreditCard,
  Sparkles,
} from "lucide-react";

type MemberTab = "overview" | "directory" | "downloads" | "events" | "forum" | "dues";

export interface MemberDashboardClientProps {
  currentUser?: {
    email: string;
    memberProfile?: {
      fullName: string;
      memberId: string;
      batch: string;
      admissionSession: string;
      passingYear?: string | null;
      institute: string;
      degree?: string | null;
      presentAddressZone: string;
      permanentDistrict?: string | null;
      bloodGroup?: string | null;
      iebNo?: string | null;
      company?: string | null;
      designation?: string | null;
      bio?: string | null;
      membershipType: string;
      approvalStatus: string;
      phone?: string | null;
      avatarUrl?: string | null;
    } | null;
    eventRegistrations?: Array<{
      id: string;
      ticketNumber: string;
      paymentStatus: string;
      paymentAmount: number;
      event: {
        title: string;
        venue: string;
        location?: string | null;
        startDate: string | Date;
      };
    }>;
  } | null;
  directoryProfiles?: Array<{
    memberId: string;
    fullName: string;
    batch: string;
    admissionSession: string;
    institute: string;
    designation?: string | null;
    company?: string | null;
    presentAddressZone: string;
    membershipType: string;
    approvalStatus: string;
  }>;
  forumPosts?: Array<{
    id: string;
    title: string;
    category: string;
    content: string;
    createdAt: string | Date;
    likesCount: number;
    replies: any[];
    user?: {
      email?: string | null;
      memberProfile?: {
        fullName?: string | null;
        batch?: string | null;
      } | null;
    } | null;
  }>;
}

export function MemberDashboardClient({
  currentUser,
  directoryProfiles = [],
  forumPosts = [],
}: MemberDashboardClientProps) {

  const [activeTab, setActiveTab] = useState<MemberTab>("overview");

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [showMaskedContact, setShowMaskedContact] = useState(false);

  // Initialize profile with live Prisma data
  const memberData = currentUser?.memberProfile;
  const initialProfile = {
    fullName: memberData?.fullName || "Engr. Tanvir Ahmed",
    memberId: memberData?.memberId || "LM-4082",
    membershipType:
      memberData?.membershipType === "LIFE"
        ? "Life Member"
        : memberData?.membershipType === "GENERAL"
        ? "General Member"
        : memberData?.membershipType === "STUDENT"
        ? "Student Member"
        : "Member",
    status:
      memberData?.approvalStatus === "APPROVED"
        ? "Active & Verified"
        : memberData?.approvalStatus || "Active & Verified",
    batch: memberData?.batch || "34th Batch",
    admissionSession: memberData?.admissionSession || "2010-2011",
    passingYear: memberData?.passingYear || "2015",
    institute: memberData?.institute || "Bangladesh University of Textiles (BUTEX)",
    designation: memberData?.designation || "Assistant General Manager (R&D / Washing)",
    company: memberData?.company || "Square Fashions Ltd.",
    presentAddressZone: memberData?.presentAddressZone || "Dhaka North (Uttara Sector 11)",
    permanentDistrict: memberData?.permanentDistrict || "Cumilla",
    email: currentUser?.email || "member@itetbd.net",
    mobile: memberData?.phone || "+880 1715-998822",
    bloodGroup: memberData?.bloodGroup || "B+",
    iebNo: memberData?.iebNo || "M-38291",
  };

  const [profile, setProfile] = useState(initialProfile);
  const [editForm, setEditForm] = useState(initialProfile);

  // Member Directory state populated from Prisma
  const [directorySearch, setDirectorySearch] = useState("");
  const [selectedZone, setSelectedZone] = useState("All Zones");
  const [selectedBatch, setSelectedBatch] = useState("All Batches");

  const directoryMembers = directoryProfiles.map((p) => ({
    id: p.memberId,
    name: p.fullName,
    batch: p.batch,
    session: p.admissionSession,
    institute: p.institute,
    designation: p.designation || "Executive Engineer",
    company: p.company || "Textile Industry",
    zone: p.presentAddressZone,
    type: p.membershipType === "LIFE" ? "Life Member" : `${p.membershipType} Member`,
    status: p.approvalStatus === "APPROVED" ? "Verified" : p.approvalStatus,
  }));

  const filteredMembers = directoryMembers.filter((m) => {
    const matchesSearch =
      m.name.toLowerCase().includes(directorySearch.toLowerCase()) ||
      m.id.toLowerCase().includes(directorySearch.toLowerCase()) ||
      m.company.toLowerCase().includes(directorySearch.toLowerCase()) ||
      m.institute.toLowerCase().includes(directorySearch.toLowerCase());
    const matchesZone =
      selectedZone === "All Zones" || m.zone.includes(selectedZone);
    const matchesBatch =
      selectedBatch === "All Batches" || m.batch.includes(selectedBatch);
    return matchesSearch && matchesZone && matchesBatch;
  });

  const handleTabChange = (tab: MemberTab) => {
    setActiveTab(tab);
    setSidebarOpen(false);
  };

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile({ ...editForm });
    setIsEditModalOpen(false);
  };

  const tabLabels: Record<MemberTab, string> = {
    overview: "Profile Overview",
    directory: "Member Directory",
    downloads: "Downloads & IDs",
    events: "Event Registrations",
    forum: "Q&A Community Forum",
    dues: "Dues & Welfare",
  };

  const registrations = currentUser?.eventRegistrations || [];

  return (
    <div className="min-h-screen bg-[#fcfaf7] text-gray-900 font-poppins selection:bg-primary selection:text-white flex">
      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 lg:hidden"
        />
      )}

      {/* Sidebar Navigation */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 bg-white border-r border-[#ebdccf] flex flex-col transition-transform duration-300 ease-in-out w-64 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Brand */}
        <div className="p-4 border-b border-[#ebdccf] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/assets/logo.jpg"
              alt="ITET Logo"
              className="w-9 h-9 object-contain rounded"
            />
            <div>
              <h2 className="font-bold text-sm text-gray-900 font-manuale leading-tight">
                ITET Bangladesh
              </h2>
              <p className="text-[11px] text-[#e8590c] font-semibold">
                Member Portal
              </p>
            </div>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1.5 text-gray-400 hover:text-gray-700"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Member Profile Snip */}
        <div className="p-4 bg-[#faf5ef] border-b border-[#ebdccf]/70">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm">
              {profile.fullName
                .split(" ")
                .filter((p) => !p.startsWith("Engr."))
                .map((n) => n[0])
                .slice(0, 2)
                .join("") || "TA"}
            </div>
            <div className="min-w-0">
              <h3 className="text-xs font-bold text-gray-900 truncate">
                {profile.fullName}
              </h3>
              <p className="text-[11px] text-gray-600 font-mono">
                {profile.memberId}
              </p>
              <span className="inline-flex items-center gap-1 text-[10px] text-emerald-700 font-medium">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                Verified Member
              </span>
            </div>
          </div>
        </div>

        {/* Sidebar Nav Items */}
        <nav className="flex-1 p-3 space-y-1.5 overflow-y-auto text-sm">
          {/* Profile Overview */}
          <button
            type="button"
            onClick={() => handleTabChange("overview")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors cursor-pointer text-left ${
              activeTab === "overview"
                ? "bg-primary text-white font-semibold shadow-xs"
                : "text-gray-700 hover:bg-[#faf5ef] hover:text-gray-900"
            }`}
          >
            <User className="w-4 h-4 shrink-0" />
            <span>Profile Overview</span>
          </button>

          {/* Member Directory */}
          <button
            type="button"
            onClick={() => handleTabChange("directory")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors cursor-pointer text-left ${
              activeTab === "directory"
                ? "bg-primary text-white font-semibold shadow-xs"
                : "text-gray-700 hover:bg-[#faf5ef] hover:text-gray-900"
            }`}
          >
            <Users className="w-4 h-4 shrink-0" />
            <span>Member Directory</span>
          </button>

          {/* Downloads */}
          <button
            type="button"
            onClick={() => handleTabChange("downloads")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors cursor-pointer text-left ${
              activeTab === "downloads"
                ? "bg-primary text-white font-semibold shadow-xs"
                : "text-gray-700 hover:bg-[#faf5ef] hover:text-gray-900"
            }`}
          >
            <Download className="w-4 h-4 shrink-0" />
            <span>Downloads &amp; IDs</span>
          </button>

          {/* Event Registrations */}
          <button
            type="button"
            onClick={() => handleTabChange("events")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors cursor-pointer text-left ${
              activeTab === "events"
                ? "bg-primary text-white font-semibold shadow-xs"
                : "text-gray-700 hover:bg-[#faf5ef] hover:text-gray-900"
            }`}
          >
            <Calendar className="w-4 h-4 shrink-0" />
            <span>Event Registrations</span>
          </button>

          {/* Community Forum Tab */}
          <button
            type="button"
            onClick={() => handleTabChange("forum")}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg font-medium transition-colors cursor-pointer text-left ${
              activeTab === "forum"
                ? "bg-primary text-white font-semibold shadow-xs"
                : "text-gray-700 hover:bg-[#faf5ef] hover:text-gray-900"
            }`}
          >
            <div className="flex items-center gap-3">
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span>Q&amp;A Forum</span>
            </div>
            <span
              className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                activeTab === "forum"
                  ? "bg-white/20 text-white"
                  : "bg-primary/10 text-primary"
              }`}
            >
              Active
            </span>
          </button>

          {/* Dues & Welfare Tab */}
          <button
            type="button"
            onClick={() => handleTabChange("dues")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors cursor-pointer text-left ${
              activeTab === "dues"
                ? "bg-primary text-white font-semibold shadow-xs"
                : "text-gray-700 hover:bg-[#faf5ef] hover:text-gray-900"
            }`}
          >
            <CreditCard className="w-4 h-4 shrink-0" />
            <span>Dues &amp; Welfare</span>
          </button>
        </nav>

        {/* Sidebar Footer */}
        <div className="p-3 border-t border-[#ebdccf] space-y-1">
          <Link href="/"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Public Site</span>
          </Link>
          <form action={logoutAction}>
            <button
              type="submit"
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-red-600 hover:bg-red-50 cursor-pointer text-left"
            >
              <LogOut className="w-4 h-4" />
              <span>Log Out</span>
            </button>
          </form>
        </div>
      </aside>

      {/* Main Container */}
      <div className="flex-1 lg:pl-64 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#ebdccf] px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500 font-medium">
              <Link href="/" className="hover:text-gray-900">
                ITET
              </Link>
              <ChevronRight className="w-3 h-3 text-gray-400" />
              <span>Member Portal</span>
              <ChevronRight className="w-3 h-3 text-gray-400" />
              <span className="text-gray-900 font-semibold capitalize">
                {tabLabels[activeTab]}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Session Validated</span>
            </span>

            <button
              onClick={() => {
                setEditForm({ ...profile });
                setIsEditModalOpen(true);
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary hover:bg-[#d04e0a] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit Profile</span>
            </button>
          </div>
        </header>

        {/* Tab Views */}
        <main className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl w-full mx-auto">
          {/* TAB 1: Profile Overview */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Profile Summary Card */}
              <div className="bg-white rounded-2xl border border-[#ebdccf] p-6 sm:p-8 shadow-xs">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-gray-100">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                    <div className="relative">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-[#1a2b49] to-[#2c4777] text-white flex items-center justify-center font-bold text-2xl shadow-inner border-2 border-white">
                        {profile.fullName
                          .split(" ")
                          .filter((p) => !p.startsWith("Engr."))
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("") || "TA"}
                      </div>
                      <span className="absolute -bottom-1.5 -right-1.5 bg-emerald-500 text-white p-1 rounded-full border-2 border-white">
                        <CheckCircle2 className="w-4 h-4" />
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h1 className="text-xl sm:text-2xl font-bold font-manuale text-gray-900">
                          {profile.fullName}
                        </h1>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                          {profile.membershipType}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 font-medium mt-1">
                        {profile.designation} • {profile.company}
                      </p>
                      <p className="text-xs text-gray-400 font-mono mt-0.5">
                        Member ID: {profile.memberId} | IEB No: {profile.iebNo}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 w-full sm:w-auto">
                    <button
                      onClick={() => setShowMaskedContact(!showMaskedContact)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 text-xs font-medium text-gray-700 transition-colors w-full sm:w-auto justify-center cursor-pointer"
                    >
                      {showMaskedContact ? (
                        <>
                          <EyeOff className="w-3.5 h-3.5 text-gray-500" />
                          <span>Mask Contacts</span>
                        </>
                      ) : (
                        <>
                          <Eye className="w-3.5 h-3.5 text-gray-500" />
                          <span>Reveal Contacts</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Profile Detail Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
                  {/* Academic Details */}
                  <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#f0e3d5] space-y-2.5">
                    <div className="flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-wider">
                      <GraduationCap className="w-4 h-4" />
                      <span>Academic Background</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Graduating Alma Mater</p>
                      <p className="text-sm font-semibold text-gray-900">
                        {profile.institute}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#ebdccf]/50">
                      <div>
                        <p className="text-[11px] text-gray-500">Batch</p>
                        <p className="text-xs font-bold text-gray-800">
                          {profile.batch}
                        </p>
                      </div>
                      <div>
                        {/* Phase 2 updated field */}
                        <p className="text-[11px] text-gray-500">
                          Admission Session
                        </p>
                        <p className="text-xs font-bold text-[#e8590c]">
                          {profile.admissionSession}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Location & Zoning */}
                  <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#f0e3d5] space-y-2.5">
                    <div className="flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-wider">
                      <MapPin className="w-4 h-4" />
                      <span>Geographic Zoning</span>
                    </div>
                    <div>
                      {/* Phase 2 updated field */}
                      <p className="text-xs text-gray-500">Present Address Zone</p>
                      <p className="text-sm font-semibold text-[#1a2b49]">
                        {profile.presentAddressZone}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#ebdccf]/50">
                      <div>
                        <p className="text-[11px] text-gray-500">Home District</p>
                        <p className="text-xs font-bold text-gray-800">
                          {profile.permanentDistrict}
                        </p>
                      </div>
                      <div>
                        <p className="text-[11px] text-gray-500">Blood Group</p>
                        <p className="text-xs font-bold text-red-600">
                          {profile.bloodGroup}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Professional & Masked Contacts */}
                  <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#f0e3d5] space-y-2.5">
                    <div className="flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-wider">
                      <Briefcase className="w-4 h-4" />
                      <span>Contact &amp; Employment</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Official Email</p>
                      <p className="text-sm font-semibold text-gray-900 font-mono">
                        {showMaskedContact
                          ? profile.email
                          : profile.email.replace(/(.{2})(.*)(?=@)/, "$1****")}
                      </p>
                    </div>
                    <div className="pt-1 border-t border-[#ebdccf]/50">
                      <p className="text-xs text-gray-500">Registered Mobile</p>
                      <p className="text-sm font-semibold text-gray-900 font-mono">
                        {showMaskedContact
                          ? profile.mobile
                          : profile.mobile.replace(/(\+880 \d{4}-)\d{3}(\d{3})/, "$1***$2")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions / Status Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl border border-[#ebdccf] p-5 flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center text-primary">
                      <Download className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900">
                        Official Membership ID Card
                      </h4>
                      <p className="text-xs text-gray-500">
                        High resolution digital card with verification QR
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleTabChange("downloads")}
                    className="text-xs font-semibold text-primary hover:underline cursor-pointer"
                  >
                    View
                  </button>
                </div>

                <div className="bg-white rounded-xl border border-[#ebdccf] p-5 flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900">
                        Community Forum &amp; Discussions
                      </h4>
                      <p className="text-xs text-gray-500">
                        Post technical textile queries and connect with alumni
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleTabChange("forum")}
                    className="text-xs font-semibold text-sky-600 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Open Forum</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Member Directory (Live from SQLite) */}
          {activeTab === "directory" && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-[#ebdccf] p-6 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-gray-100">
                  <div>
                    <h2 className="text-xl font-bold font-manuale text-gray-900">
                      Member Directory
                    </h2>
                    <p className="text-xs text-gray-500">
                      Search and connect with verified ITET engineers across all zones (Live from SQLite)
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full self-start sm:self-auto">
                    {filteredMembers.length} Verified Member{filteredMembers.length === 1 ? "" : "s"}
                  </span>
                </div>

                {/* Filter Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5">
                  <div className="relative">
                    <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search by name, ID, or company..."
                      value={directorySearch}
                      onChange={(e) => setDirectorySearch(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                    />
                  </div>

                  <select
                    value={selectedZone}
                    onChange={(e) => setSelectedZone(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-primary"
                  >
                    <option value="All Zones">All Address Zones</option>
                    <option value="Dhaka North">Dhaka North (Uttara/Mirpur)</option>
                    <option value="Dhaka South">Dhaka South (Gulshan/Motijheel)</option>
                    <option value="Gazipur">Gazipur Industrial Zone</option>
                    <option value="Narayanganj">Narayanganj Zone</option>
                    <option value="Chattogram">Chattogram Port Hub</option>
                  </select>

                  <select
                    value={selectedBatch}
                    onChange={(e) => setSelectedBatch(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-primary"
                  >
                    <option value="All Batches">All Batches</option>
                    <option value="22nd">22nd Batch</option>
                    <option value="24th">24th Batch</option>
                    <option value="30th">30th Batch</option>
                    <option value="34th">34th Batch</option>
                    <option value="38th">38th Batch</option>
                    <option value="41st">41st Batch</option>
                  </select>
                </div>
              </div>

              {/* Directory Table */}
              <div className="bg-white rounded-2xl border border-[#ebdccf] overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#faf5ef] border-b border-[#ebdccf] text-gray-700 font-semibold uppercase tracking-wider text-[11px]">
                      <tr>
                        <th className="py-3 px-4">Member Info</th>
                        <th className="py-3 px-4">Batch &amp; Session</th>
                        <th className="py-3 px-4">Organization &amp; Role</th>
                        <th className="py-3 px-4">Address Zone</th>
                        <th className="py-3 px-4">Membership</th>
                        <th className="py-3 px-4 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {filteredMembers.map((m) => (
                        <tr
                          key={m.id}
                          className="hover:bg-gray-50/70 transition-colors"
                        >
                          <td className="py-3.5 px-4">
                            <p className="font-bold text-gray-900 text-sm">
                              {m.name}
                            </p>
                            <p className="text-[11px] text-gray-500 font-mono">
                              {m.id} • {m.institute}
                            </p>
                          </td>
                          <td className="py-3.5 px-4">
                            <p className="font-semibold text-gray-800">
                              {m.batch}
                            </p>
                            <p className="text-[11px] text-[#e8590c]">
                              Session: {m.session}
                            </p>
                          </td>
                          <td className="py-3.5 px-4">
                            <p className="font-medium text-gray-900">
                              {m.designation}
                            </p>
                            <p className="text-[11px] text-gray-500">
                              {m.company}
                            </p>
                          </td>
                          <td className="py-3.5 px-4 text-gray-700">
                            {m.zone}
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-gray-100 text-gray-700 border border-gray-200">
                              {m.type}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                              {m.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Downloads & Certificates */}
          {activeTab === "downloads" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-[#ebdccf] p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center text-primary">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-gray-900 font-manuale">
                      Digital Member ID Card
                    </h3>
                    <p className="text-xs text-gray-500">
                      Standard verified ITET electronic card (PDF format)
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#faf5ef] border border-[#ebdccf]/60 text-xs space-y-2">
                  <p className="font-medium text-gray-800">
                    Cardholder: {profile.fullName}
                  </p>
                  <p className="text-gray-600">ID: {profile.memberId}</p>
                  <p className="text-gray-600">
                    Zone: {profile.presentAddressZone}
                  </p>
                  <p className="text-emerald-700 font-semibold">
                    Status: Validated for 2026-2027
                  </p>
                </div>
                <button
                  onClick={() => alert(`Downloading Digital Member ID Card PDF for ${profile.memberId}...`)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary hover:bg-[#d04e0a] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Digital ID (PDF)</span>
                </button>
              </div>

              <div className="bg-white rounded-2xl border border-[#ebdccf] p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-gray-900 font-manuale">
                      Certificate of Membership
                    </h3>
                    <p className="text-xs text-gray-500">
                      Official parchment signed by President &amp; Secretary General
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#faf5ef] border border-[#ebdccf]/60 text-xs space-y-2">
                  <p className="font-medium text-gray-800">
                    Category: {profile.membershipType}
                  </p>
                  <p className="text-gray-600">
                    Institution: Institution of Textile Engineers &amp; Technologists
                  </p>
                  <p className="text-gray-600">Batch: {profile.batch}</p>
                </div>
                <button
                  onClick={() => alert(`Downloading ${profile.membershipType} Certificate...`)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-50 text-gray-800 text-xs font-semibold transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 text-gray-600" />
                  <span>Download Certificate</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: Event Registrations (Live from SQLite) */}
          {activeTab === "events" && (
            <div className="bg-white rounded-2xl border border-[#ebdccf] p-6 space-y-4 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <h3 className="font-bold text-lg font-manuale text-gray-900">
                  Registered Events &amp; Conventions
                </h3>
                <span className="text-xs text-gray-500">
                  {registrations.length} Active Pass{registrations.length === 1 ? "" : "es"}
                </span>
              </div>
              <div className="divide-y divide-gray-100 text-xs">
                {registrations.length > 0 ? (
                  registrations.map((reg) => (
                    <div
                      key={reg.id}
                      className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div>
                        <h4 className="font-bold text-sm text-gray-900">
                          {reg.event.title}
                        </h4>
                        <p className="text-gray-500 mt-0.5">
                          Date: {new Date(reg.event.startDate).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })} • {reg.event.venue}
                        </p>
                        <span className="inline-block mt-1 text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          {reg.paymentStatus === "PAID" ? "Registration Confirmed" : reg.paymentStatus} • Ticket #{reg.ticketNumber}
                        </span>
                      </div>
                      <button
                        onClick={() => alert(`Downloading pass for ${reg.ticketNumber}...`)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-medium self-start sm:self-auto cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5 text-gray-500" />
                        <span>Delegate Pass</span>
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-gray-500 py-4">No active event registrations found.</p>
                )}
              </div>
            </div>
          )}

          {/* TAB 5: Q&A FORUM PREVIEW TAB (Live from SQLite) */}
          {activeTab === "forum" && (
            <div className="bg-white rounded-2xl border border-[#ebdccf] p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-gray-100">
                <div>
                  <h2 className="text-xl font-bold font-manuale text-gray-900">
                    ITET Technical &amp; Community Forum
                  </h2>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Peer-to-peer technical exchange, yarn &amp; processing parameters, and career guidance
                  </p>
                </div>
                <Link href="/member-dashboard/forum"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary hover:bg-[#d04e0a] text-white text-xs font-semibold shadow-xs transition-colors self-start sm:self-auto"
                >
                  <span>Launch Dedicated Forum</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Live Seeded Forum Posts */}
              <div className="space-y-4">
                {forumPosts.map((post) => (
                  <div
                    key={post.id}
                    className="p-4 rounded-xl bg-[#faf8f5] border border-[#f0e3d5] space-y-2 hover:border-primary/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="text-[10px] text-gray-500">
                        {post.replies.length} Peer Repl{post.replies.length === 1 ? "y" : "ies"}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-gray-900">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-2">
                      {post.content}
                    </p>
                    <div className="pt-2 flex items-center justify-between text-[11px] text-gray-500">
                      <span>
                        Posted by {post.user?.memberProfile?.fullName || post.user?.email || "ITET Member"} (
                        {post.user?.memberProfile?.batch || "Verified Member"})
                      </span>
                      <Link href="/member-dashboard/forum"
                        className="text-xs font-semibold text-primary hover:underline"
                      >
                        Join Discussion &rarr;
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: DUES & WELFARE PLACEHOLDER */}
          {activeTab === "dues" && (
            <div className="bg-white rounded-2xl border border-[#ebdccf] p-8 sm:p-12 text-center shadow-xs space-y-4">
              <div className="w-16 h-16 rounded-full bg-orange-50 border border-orange-200 text-primary flex items-center justify-center mx-auto">
                <CreditCard className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-manuale text-gray-900">
                  Membership Dues &amp; Welfare Fund
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 max-w-lg mx-auto mt-1">
                  Online subscription renewals, Welfare Trust death benefit contributions, and downloadable e-receipts.
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

      {/* EDIT PROFILE MODAL (with Phase 2 Fields) */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs overflow-y-auto">
          <div className="bg-white rounded-2xl border border-[#ebdccf] w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200 my-8">
            <div className="p-5 border-b border-[#ebdccf] flex items-center justify-between bg-[#faf5ef]">
              <div>
                <h3 className="font-bold text-base text-gray-900 font-manuale">
                  Edit Member Profile
                </h3>
                <p className="text-xs text-gray-500">
                  Update your contact, location zoning, and academic session
                </p>
              </div>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="p-1 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={handleProfileSave}
              className="p-6 space-y-4 overflow-y-auto flex-1 text-xs"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={editForm.fullName}
                    onChange={(e) =>
                      setEditForm({ ...editForm, fullName: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary text-xs"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-1">
                    Designation
                  </label>
                  <input
                    type="text"
                    value={editForm.designation}
                    onChange={(e) =>
                      setEditForm({ ...editForm, designation: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary text-xs"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-1">
                    Organization / Company
                  </label>
                  <input
                    type="text"
                    value={editForm.company}
                    onChange={(e) =>
                      setEditForm({ ...editForm, company: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary text-xs"
                    required
                  />
                </div>

                {/* Phase 2 Requirement: Present Address Zone */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">
                    Present Address Zone <span className="text-primary">*</span>
                  </label>
                  <select
                    value={editForm.presentAddressZone}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        presentAddressZone: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary bg-white text-xs font-medium"
                    required
                  >
                    <option value="Dhaka North (Uttara Sector 11)">
                      Dhaka North (Uttara Sector 11)
                    </option>
                    <option value="Dhaka North (Mirpur / Pallabi)">
                      Dhaka North (Mirpur / Pallabi)
                    </option>
                    <option value="Dhaka South (Gulshan / Banani)">
                      Dhaka South (Gulshan / Banani)
                    </option>
                    <option value="Dhaka South (Dhanmondi / Mohammadpur)">
                      Dhaka South (Dhanmondi / Mohammadpur)
                    </option>
                    <option value="Gazipur Industrial Zone">
                      Gazipur Industrial Zone
                    </option>
                    <option value="Narayanganj Zone">Narayanganj Zone</option>
                    <option value="Chattogram Port Hub">Chattogram Port Hub</option>
                    <option value="Overseas / International Zone">
                      Overseas / International Zone
                    </option>
                  </select>
                </div>

                {/* Phase 2 Requirement: Admission Session */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">
                    Admission Session <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    value={editForm.admissionSession}
                    placeholder="e.g. 2010-2011"
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        admissionSession: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary text-xs font-medium"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-1">
                    Batch
                  </label>
                  <input
                    type="text"
                    value={editForm.batch}
                    onChange={(e) =>
                      setEditForm({ ...editForm, batch: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary text-xs"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-1">
                    Registered Mobile
                  </label>
                  <input
                    type="text"
                    value={editForm.mobile}
                    onChange={(e) =>
                      setEditForm({ ...editForm, mobile: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary text-xs"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-1">
                    Official Email
                  </label>
                  <input
                    type="email"
                    value={editForm.email}
                    onChange={(e) =>
                      setEditForm({ ...editForm, email: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary text-xs"
                    required
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 border border-gray-200 hover:bg-gray-50 rounded-lg text-gray-700 font-medium cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-primary hover:bg-[#d04e0a] text-white font-semibold rounded-lg shadow-xs cursor-pointer"
                >
                  Save Profile Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
