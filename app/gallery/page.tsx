"use client";

import React, { useState } from "react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { CtaBanner } from "@/app/components/CTA";
import { X, ZoomIn } from "lucide-react";

export default function GalleryPage() {
  const [activePhoto, setActivePhoto] = useState<any | null>(null);

  const CDN = "https://res.cloudinary.com/dov6k7xdk/image/upload";

  const photos = [
    {
      id: "1",
      image: `${CDN}/v1786968419/dpwfafgh6ox4kau3zo9y.jpg`,
      title: "ITET Curated Leadership Moment at National Council",
      category: "Highlights",
      date: "August 2026",
    },
    {
      id: "2",
      image: `${CDN}/v1786968268/kzyv31tazjvtpmnhp2ci.jpg`,
      title: "Textile Today features newly elected 15th Council Committee of ITET",
      category: "Council",
      date: "July 2026",
    },
    {
      id: "3",
      image: `${CDN}/v1786622571/rznb5zh4zfcwdym1vpc4.jpg`,
      title: "Warmest Congratulations to the Newly Elected ITET 15th Council Committee",
      category: "Council",
      date: "June 2026",
    },
    {
      id: "4",
      image: `${CDN}/v1786623204/omwhwr5woifwj17nl3se.jpg`,
      title: "IEB Central Leaders and newly elected ITET Executive Committee in view-exchange summit",
      category: "Summits",
      date: "02 August 2026",
    },
    {
      id: "5",
      image: `${CDN}/v1786622893/my8ajrl1bi360rubdto2.jpg`,
      title: "ITET officially submits comprehensive textile policy paper to Honorable Prime Minister's office",
      category: "Policy",
      date: "29 July 2026",
    },
    {
      id: "6",
      image: `${CDN}/v1787392520/fchpbtayxgoihujbolap.jpg`,
      title: "Historic MoU signing between ITET and Textile Industry Entities for research & development",
      category: "Industry",
      date: "August 2026",
    },
    {
      id: "7",
      image: `${CDN}/v1786622438/gzldzflekiej6bkxqid7.jpg`,
      title: "Ceremonial felicitation of newly elected ITET Council members following historic election",
      category: "Council",
      date: "14 July 2026",
    },
    {
      id: "8",
      image: `${CDN}/v1786622156/i7vsh7brluqn4q2bztss.jpg`,
      title: "Official Handover & Takeover Ceremony marking transition to the 15th Central Council",
      category: "Council",
      date: "18 July 2026",
    },
    {
      id: "9",
      image: `${CDN}/v1786619036/jggfrdrnp18ujbzim1wk.jpg`,
      title: "Delegation led by President Engr. Md. Enayet Hossain meets Minister of Textiles and Jute",
      category: "Policy",
      date: "27 July 2026",
    },
    {
      id: "10",
      image: `${CDN}/v1786615736/ra4bglla1m7y0iwx6q4d.jpg`,
      title: "15th Council of ITET organizes discussion meeting and du'a program for July Movement martyrs",
      category: "Memorial",
      date: "01 August 2026",
    },
    {
      id: "11",
      image: `${CDN}/v1786615640/ktvkf8w4w6zkf1odcknj.jpg`,
      title: "Fraternal assembly and commemorative prayers with national engineering colleagues",
      category: "Memorial",
      date: "01 August 2026",
    },
    {
      id: "12",
      image: `${CDN}/v1786622571/rznb5zh4zfcwdym1vpc4.jpg`,
      title: "Grand reception for 15th Council hosted by Engr. Abdus Sobhan, CIP",
      category: "Receptions",
      date: "14 July 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5] text-gray-900 font-sans selection:bg-primary selection:text-white flex flex-col">
      <Header />

      {/* 1. Light/Cream Hero Banner */}
      <section className="relative pt-12 pb-10 sm:pt-16 sm:pb-12 overflow-hidden bg-gradient-to-b from-amber-500/[0.04] via-transparent to-transparent">
        <div className="mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="max-w-4xl mx-auto text-center">
            {/* Top Badge/Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-2xs border border-gray-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-800">
                ITET VISUAL ARCHIVES
              </span>
              <span className="text-gray-300 font-light">|</span>
              <span className="text-[10px] md:text-xs text-gray-500 font-medium">
                46 Photographs
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold font-manuale tracking-tight text-[#1e293b] leading-[1.15]">
              Moments, Milestones <br />
              <span className="text-primary font-bold">&amp; Memories</span> of ITET
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Main Gallery Section */}
      <main className="flex-1 pb-16">
        <div className="mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          {/* Sub-header Area: Left-aligned count */}
          <div className="mb-6 text-xs sm:text-sm text-gray-500 font-normal">
            Showing <strong className="font-semibold text-gray-800">22</strong> of 46 curated moments
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setActivePhoto(photo)}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-gray-200/90 shadow-2xs hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Subtle hover overlay with expand action & title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                    <div className="self-end">
                      <span className="w-8 h-8 rounded-full bg-white/90 text-gray-800 flex items-center justify-center shadow-md">
                        <ZoomIn className="w-4 h-4 text-primary" />
                      </span>
                    </div>
                    <div className="text-white">
                      <span className="text-[11px] text-amber-300 font-semibold block mb-0.5">
                        {photo.date}
                      </span>
                      <p className="text-xs sm:text-sm font-medium line-clamp-2 leading-snug">
                        {photo.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {activePhoto && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
              onClick={() => setActivePhoto(null)}
            >
              <div
                className="relative max-w-4xl w-full bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setActivePhoto(null)}
                  className="absolute top-4 right-4 z-10 p-2 text-white/80 hover:text-white bg-black/50 hover:bg-black/80 rounded-full cursor-pointer transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={activePhoto.image}
                    alt={activePhoto.title}
                    className="max-h-[75vh] w-auto object-contain"
                  />
                </div>

                <div className="p-6 bg-neutral-900 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-primary px-2.5 py-0.5 rounded bg-primary/10 border border-primary/20">
                      {activePhoto.category}
                    </span>
                    <span className="text-xs text-neutral-400">{activePhoto.date}</span>
                  </div>
                  <h3 className="font-manuale text-lg sm:text-xl font-bold">
                    {activePhoto.title}
                  </h3>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <CtaBanner />
      <Footer />
    </div>
  );
}
