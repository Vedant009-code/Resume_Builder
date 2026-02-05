"use client";

import { useStepper } from "@/context/ResumeStepperContext";

export default function EducationForm() {
  const { nextStep, prevStep } = useStepper();

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Education</h2>

      {/* Education Card */}
      <div className="border rounded-xl p-5 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Degree
            </label>
            <input className="input mt-1" placeholder="Bachelor of Science" />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              College/University
            </label>
            <input className="input mt-1" placeholder="University of Example" />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Year
            </label>
            <input className="input mt-1" placeholder="2018 - 2022" />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Grade/GPA
            </label>
            <input className="input mt-1" placeholder="3.8/4.0" />
          </div>
        </div>

        <button className="text-sm text-red-500 mt-4 flex items-center gap-1">
          ✕ Remove
        </button>
      </div>

      {/* Add Education */}
      <button className="w-full border-2 border-dashed rounded-xl py-4 text-sm text-gray-600 hover:bg-gray-50">
        + Add Education
      </button>

      {/* Bottom Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={prevStep}
          className="border px-6 py-2 rounded-lg text-sm"
        >
          ← Back
        </button>

        <button
          onClick={nextStep}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
