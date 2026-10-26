"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { CtaBanner } from "@/app/components/CTA";
import { PageHeader } from "@/app/components/Common/PageHeader";
import { FileText, Download, ChevronDown, ChevronUp, CheckCircle, Shield } from "lucide-react";

export default function ConstitutionPage() {
  const [openSection, setOpenSection] = useState<number | null>(0);

  const articles = [
    {
      article: "Article I: Name & Registered Office",
      summary:
        "The Institution shall be designated as 'The Institution of Textile Engineers & Technologists (ITET), Bangladesh'. Its official headquarters and registered Secretariat shall be located at Uttara Model Town, Dhaka, Bangladesh.",
    },
    {
      article: "Article II: Aims, Objectives & Powers",
      summary:
        "To advance the science and practice of textile engineering in all branches; to maintain professional decorum; to advise legislative bodies on industrial codes; to conduct examinations and award professional engineering titles.",
    },
    {
      article: "Article III: Classification of Membership",
      summary:
        "Membership comprises: (a) Fellow Members, (b) Life Members, (c) General Members, (d) Associate Members, and (e) Student Members. All candidates must possess an accredited university degree in Textile Engineering or Technology recognized by the Council.",
    },
    {
      article: "Article IV: Central Executive Council Governance",
      summary:
        "The supreme governing body shall be the Central Executive Council, consisting of the President, Senior Vice President, Vice Presidents, Secretary General, Joint Secretary Generals, Organizing Secretary, Treasurer, and designated Executive Members elected bi-annually.",
    },
    {
      article: "Article V: Finances, Auditing & Benevolent Trust",
      summary:
        "All subscription revenues, donations, and capital assets shall be vested in trust and operated jointly by the President, Secretary General, and Treasurer. Annual accounts shall be independently audited by a chartered accounting firm.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-primary selection:text-white flex flex-col">
      <Header />
      <PageHeader
        badge="Charter & Governance"
        title="The Constitution of"
        highlightTitle="ITET"
        description="The foundational legal framework, institutional statutes, code of ethics, and governance rules of the Institution."
        breadcrumbs={[{ label: "About ITET" }, { label: "Constitution" }]}
      />

      <main className="flex-1 py-12 lg:py-16 bg-[#fbfaf6]">
        <div className="mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Accordion of Articles */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-gray-200">
                <h2 className="font-manuale text-xl sm:text-2xl font-bold text-gray-900">
                  Statutory Articles of the Constitution
                </h2>
                <span className="text-xs text-gray-500">Amended &amp; Adopted 2026</span>
              </div>

              {articles.map((item, idx) => {
                const isOpen = openSection === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border border-gray-200/80 overflow-hidden shadow-2xs transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenSection(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-manuale font-bold text-base sm:text-lg text-gray-900 hover:text-primary transition-colors cursor-pointer"
                    >
                      <span>{item.article}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-[#fafaf8]/50">
                        {item.summary}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Download and Official Seal Box */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs text-center">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-primary mb-4">
                  <FileText className="w-7 h-7" />
                </div>
                <h3 className="font-manuale text-lg font-bold text-gray-900 mb-1">
                  Full Constitution Document
                </h3>
                <p className="text-xs text-gray-500 mb-5">
                  Official certified PDF edition (English &amp; Bengali) with all amendments ratified by the General Body.
                </p>
                <a
                  href="/assets/logo.jpg"
                  download="ITET_Constitution.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-secondary hover:bg-primary text-white text-xs font-semibold transition-colors shadow-xs"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Constitution (PDF)</span>
                </a>
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
