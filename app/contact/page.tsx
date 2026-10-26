"use client";

import React, { useState } from "react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { CtaBanner } from "@/app/components/CTA";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Headphones,
  Package,
  HelpCircle,
  User,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        reason: "",
        subject: "",
        message: "",
      });
    }, 4000);
  };

  return (
    <div className="bg-[#f7f5ef] min-h-screen text-gray-800 font-sans selection:bg-primary selection:text-white flex flex-col">
      <Header />

      {/* 1. Light Theme Hero Section */}
      <section className="relative pt-12 pb-10 sm:pt-16 sm:pb-14 border-b border-gray-200/70 overflow-hidden bg-gradient-to-b from-amber-500/[0.04] via-transparent to-transparent">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-xs">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-700">
                Contact ITET
              </span>
              <span className="text-gray-300">|</span>
              <span className="text-xs text-gray-500 font-medium">
                Secretariat &amp; Inquiries
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold font-manuale tracking-tight text-gray-800 leading-tight">
              Get in Touch <br className="hidden sm:inline" />
              <span className="text-primary font-semibold">&amp; Contact Secretariat</span> of ITET
            </h1>

            <p className="text-gray-600 text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
              Have questions about membership, events, or collaboration? Reach out to the Institution of Textile Engineers &amp; Technologists. We are here to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 flex-1">
        {/* 4 Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 md:mb-14">
          {/* Card 1: Address */}
          <div className="bg-white rounded-md p-6 border border-gray-200 shadow-2xs hover:shadow-md hover:border-primary/50 transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 rounded-md bg-orange-50 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <MapPin className="w-5 h-5 stroke-[2]" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1 capitalize">ADDRESS</h3>
              <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                Visit our central office for inquiries &amp; paperwork
              </p>
            </div>
            <div className="space-y-2 pt-3 border-t border-gray-100">
              <a
                href="https://maps.google.com/?q=House+%236,+Road+%232,+Sector+%2311,+Uttara,+Dhaka"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-xs font-medium text-gray-700 hover:text-primary transition-colors group/link"
              >
                <MapPin className="w-3.5 h-3.5 text-gray-400 mr-2 shrink-0 group-hover/link:text-primary" />
                <span className="truncate group-hover/link:underline">
                  House #6, Road #2, Sector #11, Uttara, Dhaka.
                </span>
                <ArrowUpRight className="w-3 h-3 ml-1 opacity-60 text-gray-400 group-hover/link:text-primary shrink-0" />
              </a>
            </div>
          </div>

          {/* Card 2: General Support */}
          <div className="bg-white rounded-md p-6 border border-gray-200 shadow-2xs hover:shadow-md hover:border-primary/50 transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 rounded-md bg-orange-50 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <Headphones className="w-5 h-5 stroke-[2]" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1 capitalize">General Support</h3>
              <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                Help with membership portal, account &amp; services
              </p>
            </div>
            <div className="space-y-2 pt-3 border-t border-gray-100">
              <a
                href="mailto:info@itetbd.net"
                className="flex items-center text-xs font-medium text-gray-700 hover:text-primary transition-colors group/link"
              >
                <Mail className="w-3.5 h-3.5 text-gray-400 mr-2 shrink-0 group-hover/link:text-primary" />
                <span className="truncate group-hover/link:underline">info@itetbd.net</span>
              </a>
              <a
                href="tel:+8801715771454"
                className="flex items-center text-xs font-medium text-gray-700 hover:text-primary transition-colors group/link"
              >
                <Phone className="w-3.5 h-3.5 text-gray-400 mr-2 shrink-0 group-hover/link:text-primary" />
                <span className="truncate group-hover/link:underline">+880 1715-771454</span>
              </a>
            </div>
          </div>

          {/* Card 3: Advertisement Support */}
          <div className="bg-white rounded-md p-6 border border-gray-200 shadow-2xs hover:shadow-md hover:border-primary/50 transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 rounded-md bg-orange-50 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <Package className="w-5 h-5 stroke-[2]" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1 capitalize">Advertisement Support</h3>
              <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                Help with membership portal, account &amp; services
              </p>
            </div>
            <div className="space-y-2 pt-3 border-t border-gray-100">
              <a
                href="mailto:pressnpublication@itetbd.net"
                className="flex items-center text-xs font-medium text-gray-700 hover:text-primary transition-colors group/link"
              >
                <Mail className="w-3.5 h-3.5 text-gray-400 mr-2 shrink-0 group-hover/link:text-primary" />
                <span className="truncate group-hover/link:underline">pressnpublication@itetbd.net</span>
              </a>
              <a
                href="tel:+8801715771454"
                className="flex items-center text-xs font-medium text-gray-700 hover:text-primary transition-colors group/link"
              >
                <Phone className="w-3.5 h-3.5 text-gray-400 mr-2 shrink-0 group-hover/link:text-primary" />
                <span className="truncate group-hover/link:underline">+8801715771454</span>
              </a>
            </div>
          </div>

          {/* Card 4: General Correspondence */}
          <div className="bg-white rounded-md p-6 border border-gray-200 shadow-2xs hover:shadow-md hover:border-primary/50 transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 rounded-md bg-orange-50 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <HelpCircle className="w-5 h-5 stroke-[2]" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1 capitalize">General Correspondence</h3>
              <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                Direct communications with General Secretariat
              </p>
            </div>
            <div className="space-y-2 pt-3 border-t border-gray-100">
              <a
                href="mailto:secretarygeneral@itetbd.net"
                className="flex items-center text-xs font-medium text-gray-700 hover:text-primary transition-colors group/link"
              >
                <Mail className="w-3.5 h-3.5 text-gray-400 mr-2 shrink-0 group-hover/link:text-primary" />
                <span className="truncate group-hover/link:underline">secretarygeneral@itetbd.net</span>
              </a>
              <a
                href="tel:+8801715771454"
                className="flex items-center text-xs font-medium text-gray-700 hover:text-primary transition-colors group/link"
              >
                <Phone className="w-3.5 h-3.5 text-gray-400 mr-2 shrink-0 group-hover/link:text-primary" />
                <span className="truncate group-hover/link:underline">+8801715771454</span>
              </a>
            </div>
          </div>
        </div>

        {/* Form & Office Location Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-md p-6 sm:p-8 border border-gray-200 shadow-xs">
              <div className="mb-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Direct Inquiry
                </span>
                <h2 className="text-2xl font-semibold text-gray-900 mt-1">Send us a Message</h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Fill out the form below and our administrative team will get back to you promptly.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-4 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm">
                  Thank you! Your message has been sent to ITET Secretariat. We will get back to you shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-gray-800 mb-1.5">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter your name"
                          className="w-full bg-[#f9fafb] border border-gray-200 rounded-md pl-9 pr-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-primary focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-gray-800 mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@domain.com"
                          className="w-full bg-[#f9fafb] border border-gray-200 rounded-md pl-9 pr-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-primary focus:bg-white transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-gray-800 mb-1.5">
                        Mobile Number <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Enter your valid mobile number"
                          className="w-full bg-[#f9fafb] border border-gray-200 rounded-md pl-9 pr-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-primary focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="reason" className="block text-xs font-medium text-gray-800 mb-1.5">
                        Reason for Contact <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                          <HelpCircle className="w-4 h-4" />
                        </div>
                        <select
                          id="reason"
                          name="reason"
                          required
                          value={formData.reason}
                          onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                          className="w-full bg-[#f9fafb] border border-gray-200 rounded-md pl-9 pr-8 py-2.5 text-sm text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-primary focus:bg-white transition-all appearance-none cursor-pointer"
                        >
                          <option value="" disabled>Select a reason...</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Membership & Renewal">Membership &amp; Renewal</option>
                          <option value="Welfare Trust Support">Welfare Trust Support</option>
                          <option value="Events & Seminars">Events &amp; Seminars</option>
                          <option value="Sponsorship & Partnership">Sponsorship &amp; Partnership</option>
                          <option value="Verification & Credentials">Verification &amp; Credentials</option>
                          <option value="Other">Other Reason</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-gray-800 mb-1.5">
                      Subject
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="What is your message regarding?"
                        className="w-full bg-[#f9fafb] border border-gray-200 rounded-md pl-9 pr-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-primary focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-gray-800 mb-1.5">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your inquiry or feedback here..."
                      className="w-full bg-[#f9fafb] border border-gray-200 rounded-md p-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-primary focus:bg-white transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-2.5 bg-secondary hover:bg-primary active:scale-[0.99] text-white font-semibold text-sm rounded-md shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Office Location Column */}
          <div className="lg:col-span-5 bg-white rounded-md p-6 sm:p-8 border border-gray-200 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Location &amp; Hours
              </span>
              <h2 className="text-2xl font-semibold text-gray-900 mt-1">Visit Our Office</h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1 mb-5">
                Visit our secretariat in Uttara for in-person support, registration, and consultations.
              </p>

              <div className="space-y-3 mb-6 bg-[#fbfbfb] p-3.5 rounded-md border border-gray-100">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="font-semibold text-gray-900">ITET Central Secretariat</p>
                    <p className="text-gray-600">House #6, Road #2, Sector #11, Uttara, Dhaka.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="font-semibold text-gray-900">Office Working Hours</p>
                    <p className="text-gray-600">Saturday – Thursday: 10:00 AM – 6:00 PM</p>
                    <p className="text-gray-400">Friday: Weekly Holiday</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-64 sm:h-72 rounded-md overflow-hidden border border-gray-200 shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.4043469632947!2d90.39230761536281!3d23.875698584547876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5d05e7074dd%3A0x4aa30e180871c5b6!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1691234567890!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="ITET Office Location"
              />
              <a
                href="https://maps.google.com/?q=House+%236,+Road+%232,+Sector+%2311,+Uttara,+Dhaka"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-md p-2.5 shadow-md border border-gray-100 flex items-center justify-between gap-2 hover:bg-white transition-all text-xs"
              >
                <div className="flex items-center gap-2 truncate">
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="font-semibold text-gray-800 truncate">
                    House #6, Road #2, Sector #11, Uttara, Dhaka.
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 font-semibold text-primary shrink-0">
                  Get Directions <ArrowUpRight className="w-3 h-3" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <CtaBanner />
      <Footer />
    </div>
  );
}
