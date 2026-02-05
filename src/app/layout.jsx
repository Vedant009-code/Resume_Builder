import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HomeB from "@/components/Button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ResumeAI",
  description: "AI Resume Builder & Shortlister",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* ================= NAVBAR ================= */}
        <header>
          <nav className="bg-white text-black shadow-[0_4px_10px_rgba(0,0,0,0.45)]">
            <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
              
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-md bg-indigo-600 flex items-center justify-center text-white font-bold">
                  AI
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  ResumeAI
                </span>
              </div>

              {/* Nav Links */}
              <div className="hidden md:flex gap-8 text-sm font-medium">
                <a className="hover:text-indigo-600" href="/">Home</a>
                <a className="hover:text-indigo-600" href="/resume-builder">Resume Builder</a>
                {/*<a className="hover:text-indigo-600" href="#">Shortlister</a>*/}
                <a className="hover:text-indigo-600" href="/templates">Templates</a>
                <a className="hover:text-indigo-600" href="/login">Login</a>
              </div>

              
            </div>
          </nav>
        </header>

        {/* ================= PAGE CONTENT ================= */}
        <main className="flex-1">
          {children}
        </main>

        {/* ================= FOOTER ================= */}
        <footer className="bg-gradient-to-r from-[#0B1220] to-[#0E1629] text-white">
          <div className="max-w-7xl mx-auto px-6 py-14">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
              
              {/* Brand */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-md bg-indigo-600 flex items-center justify-center font-bold">
                    AI
                  </div>
                  <span className="text-[18px] font-semibold">ResumeAI</span>
                </div>
                <p className="text-[14px] text-gray-400">
                  Build professional resumes with AI-powered tools
                </p>
              </div>

              {/* Product */}
              <div>
                <h4 className="text-[15px] font-semibold mb-4">Product</h4>
                <ul className="space-y-2 text-[14px] text-gray-400">
                  <li>Resume Builder</li>
                  <li>Templates</li>
                  <li>Shortlister</li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-[15px] font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-[14px] text-gray-400">
                  <li>About Us</li>
                  <li>Contact</li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-[15px] font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-[14px] text-gray-400">
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                  <li>Cookie Policy</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 mt-12 pt-6 flex justify-between items-center">
              <p className="text-[13px] text-gray-400">
                © 2026 ResumeAI. All rights reserved.
              </p>
            </div>

          </div>
        </footer>
      </body>
    </html>
  );
}
