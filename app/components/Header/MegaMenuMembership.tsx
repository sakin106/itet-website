import React from "react";
import Link from "next/link";
import {
  Award,
  Sparkles,
  UserCheck,
  RefreshCw,
  LogIn,
  ArrowRight,
} from "lucide-react";
import { AdSpaceSquare } from "./AdSpaceSquare";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenuMembership({ isOpen, onClose }: MegaMenuProps) {
  if (!isOpen) return null;

  const membershipLinks = [
    {
      title: "Membership Overview",
      to: "/membership-overview",
      icon: Award,
    },
    {
      title: "Members Benefits",
      to: "/members-benifits",
      icon: Sparkles,
    },
    {
      title: "General Membership",
      to: "/membership-overview",
      icon: UserCheck,
    },
    {
      title: "Renew Membership",
      to: "/membership-login",
      icon: RefreshCw,
    },
    {
      title: "Member Login",
      badge: "Portal",
      to: "/membership-login",
      icon: LogIn,
    },
  ];

  return (
    <div
      className="absolute top-full left-0 w-full bg-white border-b border-gray-200/90 shadow-2xl z-40 animate-in fade-in slide-in-from-top-2 duration-200"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Left Column: Info, Links, and Leader Message */}
          <div className="col-span-8 flex flex-col justify-between">
            <div>
              {/* Header Badge & Title */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Membership
                </span>
                <span className="text-xs text-gray-400 font-medium">
                  • Welcome to ITET
                </span>
              </div>
              <h3 className="font-manuale text-2xl font-bold text-gray-900 leading-tight mb-2">
                Uniting Textile Professionals. Advancing Industry.
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-2xl mb-6">
                Connect with thousands of textile engineers, gain accredited
                recognition, and elevate your professional career nationwide.
              </p>

              {/* Navigation Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {membershipLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.title}
                      href={item.to}
                      onClick={onClose}
                      className="group flex items-center justify-between p-3 rounded-lg border border-gray-100 bg-gray-50/60 hover:bg-orange-50/50 hover:border-orange-200/70 transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-white border border-gray-200/70 flex items-center justify-center text-gray-700 group-hover:text-primary group-hover:border-primary/40 transition-colors shadow-2xs">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-gray-800 group-hover:text-primary transition-colors">
                            {item.title}
                          </span>
                          {item.badge && (
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-orange-100 text-primary px-1.5 py-0.5 rounded">
                              {item.badge}
                            </span>
                          )}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Secretary General Message Card */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-gray-900 via-gray-850 to-gray-900 text-white flex items-center gap-4 border border-gray-800 shadow-md">
              <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-white/20 bg-gray-800 shadow">
                <img
                  src="/assets/secretary.jpg"
                  alt="Engr. A.S.M Hafizur Rahman Nixon"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400 block mb-0.5">
                  Secretary General, ITET's Message
                </span>
                <p className="text-xs font-semibold text-gray-100 italic line-clamp-1">
                  "Reform, Modernization & Global Recognition"
                </p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-xs font-bold text-white">
                    Engr. A.S.M Hafizur Rahman Nixon
                  </span>
                  <span className="text-[11px] text-gray-400">
                    • Secretary General, ITET
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Square Ad Space */}
          <div className="col-span-4 flex justify-center items-center">
            <AdSpaceSquare />
          </div>
        </div>
      </div>
    </div>
  );
}
