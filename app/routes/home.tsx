import type { Route } from "./+types/home";
import { Header } from "../components/Header";
import { HeroSection } from "../components/Hero";
import { MarketUpdatesSection } from "../components/MarketUpdates";
import { ResponsibilitySection } from "../components/OurResponsibility";
import { AlumniSection } from "../components/AlumniShowcase";
import { MediaGallerySection } from "../components/MediaGallery";
import { CtaBanner } from "../components/CTA";
import { Footer } from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ITET Bangladesh | The Institution of Textile Engineers & Technologists" },
    {
      name: "description",
      content:
        "Welcome to ITET Bangladesh – Uniting, empowering, and advancing professional textile engineers and technologists nationwide.",
    },
  ];
}

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
