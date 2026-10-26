import React from "react";
import { WelcomeModal } from "./WelcomeModal";
import { HeroMainBanner } from "./HeroMainBanner";
import { LeadershipSpotlight } from "./LeadershipSpotlight";
import { EventsAndNotices } from "./EventsAndNotices";
import { AdSpacePortrait } from "./AdSpacePortrait";
import { AdSpaceLandscape } from "./AdSpaceLandscape";
import { CorporatePartners } from "./CorporatePartners";

export function HeroSection() {
  return (
    <section className="relative w-full bg-[#fbfaf6] py-6 sm:py-8 border-b border-gray-200/60">
      {/* 1. Welcome Modal popup */}
      <WelcomeModal />

      <div className="mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Left Column (5 Cols on LG): Main Banner + Leadership Spotlight + Landscape Ad */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <HeroMainBanner />
            <LeadershipSpotlight />
            <AdSpaceLandscape />
          </div>

          {/* Center Column (4 Cols on LG): Events + Notices + Corporate Partners */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <EventsAndNotices />
            <CorporatePartners />
          </div>

          {/* Right Column (3 Cols on LG): Portrait Ad Space 3:4 */}
          <div className="lg:col-span-3 flex flex-col lg:self-stretch">
            <AdSpacePortrait />
          </div>
        </div>
      </div>
    </section>
  );
}
