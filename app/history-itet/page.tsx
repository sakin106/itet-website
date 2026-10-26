import React from "react";
import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { CtaBanner } from "@/app/components/CTA";
import { PageHeader } from "@/app/components/Common/PageHeader";
import { Calendar, Award, CheckCircle2, ChevronRight, BookOpen } from "lucide-react";

export default function HistoryPage() {
  const milestones = [
    {
      year: "1983",
      title: "Foundation of ITET",
      description:
        "The Institution of Textile Engineers & Technologists (ITET) was founded by a pioneering group of textile engineers to establish a unified professional identity and advocate for the development of Bangladesh's nascent textile sector.",
    },
    {
      year: "1991",
      title: "Government Recognition & Charter",
      description:
        "ITET received formal government charter recognition as the premier apex professional body representing qualified textile engineers across public and private industrial enterprises.",
    },
    {
      year: "2004",
      title: "Establishment of ITET Welfare Trust",
      description:
        "Launched the ITET Welfare Trust to ensure social security, medical emergencies, and benevolent support for textile engineers, students, and their families nationwide.",
    },
    {
      year: "2015",
      title: "National Textile Policy Advisory",
      description:
        "ITET leadership actively co-authored key policy frameworks for the Ministry of Textiles and Jute, championing value-added spinning, eco-friendly dyeing, and export modernization.",
    },
    {
      year: "2026",
      title: "The 15th Central Executive Council",
      description:
        "Historic elections ushered in the 15th Central Executive Council led by President Engr. Md. Enayet Hossain and Secretary General Engr. Md. Shakawat Hossain, steering digital governance and global accreditation.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-primary selection:text-white flex flex-col">
      <Header />
      <PageHeader
        badge="About ITET • Since 1983"
        title="History of"
        highlightTitle="ITET"
        description="Over four decades of dedicated service, professional excellence, and industrial leadership shaping Bangladesh's textile revolution."
        breadcrumbs={[{ label: "About ITET" }, { label: "History of ITET" }]}
      />

      <main className="flex-1 py-12 lg:py-16 bg-[#fbfaf6]">
        <div className="mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Narrative Column */}
            <div className="lg:col-span-8 space-y-10">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-xs">
                <h2 className="font-manuale text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  The Genesis of Our Fraternity
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                  <p>
                    In the late 1970s and early 1980s, Bangladesh stood on the brink of an industrial transformation that would redefine its national economy. Recognizing the absolute necessity for a professional regulatory guild of certified textile technocrats, visionary engineers from the College of Textile Engineering and Technology (now BUTEX) came together to establish ITET.
                  </p>
                  <p>
                    Since its official inception in 1983, ITET has continually stood at the vanguard of innovation, vocational integrity, and industrial policy. From supporting small mills to guiding multinational conglomerates and sustainable green factories, ITET members have been the true architects behind Bangladesh becoming the world’s second-largest apparel exporter.
                  </p>
                </div>
              </div>

              {/* Milestone Timeline */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-xs">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-primary">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-manuale text-xl sm:text-2xl font-bold text-gray-900">
                      Historical Milestones
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">Key milestones in our 40+ year legacy</p>
                  </div>
                </div>

                <div className="relative pl-6 sm:pl-8 border-l-2 border-primary/20 space-y-8">
                  {milestones.map((m, idx) => (
                    <div key={idx} className="relative group">
                      <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-4 h-4 rounded-full bg-white border-4 border-primary group-hover:scale-125 transition-transform" />
                      <div className="inline-block px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold mb-2">
                        {m.year}
                      </div>
                      <h4 className="font-manuale text-lg sm:text-xl font-bold text-gray-900 mb-1.5">
                        {m.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{m.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs">
                <h3 className="font-manuale text-lg font-bold text-gray-900 pb-3 mb-4 border-b border-gray-100">
                  About ITET Navigation
                </h3>
                <nav className="space-y-2">
                  {[
                    { label: "History of ITET", href: "/history-itet", active: true },
                    { label: "Mission & Vision", href: "/mission-vision" },
                    { label: "Constitution", href: "/constitution" },
                    { label: "Central Executive Committee", href: "/committee" },
                    { label: "ITET Welfare Trust", href: "/welfareTrust" },
                  ].map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                        item.active
                          ? "bg-primary text-white font-semibold shadow-xs"
                          : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-4 h-4 opacity-70" />
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Quick Fact Card */}
              <div className="rounded-2xl bg-gradient-to-br from-secondary to-[#0b172a] text-white p-6 shadow-sm relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-primary mb-4">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="font-manuale text-lg font-bold mb-2">4,500+ Qualified Members</h4>
                  <p className="text-xs text-gray-300 leading-relaxed mb-4">
                    Comprising CEOs, managing directors, senior technical heads, and academic scholars across 25+ countries.
                  </p>
                  <Link href="/membership-overview"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    <span>View Membership Grades</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
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
