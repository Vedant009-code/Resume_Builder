"use client";

import { useState } from "react";
import Stepper from "@/components/Stepper";
import StepContent from "@/components/StepContent";
import ResumePreview from "@/components/ResumePreview";

import { StepperProvider } from "@/context/ResumeStepperContext";
import { ResumeDataProvider } from "@/context/ResumeDataContext";

export default function ResumeBuilderPage() {
  const [showPreview, setShowPreview] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);

  return (
    <ResumeDataProvider>
      <StepperProvider>

        <div className="min-h-screen bg-gray-100">

          {/* HEADER */}
          <header className="flex items-center justify-between px-4 md:px-6 py-4 bg-white border-b">
            <h2 className="font-semibold">Resume Builder</h2>

            <button
              onClick={() =>
                window.innerWidth < 1024
                  ? setShowFullPreview(true)
                  : setShowPreview(prev => !prev)
              }
              className="bg-black text-white px-4 py-2 rounded-lg text-sm"
            >
              {showPreview ? "Hide Preview" : "Live Preview"}
            </button>
          </header>

          {/* MAIN CONTENT */}
          <div className="grid grid-cols-12 gap-6 p-4 md:p-6">

            {/* LEFT: FORM */}
            <div
              className={`
                col-span-12
                ${showPreview ? "lg:col-span-7" : ""}
              `}
            >
              <Stepper />
              <StepContent setShowFullPreview={setShowFullPreview} />
            </div>

            {/* RIGHT: SIDE PREVIEW (DESKTOP ONLY) */}
            {showPreview && (
              <div className="hidden lg:block lg:col-span-5">
                <ResumePreview />
              </div>
            )}

          </div>
        </div>

        {/* FULL SCREEN PREVIEW MODAL */}
        {showFullPreview && (
          <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
            <div className="bg-gray-100 w-full h-full lg:w-[95%] lg:h-[95%] rounded-none lg:rounded-xl overflow-hidden">

              <div className="flex justify-between items-center px-4 md:px-6 py-3 bg-white border-b">
                <h2 className="font-semibold">Resume Preview</h2>
                <button
                  onClick={() => setShowFullPreview(false)}
                  className="bg-black text-white px-4 py-2 rounded"
                >
                  Close ✕
                </button>
              </div>

              <div className="p-4 md:p-6 h-[calc(100%-64px)] overflow-auto">
                <div className="max-w-4xl mx-auto scale-95 md:scale-100 origin-top">
                  <ResumePreview />
                </div>
              </div>

            </div>
          </div>
        )}

      </StepperProvider>
    </ResumeDataProvider>
  );
}
