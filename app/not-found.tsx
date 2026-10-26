"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Header } from "@/app/components/Header";
import { ArrowLeft } from "lucide-react";

export default function PlaceholderPage() {
  const pathname = usePathname();
  const location = { pathname: pathname || "" };
  const pageName = location.pathname.replace(/^\//, "").replace(/-/g, " ");

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-primary selection:text-white flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-16 text-center flex flex-col items-center justify-center">
        <span className="text-xs font-bold uppercase tracking-widest text-primary bg-orange-50 px-3 py-1 rounded-full border border-orange-200/60 mb-3">
          Page Under Construction
        </span>
        <h1 className="font-manuale text-3xl sm:text-4xl font-bold text-gray-900 capitalize mb-4">
          {pageName || "Page"}
        </h1>
        <p className="text-sm text-gray-500 max-w-md mx-auto mb-8">
          This page route is registered and ready for inner-page content implementation in upcoming steps.
        </p>
        <Link href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary hover:bg-primary text-white text-xs font-semibold transition-colors shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </main>
    </div>
  );
}
