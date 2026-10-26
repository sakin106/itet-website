"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { CtaBanner } from "@/app/components/CTA";
import { PageHeader } from "@/app/components/Common/PageHeader";
import { Award, Check, FileCheck, ArrowRight, UserCheck } from "lucide-react";

export default function MembershipOverviewPage() {
  const [selectedPlan, setSelectedPlan] = useState<string>("general");

  const grades = [
    {
      id: "general",
      title: "General Member",
      abbr: "M-ITET",
      fee: "৳ 2,000 / Year",
      eligibility: "B.Sc. in Textile Engineering / Technology from an accredited institution.",
      popular: true,
      perks: [
        "Official M-ITET Designation & Professional ID Card",
        "Voting Rights in Council Biennial Elections",
        "Full access to Events, Conclaves, & CPD Seminars",
        "Coverage under ITET Welfare Trust Fund",
        "Access to Textile Directory & Job Portal",
      ],
    },
    {
      id: "life",
      title: "Life Member",
      abbr: "L-ITET",
      fee: "৳ 15,000 One-time",
      eligibility: "Minimum 5 years of professional practice with recognized degree.",
      popular: false,
      perks: [
        "Permanent L-ITET Membership with Lifetime Privileges",
        "No recurring annual renewal fees",
        "Priority VIP Seating at National Textile Conclaves",
        "Exclusive Member Plaque & Certificate",
        "Enhanced Welfare Trust Benefits for Dependents",
      ],
    },
    {
      id: "fellow",
      title: "Fellow Member",
      abbr: "F-ITET",
      fee: "By Invitation / Council Honor",
      eligibility: "Distinguished engineers with 20+ years of industrial leadership.",
      popular: false,
      perks: [
        "Highest Professional Honor (F-ITET)",
        "Advisory status on State Textile Councils",
        "Keynote invitations to Global Textile Summits",
        "Permanent archival in ITET Hall of Fame",
        "Council Nomination Privileges",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-primary selection:text-white flex flex-col">
      <Header />
      <PageHeader
        badge="Join The Apex Guild"
        title="Membership"
        highlightTitle="Overview"
        description="Connect with Bangladesh's premier community of textile engineers. Choose your membership tier to unlock accreditation and career elevation."
        breadcrumbs={[{ label: "Membership" }, { label: "Overview" }]}
      />

      <main className="flex-1 py-12 lg:py-16 bg-[#fbfaf6]">
        <div className="mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          {/* Intro description */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-manuale text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Membership Tiers &amp; Criteria
            </h2>
            <p className="text-sm text-gray-600">
              Graduating from a recognized textile engineering department grants you eligibility to join thousands of professional leaders driving national industry.
            </p>
          </div>

          {/* Pricing / Tiers Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-14">
            {grades.map((grade) => (
              <div
                key={grade.id}
                className={`relative bg-white rounded-2xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between ${
                  grade.popular
                    ? "border-primary shadow-lg ring-1 ring-primary/30"
                    : "border-gray-200/80 shadow-xs hover:border-gray-300"
                }`}
              >
                {grade.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    Most Popular
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-primary px-2.5 py-1 rounded bg-orange-50 border border-orange-200/60">
                      {grade.abbr}
                    </span>
                  </div>

                  <h3 className="font-manuale text-2xl font-bold text-gray-900 mb-1">
                    {grade.title}
                  </h3>
                  <div className="text-2xl font-bold text-gray-900 font-manuale my-3">
                    {grade.fee}
                  </div>
                  <p className="text-xs text-gray-500 mb-6 pb-4 border-b border-gray-100">
                    <strong className="text-gray-700">Eligibility:</strong> {grade.eligibility}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {grade.perks.map((perk, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/membership-login"
                  className={`w-full py-3 rounded-lg text-xs sm:text-sm font-semibold transition-all text-center flex items-center justify-center gap-2 ${
                    grade.popular
                      ? "bg-primary hover:bg-orange-600 text-white shadow-xs"
                      : "bg-secondary hover:bg-gray-800 text-white"
                  }`}
                >
                  <span>Apply for {grade.abbr}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* Required Documents Section */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-xs">
            <h3 className="font-manuale text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-primary" />
              <span>Application Checklist &amp; Required Documents</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm text-gray-600">
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <span className="font-bold text-gray-900 block mb-1">1. Degree Certificate</span>
                Attested copy of B.Sc. in Textile Engineering certificate or provisional certificate.
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <span className="font-bold text-gray-900 block mb-1">2. National ID / Passport</span>
                Clear scanned copy of National NID card or Passport info page.
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <span className="font-bold text-gray-900 block mb-1">3. Color Passport Photo</span>
                Recent passport-size photograph with white background.
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <span className="font-bold text-gray-900 block mb-1">4. Proposer Signatures</span>
                Attestation by two active ITET General or Life Members.
              </div>
            </div>
          </div>
        </div>
      </main>

      <CtaBanner />
      <Footer />
    </div>
  );
}
