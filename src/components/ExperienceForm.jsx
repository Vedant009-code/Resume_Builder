"use client";

import { useStepper } from "@/context/ResumeStepperContext";

export default function ExperienceForm() {
  const { nextStep, prevStep } = useStepper();

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Work Experience</h2>

      {/* Experience Card */}
      <div className="border rounded-xl p-6 mb-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-5">

          {/* Job Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Title
            </label>
            <input
              className="input"
              placeholder="Software Engineer"
            />
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company
            </label>
            <input
              className="input"
              placeholder="Tech Corp"
            />
          </div>

          {/* Duration */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Duration
            </label>
            <input
              className="input max-w-sm"
              placeholder="Jan 2022 - Present"
            />
          </div>

          {/* Key Responsibilities */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Key Responsibilities
            </label>
            <textarea
              className="input h-32 resize-none"
              placeholder="• Developed and maintained web applications..."
            />
          </div>
        </div>

        {/* Actions */}
        <div className="mt-4 space-y-3">
          <button className="text-sm text-indigo-600">
            + Add Bullet Point
          </button>

          <button className="text-sm text-red-500 flex items-center gap-1">
            ✕ Remove
          </button>
        </div>
      </div>

      {/* Add Experience */}
      <button className="w-full border-2 border-dashed rounded-xl py-4 text-sm text-gray-600 hover:bg-gray-50">
        + Add Experience
      </button>

      {/* Bottom Navigation */}
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
