"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  X,
  ChevronDown,
  ArrowRight,
  Phone,
  Mail,
  MessageSquare,
  Image as ImageIcon,
} from "lucide-react";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [membershipOpen, setMembershipOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 xl:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Drawer */}
      <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-out animate-in slide-in-from-right">
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gradient-to-r from-orange-50/70 to-white">
          <div className="flex items-center gap-2">
            <img
              src="/assets/logo.jpg"
              alt="ITET Logo"
              className="w-8 h-8 rounded-full shadow-2xs object-contain"
            />
            <h2 className="text-base font-bold text-gray-900 font-manuale">Menu</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-all hover:rotate-90 cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body - Scrollable */}
        <div className="overflow-y-auto h-full pb-8">
          <ul className="flex flex-col">
            {/* Home */}
            <li className="border-b border-gray-100">
              <Link
                href="/"
                onClick={onClose}
                className="flex items-center justify-between p-3.5 hover:bg-gray-50 text-primary font-semibold bg-orange-50/40 text-sm"
              >
                <span>Home</span>
                <span className="text-primary">→</span>
              </Link>
            </li>

            {/* About ITET Accordion */}
            <li className="border-b border-gray-100">
              <button
                type="button"
                onClick={() => setAboutOpen(!aboutOpen)}
                className="w-full flex justify-between items-center p-3.5 text-left hover:bg-gray-50 text-gray-700 text-sm font-semibold cursor-pointer"
              >
                <span>About ITET</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                    aboutOpen ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>
              {aboutOpen && (
                <div className="bg-gray-50/80 px-4 py-2 space-y-1.5 border-t border-gray-100/60">
                  <Link
                    href="/history-itet"
                    onClick={onClose}
                    className="block py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors"
                  >
                    History Of ITET
                  </Link>
                  <Link
                    href="/mission-vision"
                    onClick={onClose}
                    className="block py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors"
                  >
                    Mission & Vision
                  </Link>
                  <Link
                    href="/constitution"
                    onClick={onClose}
                    className="block py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors"
                  >
                    Constitution
                  </Link>
                  <Link
                    href="/committee"
                    onClick={onClose}
                    className="block py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors"
                  >
                    Committee Members
                  </Link>
                  <Link
                    href="/former-leaders"
                    onClick={onClose}
                    className="block py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors"
                  >
                    Former Leaders
                  </Link>
                  <Link
                    href="/stockholders"
                    onClick={onClose}
                    className="block py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors"
                  >
                    Stockholder List
                  </Link>
                  <Link
                    href="/welfareTrust"
                    onClick={onClose}
                    className="block py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors"
                  >
                    Welfare Trust
                  </Link>
                </div>
              )}
            </li>

            {/* Membership Accordion */}
            <li className="border-b border-gray-100">
              <button
                type="button"
                onClick={() => setMembershipOpen(!membershipOpen)}
                className="w-full flex justify-between items-center p-3.5 text-left hover:bg-gray-50 text-gray-700 text-sm font-semibold cursor-pointer"
              >
                <span>Membership</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                    membershipOpen ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>
              {membershipOpen && (
                <div className="bg-gray-50/80 px-4 py-2 space-y-1.5 border-t border-gray-100/60">
                  <Link
                    href="/membership-overview"
                    onClick={onClose}
                    className="block py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors"
                  >
                    Membership Overview
                  </Link>
                  <Link
                    href="/members-benifits"
                    onClick={onClose}
                    className="block py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors"
                  >
                    Members Benefits
                  </Link>
                  <Link
                    href="/membership-overview"
                    onClick={onClose}
                    className="block py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors"
                  >
                    General Membership
                  </Link>
                  <Link
                    href="/membership-login"
                    onClick={onClose}
                    className="block py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors"
                  >
                    Renew Membership
                  </Link>
                  <Link
                    href="/membership-login"
                    onClick={onClose}
                    className="block py-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    Member Login [Portal]
                  </Link>
                </div>
              )}
            </li>

            {/* Other direct links */}
            {[
              { title: "Events", to: "/events" },
              { title: "Notice", to: "/notices" },
              { title: "Publication", to: "/publication" },
              { title: "Job Circular", to: "/job-circular" },
              { title: "Gallery", to: "/gallery" },
            ].map((item) => (
              <li key={item.to} className="border-b border-gray-100">
                <Link
                  href={item.to}
                  onClick={onClose}
                  className="flex items-center justify-between p-3.5 hover:bg-gray-50 text-gray-700 text-sm font-semibold transition-colors"
                >
                  <span>{item.title}</span>
                  <span className="text-gray-400 hover:text-primary">→</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Embedded Square Ad Space */}
          <div className="p-4 flex justify-center">
            <div className="relative w-full max-w-[240px] aspect-square rounded-xl overflow-hidden shadow-sm border border-[#1d355c]/60 bg-gradient-to-b from-[#0a1c3b] via-[#081734] to-[#051126] flex flex-col items-center justify-center p-3 text-center select-none">
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 240 240"
                preserveAspectRatio="none"
              >
                <path
                  d="M -10,110 C 40,160 80,150 120,105 C 160,60 180,30 200,40 C 220,50 230,150 250,260"
                  fill="none"
                  stroke="rgba(148, 185, 235, 0.28)"
                  strokeWidth="1.5"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M -10,200 C 40,110 80,95 125,140 C 165,180 200,260 235,240"
                  fill="none"
                  stroke="rgba(148, 185, 235, 0.2)"
                  strokeWidth="1.3"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <div className="relative z-10 flex flex-col items-center justify-center">
                <span className="text-[9.5px] font-bold tracking-[0.2em] text-[#9db3d4] uppercase leading-none">
                  AD SPACE
                </span>
                <span className="text-2xl font-black text-white tracking-tight leading-none mt-1">
                  1:1
                </span>
                <span className="text-[10px] text-[#8fa7c7] font-medium mt-0.5">
                  (Square)
                </span>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="mt-2.5 inline-flex items-center justify-center px-3 py-1.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 text-white text-[11px] font-medium"
                >
                  Book this space
                </Link>
              </div>
            </div>
          </div>

          {/* Portals Box */}
          <div className="p-3.5 bg-gray-50 mx-4 mb-3 rounded-lg border border-gray-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-2.5">
              Our Portals
            </h3>
            <div className="space-y-2">
              <Link
                href="/member-portal"
                onClick={onClose}
                className="block text-xs font-medium text-gray-600 hover:text-primary transition-all hover:translate-x-0.5"
              >
                Members Portal
              </Link>
              <Link
                href="/client-portal"
                onClick={onClose}
                className="block text-xs font-medium text-gray-600 hover:text-primary transition-all hover:translate-x-0.5"
              >
                Advertiser Portal
              </Link>
            </div>
          </div>

          {/* Contact Us Box */}
          <div className="p-3.5 bg-gray-50 mx-4 mb-4 rounded-lg border border-gray-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-2.5">
              Contact Us
            </h3>
            <div className="space-y-2 text-xs text-gray-600">
              <a
                href="tel:+8801715771454"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>+880 1715-771454</span>
              </a>
              <a
                href="mailto:info@itetbd.net"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>info@itetbd.net</span>
              </a>
            </div>
          </div>

          {/* Query & Answer Button */}
          <div className="px-4 pb-2">
            <Link
              href="/member-portal/qna"
              onClick={onClose}
              className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-2.5 px-4 rounded-lg text-xs text-center flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Query & Answer</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
