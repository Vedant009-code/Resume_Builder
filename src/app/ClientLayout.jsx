"use client";

import { useState } from "react";

export default function ClientLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header>
        <nav className="bg-white shadow-[0_4px_10px_rgba(0,0,0,0.45)]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 h-[72px] flex items-center justify-between">

            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-indigo-600 flex items-center justify-center text-white font-bold">
                AI
              </div>
              <span className="text-lg font-semibold text-gray-900">
                ResumeAI
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex gap-8 text-sm font-medium">
              <a href="/" className="hover:text-indigo-600">Home</a>
              <a href="/resume-builder" className="hover:text-indigo-600">Resume Builder</a>
              <a href="/templates" className="hover:text-indigo-600">Templates</a>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden border px-3 py-1 rounded"
            >
              ☰
            </button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden border-t px-4 py-4 space-y-3 text-sm font-medium bg-white">
              <a href="/" onClick={() => setOpen(false)} className="block">Home</a>
              <a href="/resume-builder" onClick={() => setOpen(false)} className="block">Resume Builder</a>
              <a href="/templates" onClick={() => setOpen(false)} className="block">Templates</a>
            </div>
          )}
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

            <div>
              <h4 className="text-[15px] font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-[14px] text-gray-400">
                <li>Resume Builder</li>
                <li>Templates</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[15px] font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-[14px] text-gray-400">
                <li>About Us</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[15px] font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-[14px] text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-6 text-center text-[13px] text-gray-400">
            © 2026 ResumeAI. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
