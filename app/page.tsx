import { Header } from "@/app/components/Header";
import { HeroSection } from "@/app/components/Hero";
import { MarketUpdatesSection } from "@/app/components/MarketUpdates";
import { ResponsibilitySection } from "@/app/components/OurResponsibility";
import { AlumniSection } from "@/app/components/AlumniShowcase";
import { MediaGallerySection } from "@/app/components/MediaGallery";
import { CtaBanner } from "@/app/components/CTA";
import { Footer } from "@/app/components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ITET Bangladesh - Institution of Textile Engineers and Technologists",
  description: "Welcome to ITET Bangladesh – Uniting, empowering, and advancing professional textile engineers and technologists nationwide.",
};


export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-primary selection:text-white flex flex-col">
      {/* Component 1: Top Utility Bar & Sticky Navbar */}
      <Header />

      {/* Component 2: Main Hero Section */}
      <HeroSection />

      {/* Component 3: Textile Market Updates */}
      <MarketUpdatesSection />

      {/* Component 4: Our Responsibility & Wide Ad Space */}
      <ResponsibilitySection />

      {/* Component 5: Meet Our Proud Alumni */}
      <AlumniSection />

      {/* Component 6: Moments & Media Gallery */}
      <MediaGallerySection />

      {/* Component 7: CTA Banner & Comprehensive Footer */}
      <CtaBanner />
      <Footer />
    </div>
  );
}
