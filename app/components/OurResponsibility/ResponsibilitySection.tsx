import React from "react";
import { ShieldCheck, Lightbulb, HeartHandshake, Users } from "lucide-react";
import { ResponsibilityCard } from "./ResponsibilityCard";
import { AdSpaceLandscapeWide } from "./AdSpaceLandscapeWide";

export function ResponsibilitySection() {
  const pillars = [
    {
      number: "01",
      icon: ShieldCheck,
      title: "Recognizing Industry Excellence",
      description:
        "We are committed to recognize and honor the valuable contributions of individuals within our community who have significant impact in textile and RMG industry.",
      href: "/events",
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Support Current Students",
      description:
        "We facilitate interactive sessions with industry experts and provide access to market intelligence to help students remain updated and to make them fit for industry.",
      href: "/welfareTrust",
    },
    {
      number: "03",
      icon: HeartHandshake,
      title: "Assist Our Alumni",
      description:
        "We stand beside our alumni during their times of need, offering guidance, support, and professional networking opportunities.",
      href: "/welfareTrust",
    },
    {
      number: "04",
      icon: Users,
      title: "Strengthen Our Community",
      description:
        "We aim to foster a vibrant, supportive community built on knowledge sharing, mutual respect, and collective growth.",
      href: "/membership-overview",
    },
  ];

  return (
    <>
    <section className="w-full bg-[#fbfaf6] py-16 sm:py-20 border-b border-gray-200/60">
      <div className="mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-manuale text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-900 tracking-tight leading-tight mb-3">
            Our Responsibility
          </h2>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-normal">
            Dedicated to serving the national textile engineering fraternity through institutional empowerment, professional standards, and community welfare.
          </p>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {pillars.map((pillar) => (
            <ResponsibilityCard
              key={pillar.number}
              number={pillar.number}
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
              href={pillar.href}
            />
          ))}
        </div>
      </div>
    </section>

    {/* 2.35:1 Wide Landscape Ad Space (own section, as on live site) */}
    <AdSpaceLandscapeWide />
    </>
  );
}
