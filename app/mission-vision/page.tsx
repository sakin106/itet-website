import React from "react";
import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { CtaBanner } from "@/app/components/CTA";
import { PageHeader } from "@/app/components/Common/PageHeader";
import { Target, Compass, Award, Shield, Sparkles, ChevronRight } from "lucide-react";

export default function MissionPage() {
  const pillars = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To foster professional excellence among textile engineers, protect ethical standards of practice, provide continuous career development, and serve as the foremost advisory body to government and private industries for sustainable economic prosperity.",
    },
    {
      icon: Compass,
      title: "Our Vision",
      description:
        "To position Bangladesh's textile and apparel sector as the global benchmark for high-value technological innovation, environmental sustainability, ethical manufacturing, and technical leadership by 2035.",
    },
  ];

  const values = [
    {
      title: "Professional Integrity",
      desc: "Upholding the highest benchmarks of ethics, transparency, and engineering precision.",
    },
    {
      title: "Technological Innovation",
      desc: "Championing Industry 4.0 automation, smart polymers, and advanced sustainable wet processing.",
    },
    {
      title: "Fraternal Welfare",
      desc: "Unconditional mutual support, financial safety nets, and career enablement for every member.",
    },
    {
      title: "National Leadership",
      desc: "Guiding state policy, economic planning, and academic curricula to safeguard the nation's economic backbone.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-primary selection:text-white flex flex-col">
      <Header />
      <PageHeader
        badge="Strategic Purpose"
        title="Mission &"
        highlightTitle="Vision"
        description="Defining the institutional principles and future trajectory driving Bangladesh's textile engineering guild."
        breadcrumbs={[{ label: "About ITET" }, { label: "Mission & Vision" }]}
      />

      <main className="flex-1 py-12 lg:py-16 bg-[#fbfaf6]">
        <div className="mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          {/* Mission & Vision Twin Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            {pillars.map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-gray-200/80 shadow-xs flex flex-col justify-between hover:border-primary/40 transition-colors"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-primary mb-6">
                    <p.icon className="w-6 h-6" />
                  </div>
                  <h2 className="font-manuale text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {p.title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Core Values Section */}
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-gray-200/80 shadow-xs mb-10">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Foundational Pillars</span>
              <h3 className="font-manuale text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
                Core Institutional Values
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-[#fafaf8] border border-gray-100 hover:shadow-xs transition-shadow">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3 font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h4 className="font-manuale font-bold text-base text-gray-900 mb-2">{v.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <CtaBanner />
      <Footer />
    </div>
  );
}
