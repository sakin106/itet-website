"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, LogIn, Menu } from "lucide-react";
import { MegaMenuAbout } from "./MegaMenuAbout";
import { MegaMenuMembership } from "./MegaMenuMembership";
import { MobileDrawer } from "./MobileDrawer";

export function Navbar() {
  const pathname = usePathname();
  const location = { pathname: pathname || "/" };
  const [activeMenu, setActiveMenu] = useState<"about" | "membership" | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMenu = (menu: "about" | "membership") => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  const closeMenus = () => {
    setActiveMenu(null);
  };

  const isLinkActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-xs transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Brand Logo & Name */}
            <Link
              href="/"
              onClick={closeMenus}
              className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
            >
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 overflow-hidden rounded shadow-2xs border border-gray-100 p-0.5 bg-white">
                <img
                  src="/assets/logo.jpg"
                  alt="ITET Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-xs sm:text-sm lg:text-[14.5px] text-gray-900 tracking-tight leading-tight group-hover:text-primary transition-colors">
                  The Institution of Textile Engineers &amp; <br />
                  Technologists (ITET), Bangladesh
                </span>
              </div>
            </Link>

            {/* Desktop Center Navigation */}
            <nav className="hidden xl:flex items-center gap-1 lg:gap-1.5">
              <Link
                href="/"
                onClick={closeMenus}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-150 ${
                  isLinkActive("/")
                    ? "text-primary font-semibold"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`}
              >
                Home
              </Link>

              {/* About ITET with Dropdown Toggle */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleMenu("about")}
                  onMouseEnter={() => setActiveMenu("about")}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
                    activeMenu === "about"
                      ? "text-primary bg-gray-50 font-semibold"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
                  aria-expanded={activeMenu === "about"}
                >
                  <span>About ITET</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 text-gray-400 ${
                      activeMenu === "about" ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Membership with Dropdown Toggle */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleMenu("membership")}
                  onMouseEnter={() => setActiveMenu("membership")}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
                    activeMenu === "membership"
                      ? "text-primary bg-gray-50 font-semibold"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
                  aria-expanded={activeMenu === "membership"}
                >
                  <span>Membership</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 text-gray-400 ${
                      activeMenu === "membership" ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Standard Nav Links */}
              {[
                { title: "Events", to: "/events" },
                { title: "Notice", to: "/notices" },
                { title: "Publication", to: "/publication" },
                { title: "Job Circular", to: "/job-circular" },
                { title: "Gallery", to: "/gallery" },
              ].map((item) => (
                <Link
                  key={item.to}
                  href={item.to}
                  onClick={closeMenus}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-150 ${
                    isLinkActive(item.to)
                      ? "text-primary font-semibold"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            {/* Right Desktop CTA */}
            <div className="hidden xl:flex items-center gap-3">
              <Link
                href="/member-portal"
                className="bg-secondary hover:bg-primary text-white text-xs font-semibold px-4 py-2 rounded-md shadow-xs hover:shadow-sm transition-all duration-200 flex items-center gap-1.5 group cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                <span>Member Portal</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                type="button"
                onClick={() => setIsMobileOpen(true)}
                className="p-2 text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menus Mounted Directly Below Sticky Nav */}
        <MegaMenuAbout
          isOpen={activeMenu === "about"}
          onClose={closeMenus}
        />
        <MegaMenuMembership
          isOpen={activeMenu === "membership"}
          onClose={closeMenus}
        />
      </header>

      {/* Mobile Slide-out Drawer */}
      <MobileDrawer
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </>
  );
}
