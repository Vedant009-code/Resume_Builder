"use client";

import { StepperProvider } from "@/context/ResumeStepperContext";
import Stepper from "@/components/Stepper";
import StepContent from "@/components/StepContent";
import ResumePreview from "@/components/ResumePreview";
import { useSearchParams } from "next/navigation";

export default function ResumeBuilderPage() {
  const searchParams = useSearchParams();
  const selectedTemplate = searchParams.get("template") || "modern";

  return (
    <StepperProvider>
      <div className="min-h-screen bg-gray-100">

        {/* Top Bar */}
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
          <a href="/dashboard">
            <button className="text-sm text-gray-600 hover:text-black">
              ← Back to Dashboard
            </button>
          </a>

          <h2 className="font-semibold">
            Resume Builder ({selectedTemplate})
          </h2>

          <div className="flex gap-3">
            <button className="text-sm border px-4 py-2 rounded-lg">
              Save Draft
            </button>
            <button className="text-sm bg-black text-white px-4 py-2 rounded-lg">
              Show Preview
            </button>
          </div>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-12 gap-6 p-6">

          {/* Left Section */}
          <div className="col-span-7">
            <Stepper />
            <StepContent />
          </div>

          {/* Right Section */}
          <div className="col-span-5">
            <ResumePreview template={selectedTemplate} />
          </div>

        </div>
      </div>
    </StepperProvider>
  );
}
