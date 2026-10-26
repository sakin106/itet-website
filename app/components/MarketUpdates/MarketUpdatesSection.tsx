import React from "react";
import Link from "next/link";
import { MoreVertical, ArrowRight, FlaskConical, Scissors } from "lucide-react";

interface PriceItem {
  id: string;
  name: string;
  material: string;
  price: number;
  unit: string;
}

interface MarketCategory {
  title: string;
  type: "yarn" | "chemical" | "fabric";
  linkText: string;
  viewAllLink: string;
  items: PriceItem[];
}

export function MarketUpdatesSection() {
  const categories: MarketCategory[] = [
    {
      title: "Yarn Prices",
      type: "yarn",
      linkText: "View all Yarn Prices",
      viewAllLink: "/notices",
      items: [
        { id: "y1", name: "ABC", material: "100% Cotton Yarn", price: 0, unit: "BDT/kg" },
        { id: "y2", name: "ABC", material: "100% Cotton Yarn", price: 0, unit: "BDT/kg" },
        { id: "y3", name: "ABC", material: "100% Cotton Yarn", price: 0, unit: "BDT/kg" },
        { id: "y4", name: "ABC", material: "100% Cotton Yarn", price: 0, unit: "BDT/kg" },
      ],
    },
    {
      title: "Chemical Prices",
      type: "chemical",
      linkText: "View all Chemical Prices",
      viewAllLink: "/notices",
      items: [
        { id: "c1", name: "ABC", material: "100% Cotton Yarn", price: 0, unit: "BDT/kg" },
        { id: "c2", name: "ABC", material: "100% Cotton Yarn", price: 0, unit: "BDT/kg" },
        { id: "c3", name: "ABC", material: "100% Cotton Yarn", price: 0, unit: "BDT/kg" },
        { id: "c4", name: "ABC", material: "100% Cotton Yarn", price: 0, unit: "BDT/kg" },
      ],
    },
    {
      title: "Fabrics & Accessories Prices",
      type: "fabric",
      linkText: "View all Fabrics & Accessories Prices",
      viewAllLink: "/notices",
      items: [
        { id: "f1", name: "ABC", material: "100% Cotton Yarn", price: 0, unit: "BDT/cone" },
        { id: "f2", name: "ABC", material: "100% Cotton Yarn", price: 0, unit: "BDT/cone" },
        { id: "f3", name: "ABC", material: "100% Cotton Yarn", price: 0, unit: "BDT/cone" },
        { id: "f4", name: "ABC", material: "100% Cotton Yarn", price: 0, unit: "BDT/cone" },
      ],
    },
  ];

  const renderIcon = (type: "yarn" | "chemical" | "fabric") => {
    switch (type) {
      case "chemical":
        return <FlaskConical className="w-5 h-5 text-[#854d0e]" />;
      case "fabric":
        return <Scissors className="w-5 h-5 text-[#854d0e]" />;
      case "yarn":
      default:
        return (
          <svg
            className="w-5 h-5 text-[#854d0e] fill-none stroke-current"
            viewBox="0 0 24 24"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M4.5 9c2.5 1 5 1.5 7.5 1.5s5-.5 7.5-1.5" />
            <path d="M4.5 15c2.5-1 5-1.5 7.5-1.5s5 .5 7.5 1.5" />
            <path d="M9 4.5c1 2.5 1.5 5 1.5 7.5s-.5 5-1.5 7.5" />
            <path d="M15 4.5c-1 2.5-1.5 5-1.5 7.5s.5 5 1.5 7.5" />
          </svg>
        );
    }
  };

  return (
    <section className="w-full bg-[#fbfaf6] py-14 sm:py-20 border-b border-gray-200/60">
      <div className="mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="font-manuale text-3xl sm:text-4xl lg:text-[40px] font-bold text-gray-900 tracking-tight leading-tight mb-2.5">
            Textile Market Updates
          </h2>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-normal">
            Real-Time Pricing Insights on Industry Materials.
          </p>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white rounded-2xl border border-gray-200/80 p-5 sm:p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Card Title & Icon */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#fef3c7] border border-[#fde68a] flex items-center justify-center shrink-0 shadow-2xs">
                      {renderIcon(cat.type)}
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-gray-900 leading-tight">
                      {cat.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    className="p-1 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    aria-label="More options"
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>

                {/* Price Item Rows */}
                <div className="space-y-2.5 my-3">
                  {cat.items.map((item, idx) => (
                    <div
                      key={`${item.id}-${idx}`}
                      className="p-3 rounded-xl border border-gray-100/90 bg-gray-50/70 hover:bg-orange-50/30 hover:border-orange-200/60 transition-all duration-150 flex items-center justify-between group"
                    >
                      {/* Name & Material */}
                      <div>
                        <h4 className="font-bold text-xs sm:text-sm text-gray-900 group-hover:text-primary transition-colors leading-tight">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-gray-500 mt-0.5">
                          {item.material}
                        </p>
                      </div>

                      {/* Price & Details Link */}
                      <div className="flex items-center gap-3">
                        <span className="text-xs sm:text-sm font-bold text-emerald-600">
                          {item.price}{" "}
                          <span className="text-[11px] font-medium text-gray-500">
                            {item.unit}
                          </span>
                        </span>
                        <Link
                          href="/notices"
                          className="text-xs font-semibold text-primary hover:underline transition-colors"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="pt-4 mt-2 border-t border-gray-100 text-center">
                <Link
                  href={cat.viewAllLink}
                  className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-primary-dark transition-colors group"
                >
                  <span>{cat.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
