"use client";

import { useStepper } from "@/context/ResumeStepperContext";

export default function ProjectsForm() {
  const { nextStep, prevStep } = useStepper();

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Projects</h2>

      {/* Project Card */}
      <div className="border rounded-xl p-6 mb-6">
        <div className="space-y-5">

          {/* Project Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Title
            </label>
            <input
              className="input"
              placeholder="E-commerce Platform"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              className="input h-28 resize-none"
              placeholder="Built a full-stack e-commerce platform..."
            />
          </div>

          {/* Tech Stack */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tech Stack
            </label>
            <input
              className="input"
              placeholder="React, Node.js, MongoDB"
            />
          </div>

          {/* Link */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Link
            </label>
            <input
              className="input"
              placeholder="https://project-demo.com"
            />
          </div>

          {/* Remove */}
          <button className="text-sm text-red-500 flex items-center gap-1">
            ✕ Remove
          </button>
        </div>
      </div>

      {/* Add Project */}
      <button className="w-full border-2 border-dashed rounded-xl py-4 text-sm text-gray-600 hover:bg-gray-50">
        + Add Project
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
