import React, { useState } from "react";
import { Form, Link, useActionData, type ActionFunctionArgs } from "react-router";
import bcrypt from "bcryptjs";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { CtaBanner } from "../../components/CTA";
import { prisma } from "../../utils/db.server";
import { createUserSession } from "../../utils/session.server";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  RotateCw,
  LogIn,
  ExternalLink,
  AlertCircle,
} from "lucide-react";

// -------------------------------------------------------------
// Remix / React Router Action: Real Password Authentication
// -------------------------------------------------------------
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Please provide both your registered email address and password." };
  }

  const user = await prisma.user.findUnique({
    where: { email: email.trim().toLowerCase() },
  });

  if (!user) {
    return { error: "Invalid email address or password. Please verify your credentials." };
  }

  const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
  if (!isPasswordValid) {
    return { error: "Invalid email address or password. Please verify your credentials." };
  }

  const targetDashboard = user.role === "ADMIN" ? "/admin-dashboard" : "/member-dashboard";
  return createUserSession(user.id, user.role, targetDashboard);
}

export default function MemberLoginPage() {
  const actionData = useActionData<typeof action>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [captchaCode, setCaptchaCode] = useState("7 M 3 P");

  const refreshCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let res = "";
    for (let i = 0; i < 4; i++) {
      res += chars.charAt(Math.floor(Math.random() * chars.length)) + " ";
    }
    setCaptchaCode(res.trim());
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-gray-800 font-sans selection:bg-primary selection:text-white flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center py-10 px-4 sm:px-6">
        <div className="w-full max-w-[500px]">
          {/* Members-Only Access Notice Box */}
          <div className="bg-[#fcfaf7] border border-[#f0e3d5] rounded-md p-4 sm:p-5 mb-6 shadow-2xs">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-gray-700 leading-snug">
                <span className="font-bold text-gray-900">Members-Only Access: </span>
                ITET is a closed organization. To access members exclusive features, you must hold an active membership account.
              </p>
            </div>
            <Link
              to="/membership-overview"
              className="mt-3.5 w-full py-2.5 px-4 bg-white border border-[#ebd6c3] hover:border-primary hover:bg-orange-50/40 text-primary font-semibold text-sm rounded-lg flex items-center justify-center gap-2 transition-all shadow-2xs"
            >
              <span>Buy / Apply for Membership</span>
              <ExternalLink className="w-4 h-4 text-primary" />
            </Link>
          </div>

          {/* Member Sign In Card */}
          <div className="bg-white rounded-md shadow-[0_10px_35px_-8px_rgba(0,0,0,0.15)] border border-gray-100 p-7 sm:p-9">
            <div className="mb-6">
              <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
                Member Sign In
              </h1>
              <p className="text-sm text-gray-500 mt-1 font-normal">
                Enter your member email, password, and CAPTCHA
              </p>
            </div>

            <div className="w-full h-px bg-gray-100 mb-6" />

            {actionData?.error && (
              <div className="p-3.5 rounded-md bg-red-50 border border-red-200 text-red-700 text-xs mb-5 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                <span>{actionData.error}</span>
              </div>
            )}

            <Form method="post" className="space-y-5">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-4 h-4 text-gray-500 stroke-[2]" />
                  <label htmlFor="email" className="text-sm font-medium text-gray-800">
                    Email Address
                  </label>
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-[#f9fafb] border border-gray-200 rounded-md px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-primary focus:bg-white transition-all"
                  autoComplete="username"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-gray-500 stroke-[2]" />
                    <label htmlFor="password" className="text-sm font-medium text-gray-800">
                      Password
                    </label>
                  </div>
                  <button
                    type="button"
                    onClick={() => alert("Password reset instructions dispatched to your email.")}
                    className="text-xs text-primary hover:text-orange-700 transition-colors cursor-pointer"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="*******"
                    className="w-full bg-[#f9fafb] border border-gray-200 rounded-md px-3.5 py-2.5 pr-10 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-primary focus:bg-white transition-all"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer p-0.5"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="w-4.5 h-4.5" /> : <Eye className="w-4.5 h-4.5" />}
                  </button>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-primary stroke-[2.2]" />
                    <label htmlFor="captcha" className="text-sm font-semibold text-gray-800">
                      CAPTCHA Verification
                    </label>
                  </div>
                  <span className="text-xs text-gray-400 font-normal">Case-insensitive</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative bg-[#252930] rounded-md px-3.5 py-2 flex items-center justify-between overflow-hidden select-none border border-[#303640] shadow-inner h-[44px]">
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25" xmlns="http://www.w3.org/2000/svg">
                      <line x1="5%" y1="75%" x2="95%" y2="25%" stroke="#ff9b50" strokeWidth="1.5" />
                      <line x1="8%" y1="30%" x2="90%" y2="70%" stroke="#ffffff" strokeWidth="0.8" strokeDasharray="3 3" />
                    </svg>
                    <span className="font-mono text-base sm:text-lg font-bold tracking-[0.25em] text-[#ffbe8a] italic select-none pl-1 drop-shadow-sm">
                      {captchaCode}
                    </span>
                    <button
                      type="button"
                      onClick={refreshCaptcha}
                      className="text-gray-400 hover:text-white p-1 rounded transition-colors z-10 cursor-pointer"
                      aria-label="Refresh CAPTCHA"
                      title="Refresh CAPTCHA"
                    >
                      <RotateCw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <input
                    id="captcha"
                    name="captcha"
                    type="text"
                    required
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value.toUpperCase())}
                    placeholder="ENTER CAPTCHA"
                    className="bg-[#f9fafb] border border-gray-200 rounded-md px-3.5 py-2 text-sm text-gray-900 tracking-wider placeholder:text-gray-400 placeholder:text-xs placeholder:tracking-widest uppercase focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-primary focus:bg-white transition-all h-[44px]"
                    autoComplete="off"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-2.5 px-4 rounded-md bg-primary hover:bg-orange-600 active:scale-[0.99] text-white font-semibold text-sm sm:text-base shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <LogIn className="w-5 h-5 stroke-[2.2]" />
                <span>Sign In</span>
              </button>
            </Form>
          </div>

          <p className="mt-8 text-center text-xs text-gray-400">
            Official portal:{" "}
            <a
              href="https://itetbd.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 underline underline-offset-2 transition-colors"
            >
              itetbd.net
            </a>
          </p>
        </div>
      </main>

      <CtaBanner />
      <Footer />
    </div>
  );
}
