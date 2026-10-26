"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight, Sparkles, Clock } from "lucide-react";

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [timeLeft, setTimeLeft] = useState(4);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsOpen(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const progressPercent = ((4 - timeLeft) / 4) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-300">
      <div className="relative w-full max-w-[680px] bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row animate-in zoom-in-95 duration-300">
        {/* Left Content Side */}
        <div className="w-full md:w-[60%] p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Header branding */}
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/assets/logo.jpg"
                alt="ITET Logo"
                className="w-9 h-9 rounded-md object-contain border border-gray-100 shadow-2xs"
              />
              <span className="font-bold text-gray-900 text-sm sm:text-base font-manuale">
                ITET Bangladesh
              </span>
            </div>

            {/* Pill badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-50 border border-orange-200/60 text-[11px] font-semibold text-primary uppercase tracking-wider mb-3">
              <Sparkles className="w-3 h-3 text-primary" />
              <span>Official Portal</span>
            </div>

            {/* Main title */}
            <h2 className="font-manuale text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-2">
              Welcome to ITET
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
              The Institution of Textile Engineers &amp; Technologists (ITET), Bangladesh
            </p>

            {/* Actions */}
            <div className="space-y-2.5">
              <Link
                href="/membership-overview"
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#0a1124] hover:bg-primary text-white font-semibold py-3 px-5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all duration-200 cursor-pointer active:scale-98"
              >
                <span>Become A Member</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/client-portal"
                onClick={() => setIsOpen(false)}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2.5 px-5 rounded-xl text-xs sm:text-sm flex items-center justify-center transition-colors cursor-pointer"
              >
                <span>Become a Partner</span>
              </Link>
            </div>
          </div>

          {/* Countdown timer footer */}
          <div className="mt-6 pt-3 border-t border-gray-100">
            <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1.5">
              <Clock className="w-3.5 h-3.5 text-gray-400" />
              <span>Auto-closing in {timeLeft}s</span>
            </div>
            {/* Progress Bar */}
            <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-primary h-full transition-all duration-1000 ease-linear rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Right Botanical Visual with Wave divider */}
        <div className="hidden md:block md:w-[40%] relative min-h-[380px] bg-emerald-950 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=700&q=80"
            alt="Lush Tropical Monstera Leaves"
            className="w-full h-full object-cover"
          />
          {/* SVG Wave Mask on the left edge */}
          <svg
            className="absolute -left-1 top-0 bottom-0 h-full w-10 text-white pointer-events-none fill-current"
            viewBox="0 0 40 400"
            preserveAspectRatio="none"
          >
            <path d="M 0 0 C 35 100, 5 200, 35 300 C 50 350, 20 380, 0 400 Z" />
          </svg>

          {/* Close button inside image */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile close button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="md:hidden absolute top-3 right-3 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
