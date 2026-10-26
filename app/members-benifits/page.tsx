import React from "react";
import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { CtaBanner } from "@/app/components/CTA";
import { PageHeader } from "@/app/components/Common/PageHeader";
import { Award, Briefcase, GraduationCap, ShieldCheck, Network, Sparkles, CheckCircle2 } from "lucide-react";

export default function MemberBenefitsPage() {
  const benefits = [
    {
      icon: Award,
      title: "Recognized Engineering Title",
      description:
        "Earn official accreditation and suffix titles (M-ITET, L-ITET, F-ITET) endorsed by regulatory engineering bodies, establishing professional credibility across employers and global partners.",
    },
    {
      icon: Network,
      title: "Extensive Fraternal Network",
      description:
        "Direct connection with over 4,500 active textile technocrats, factory owners, plant directors, and international sourcing executives throughout Bangladesh and overseas.",
    },
    {
      icon: GraduationCap,
      title: "CPD & Technical Masterclasses",
      description:
        "Complimentary or heavily subsidized access to certified Continuous Professional Development (CPD) sessions covering smart polymers, circular recycling, and zero-discharge wet processing.",
    },
    {
      icon: ShieldCheck,
      title: "Welfare Trust Financial Coverage",
      description:
        "Automatic eligibility for emergency hospital grants, compassionate bereavement coverage, and educational stipends for children under the ITET Welfare Trust Fund.",
    },
    {
      icon: Briefcase,
      title: "Priority Career Circulars",
      description:
        "Direct access to confidential senior leadership openings, plant head recruitment, and international advisory contracts shared exclusively through the ITET Job Circular desk.",
    },
    {
      icon: Sparkles,
      title: "Voting Rights & Governance",
      description:
        "Participate directly in shaping the policies of the Institution through voting and candidate eligibility in the biennial Central Executive Council elections.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-primary selection:text-white flex flex-col">
      <Header />
      <PageHeader
        badge="Privileges & Value"
        title="Exclusive Member"
        highlightTitle="Benefits"
        description="Discover the comprehensive advantages, career opportunities, and social security privileges unlocked with ITET membership."
        breadcrumbs={[{ label: "Membership" }, { label: "Member Benefits" }]}
      />

      <main className="flex-1 py-12 lg:py-16 bg-[#fbfaf6]">
        <div className="mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-primary mb-5">
                    <b.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-manuale text-xl font-bold text-gray-900 mb-3">
                    {b.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-normal">
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial / Member Quote Banner */}
          <div className="rounded-2xl bg-gradient-to-r from-secondary to-[#0c182c] text-white p-8 sm:p-12 border border-gray-800">
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-wider text-primary font-bold block mb-2">
                Member Spotlight
              </span>
              <blockquote className="font-manuale text-lg sm:text-xl md:text-2xl italic leading-relaxed mb-6">
                “Being an ITET member is not merely holding a certificate; it is belonging to the collective brainpower that built Bangladesh's global garment manufacturing dominance. The network has been instrumental in every step of my career.”
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary text-primary flex items-center justify-center font-bold text-xs">
                  ES
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Engr. Salim Reza, L-ITET</p>
                  <p className="text-xs text-gray-400">Director, Square Textiles Ltd.</p>
                </div>
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
