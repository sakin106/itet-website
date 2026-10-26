import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function TopUtilityBar() {
  return (
    <>
      {/* Desktop Top Utility Bar */}
      <div className="hidden xl:block bg-secondary text-white text-[13px] border-b border-gray-800/40">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-4 sm:px-6 lg:px-8">
          {/* Left contact info */}
          <div className="flex items-center gap-6 text-gray-300">
            <span className="flex items-center gap-2 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>House #6, Road #2, Sector #11, Uttara, Dhaka.</span>
            </span>
            <a
              href="mailto:info@itetbd.net"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>info@itetbd.net</span>
            </a>
            <a
              href="tel:+8801715771454"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>+880 1715-771454</span>
            </a>
          </div>

          {/* Right portals and social links */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4 font-medium">
              <Link
                href="/member-portal"
                className="hover:text-primary transition-colors"
              >
                Members Portal
              </Link>
              <Link
                href="/client-portal"
                className="hover:text-primary transition-colors"
              >
                Advertiser Portal
              </Link>
              <Link
                href="/contact"
                className="hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
            </div>

            <span className="text-gray-600">|</span>

            {/* Social Icons */}
            <div className="flex items-center gap-3 text-white">
              <a
                href="https://www.facebook.com/groups/itetbd/?ref=share&mibextid=KtfwRi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-primary transition-transform hover:-translate-y-0.5 duration-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 320 512">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-primary transition-transform hover:-translate-y-0.5 duration-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 448 512">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-primary transition-transform hover:-translate-y-0.5 duration-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
                className="hover:text-primary transition-transform hover:-translate-y-0.5 duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 576 512">
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet / Mid-screen Compact Strip */}
      <div className="hidden lg:flex xl:hidden bg-gray-50/90 px-4 py-2 justify-center border-b border-gray-100">
        <div className="flex items-center gap-4 text-xs font-medium text-gray-600">
          <a
            href="tel:+8801715771454"
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-primary" />
            <span>+880 1715-771454</span>
          </a>
          <span className="text-gray-300">|</span>
          <a
            href="mailto:info@itetbd.net"
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-primary" />
            <span>info@itetbd.net</span>
          </a>
        </div>
      </div>
    </>
  );
}
