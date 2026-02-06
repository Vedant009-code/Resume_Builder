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
          <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
           {/*<a
              href="/dashboard"
              className="text-sm text-gray-600 hover:text-black"
            >
              ← Back to Dashboard
            </a>*/}

            <h2 className="font-semibold">Resume Builder</h2>

            <button
              onClick={() => setShowPreview(prev => !prev)}
              className="bg-black text-white px-4 py-2 rounded-lg text-sm"
            >
              {showPreview ? "Hide Preview" : "Live Preview"}
            </button>
          </header>

          {/* MAIN CONTENT */}
          <div className="grid grid-cols-12 gap-6 p-6">

            {/* LEFT: FORM */}
            <div className={showPreview ? "col-span-7" : "col-span-12"}>
              <Stepper />
              <StepContent setShowFullPreview={setShowFullPreview} />
            </div>

            {/* RIGHT: SIDE PREVIEW */}
            {showPreview && (
              <div className="col-span-5">
                <ResumePreview />
              </div>
            )}

          </div>
        </div>

        {/* FULL SCREEN PREVIEW MODAL */}
        {showFullPreview && (
          <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
            <div className="bg-gray-100 w-[95%] h-[95%] rounded-xl overflow-hidden">

              <div className="flex justify-between items-center px-6 py-3 bg-white border-b">
                <h2 className="font-semibold">Resume Preview</h2>
                <button
                  onClick={() => setShowFullPreview(false)}
                  className="bg-black text-white px-4 py-2 rounded"
                >
                  Close ✕
                </button>
              </div>

              <div className="p-6 h-[calc(100%-64px)] overflow-auto">
                <div className="max-w-4xl mx-auto">
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
