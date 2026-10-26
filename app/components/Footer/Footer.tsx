import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  ArrowRight,
  Newspaper,
  UserCheck,
} from "lucide-react";
import { BackToTop } from "./BackToTop";

export function Footer() {
  return (
    <footer className="relative bg-[#050813] text-white pt-16 pb-8 text-sm overflow-hidden selection:bg-primary selection:text-white">
      {/* 1. Dark Textile Texture Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/assets/footer-bg.jpg"
          alt="Textile Texture Background"
          className="w-full h-full object-cover object-center opacity-25 mix-blend-screen scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080d1a]/90 via-[#050813]/85 to-[#02040a]/95 backdrop-blur-[1px]" />
      </div>

      {/* 2. Large ITET Watermark Logo/Text */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[25%] font-black text-[13vw] tracking-[0.06em] text-transparent select-none pointer-events-none leading-none z-0 uppercase whitespace-nowrap text-center blur-[1px]"
        style={{
          WebkitTextStroke: "2px rgba(255, 255, 255, 0.09)",
          textShadow: "0 0 60px rgba(255, 255, 255, 0.03)",
        }}
      >
        ITET
      </div>

      {/* 3. Decorative Accent Elements & Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#f54a00]/70 to-transparent z-10" />
      <div className="absolute -top-28 -left-28 w-80 h-80 rounded-full bg-[#f54a00]/15 blur-3xl pointer-events-none z-0" />
      <div className="absolute top-1/2 -right-28 w-96 h-96 rounded-full bg-[#3b82f6]/10 blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-20 left-1/3 w-64 h-64 rounded-full bg-[#B07210]/15 blur-3xl pointer-events-none z-0" />

      {/* 4. Main Content Container */}
      <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-10 mb-14">
          {/* Column 1: Brand & Portals (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block group">
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="p-1.5 bg-white rounded-md shadow-lg group-hover:scale-105 transition-all duration-300 ring-1 ring-white/20 shrink-0">
                    <img
                      src="/assets/logo.jpg"
                      alt="ITET Logo"
                      className="w-12 h-12 rounded-sm object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="font-semibold text-base md:text-[17px] leading-snug tracking-tight text-white group-hover:text-orange-400 transition-colors">
                      The Institution of Textile Engineers <br />
                      &amp; Technologists (ITET), Bangladesh
                    </h2>
                  </div>
                </div>
              </Link>
              <p className="text-gray-300/85 text-sm leading-relaxed mb-6 pr-2">
                Empowering textile engineering professionals through innovation, education, and collaboration. Join us in shaping the future of textile technology in Bangladesh.
              </p>
            </div>

            {/* Quick Portals */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 md:gap-5 lg:max-w-xs">
              <Link href="/member-portal"
                className="group flex items-center justify-between p-2.5 rounded-md bg-white/[0.05] border border-white/10 hover:border-white/20 hover:bg-white/[0.09] transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-semibold text-white group-hover:text-primary transition-colors">
                    Members Portal
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link href="/client-portal"
                className="group flex items-center justify-between p-2.5 rounded-md bg-white/[0.05] border border-white/10 hover:border-white/20 hover:bg-white/[0.09] transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-400" />
                  <span className="text-xs font-medium text-gray-200 group-hover:text-white transition-colors">
                    Advertiser Portal
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links (2 Cols) */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-base text-white mb-5 pb-2.5 relative inline-block">
              Quick Links
              <span className="absolute left-0 bottom-0 w-8 h-[2px] bg-gradient-to-r from-primary to-amber-500 rounded-full" />
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "History of ITET", path: "/history-itet" },
                { label: "ITET's Mission & Vision", path: "/mission-vision" },
                { label: "Constitution", path: "/constitution" },
                { label: "Committee Members", path: "/committee" },
                { label: "Welfare Trust", path: "/welfareTrust" },
                { label: "Photo Gallery", path: "/gallery" },
              ].map((link) => (
                <li key={link.path}>
                  <Link href={link.path}
                    className="text-gray-300/80 hover:text-primary hover:translate-x-1.5 transition-all duration-200 flex items-center gap-2 text-sm group py-0.5"
                  >
                    <ChevronRight className="w-3 h-3 text-primary/70 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Membership (2 Cols) */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-base text-white mb-5 pb-2.5 relative inline-block">
              Membership
              <span className="absolute left-0 bottom-0 w-8 h-[2px] bg-gradient-to-r from-primary to-amber-500 rounded-full" />
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Membership Overview", path: "/membership-overview" },
                { label: "Member Benefits", path: "/members-benifits" },
                { label: "Directory & Update Info", path: "/membership-login" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link href={link.path}
                    className="text-gray-300/80 hover:text-primary hover:translate-x-1.5 transition-all duration-200 flex items-center gap-2 text-sm group py-0.5"
                  >
                    <ChevronRight className="w-3 h-3 text-primary/70 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Support (4 Cols) */}
          <div className="lg:col-span-4">
            <h3 className="font-semibold text-base text-white mb-5 pb-2.5 relative inline-block">
              Contact &amp; Support
              <span className="absolute left-0 bottom-0 w-8 h-[2px] bg-gradient-to-r from-primary to-amber-500 rounded-full" />
            </h3>
            <div className="rounded-md bg-white/[0.02] p-4 lg:p-5 backdrop-blur-md hover:border-primary/30 transition-all duration-300 space-y-4 shadow-xl border border-white/5">
              {/* Address with Map Link */}
              <a
                href="https://maps.google.com/?q=House+%236,+Road+%232,+Sector+%2311,+Uttara,+Dhaka"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group pb-3.5 border-b border-white/[0.08]"
              >
                <div className="w-8 h-8 rounded-md text-primary border border-primary/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                      Address
                    </p>
                    <span className="text-[10px] text-gray-400 group-hover:text-primary transition-colors flex items-center gap-0.5">
                      Map <ArrowRight className="w-2.5 h-2.5" />
                    </span>
                  </div>
                  <p className="text-xs text-gray-300/95 mt-0.5 leading-relaxed group-hover:text-white transition-colors">
                    House #6, Road #2, Sector #11, Uttara, Dhaka.
                  </p>
                </div>
              </a>

              {/* Direct Hotline & Support */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2.5 pb-3.5 border-b border-white/[0.08]">
                <a
                  href="tel:+8801715771454"
                  className="flex items-center gap-2.5 p-2 rounded-md bg-white/[0.03] border border-white/5 hover:border-primary/30 transition-all duration-200 group"
                >
                  <div className="w-7 h-7 rounded-md text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform bg-white/5">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-gray-400 uppercase font-medium">Hotline</p>
                    <p className="text-xs text-gray-200 font-semibold truncate group-hover:text-primary transition-colors">
                      +880 1715-771454
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@itetbd.net"
                  className="flex items-center gap-2.5 p-2 rounded-md bg-white/[0.03] border border-white/5 hover:border-primary/30 transition-all duration-200 group"
                >
                  <div className="w-7 h-7 rounded-md text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform bg-white/5">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-gray-400 uppercase font-medium">Support</p>
                    <p className="text-xs text-gray-200 font-semibold truncate group-hover:text-primary transition-colors">
                      info@itetbd.net
                    </p>
                  </div>
                </a>
              </div>

              {/* Department Inquiries */}
              <div className="space-y-2">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                  Department Inquiries
                </p>
                <div className="space-y-1.5">
                  <a
                    href="mailto:pressnpublication@itetbd.net"
                    className="flex items-center justify-between p-2 rounded-md bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/15 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <Newspaper className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="text-xs text-gray-400 font-medium">Press:</span>
                      <span className="text-xs text-gray-200 truncate group-hover:text-orange-400 transition-colors">
                        pressnpublication@itetbd.net
                      </span>
                    </div>
                    <ArrowRight className="w-3 h-3 text-gray-500 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 ml-1.5" />
                  </a>

                  <a
                    href="mailto:secretarygeneral@itetbd.net"
                    className="flex items-center justify-between p-2 rounded-md bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/15 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <UserCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span className="text-xs text-gray-400 font-medium">Secretary:</span>
                      <span className="text-xs text-gray-200 truncate group-hover:text-orange-400 transition-colors">
                        secretarygeneral@itetbd.net
                      </span>
                    </div>
                    <ArrowRight className="w-3 h-3 text-gray-500 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 ml-1.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-6" />

        {/* 5. Bottom Copyright & Credits Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-1.5 text-center md:text-left">
            <span>&copy; {new Date().getFullYear()} The Institution of Textile Engineers &amp; Technologists (ITET), Bangladesh. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-gray-400">Designed &amp; Developed by SAKIN BIN JABED</span>
          </div>
        </div>
      </div>

      {/* 6. Floating Back to Top Button */}
      <BackToTop />
    </footer>
  );
}
