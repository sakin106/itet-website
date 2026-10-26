import React from "react";
import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { CtaBanner } from "@/app/components/CTA";
import { PageHeader } from "@/app/components/Common/PageHeader";
import { HeartHandshake, ShieldCheck, GraduationCap, Users2, ArrowRight } from "lucide-react";

export default function WelfareTrustPage() {
  const initiatives = [
    {
      icon: ShieldCheck,
      title: "Emergency Medical Support",
      description:
        "Providing urgent financial grants and medical expense coverage for textile engineers and their dependent families in times of severe illness or trauma.",
    },
    {
      icon: GraduationCap,
      title: "Children's Education Scholarships",
      description:
        "Merit and need-based educational stipends for the deserving children of deceased or underprivileged ITET members to support their higher studies.",
    },
    {
      icon: HeartHandshake,
      title: "Benevolent Bereavement Fund",
      description:
        "Immediate cash assistance and legal facilitation for the families of members who have passed away, ensuring economic protection in their time of bereavement.",
    },
    {
      icon: Users2,
      title: "Alumni Crisis Relief",
      description:
        "Dedicated fund deployed during national emergencies, post-pandemic transitions, and unforeseen industrial disruptions affecting textile professionals.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-primary selection:text-white flex flex-col">
      <Header />
      <PageHeader
        badge="Community Welfare"
        title="ITET"
        highlightTitle="Welfare Trust"
        description="Fostering fraternal care, emergency safety nets, and benevolent endowments for the nationwide textile engineering community."
        breadcrumbs={[{ label: "About ITET" }, { label: "Welfare Trust" }]}
      />

      <main className="flex-1 py-12 lg:py-16 bg-[#fbfaf6]">
        <div className="mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          {/* Trust Mission Banner */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-200/80 shadow-xs mb-12">
            <div className="max-w-3xl">
              <h2 className="font-manuale text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Standing Strong Together
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Established under the statutory charter of ITET Bangladesh, the Welfare Trust exists to ensure that no textile engineer or technologist faces catastrophic personal or medical hardship alone. Funded by member contributions and philanthropic endowments, the Trust provides immediate, dignified, and accountable assistance.
              </p>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {initiatives.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-xs hover:border-primary/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-primary mb-5">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-manuale text-xl font-bold text-gray-900 mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Contribute / Apply */}
          <div className="rounded-2xl bg-gradient-to-r from-secondary to-[#0b172a] text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-manuale text-2xl sm:text-3xl font-bold mb-2">
                Need Welfare Assistance or Wish to Donate?
              </h3>
              <p className="text-sm text-gray-300 max-w-xl">
                The Welfare Trust Committee reviews all applications with strict confidentiality and priority turnaround.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link href="/contact"
                className="px-6 py-3 rounded-lg bg-primary hover:bg-orange-600 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
              >
                Contact Welfare Desk
              </Link>
            </div>
          </div>
        </div>
      </main>

      <CtaBanner />
      <Footer />
    </div>
  );
}
