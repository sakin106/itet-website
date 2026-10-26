import React from "react";
import { Handshake } from "lucide-react";

export function CorporatePartners() {
  const partners = [
    {
      name: "EMMTEX SOLUTIONS BD LTD.",
      tag: "Innovative Solutions for Textile Processing",
      color: "from-blue-600 to-indigo-700",
    },
    {
      name: "Knit Empir Ltd.",
      tag: "A House of Quality Knit Product",
      color: "from-rose-600 to-red-700",
    },
    {
      name: "Texpro Worldnol",
      tag: "Competitive Edge Textile Machinery",
      color: "from-emerald-600 to-teal-700",
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-xs">
      <div className="flex items-center gap-2 mb-3 text-xs font-semibold text-gray-700">
        <Handshake className="w-4 h-4 text-primary" />
        <span>We are proud to work with our valued partners</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="flex items-center gap-2.5 p-2 rounded-xl border border-gray-100 bg-gray-50/60 hover:bg-white hover:border-gray-200 hover:shadow-xs transition-all duration-200"
          >
            <div
              className={`w-9 h-9 rounded-lg bg-gradient-to-br ${partner.color} flex items-center justify-center text-white font-black text-xs shrink-0 shadow-2xs`}
            >
              {partner.name.slice(0, 2).toUpperCase()}
            </div>
            <div className="min-w-0">
              <h5 className="text-xs font-bold text-gray-900 truncate">
                {partner.name}
              </h5>
              <p className="text-[10px] text-gray-500 truncate">
                {partner.tag}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
