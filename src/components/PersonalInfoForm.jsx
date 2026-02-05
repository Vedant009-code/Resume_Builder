"use client";
import { useStepper } from "@/context/ResumeStepperContext";

export default function PersonalInfoForm() {
  const { nextStep, prevStep } = useStepper();

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="font-semibold mb-4">Personal Information</h3>

      <div className="grid grid-cols-2 gap-4">
        <input className="input" placeholder="Full Name" />
        <input className="input" placeholder="Email" />
        <input className="input" placeholder="Phone" />
        <input className="input" placeholder="LinkedIn" />
        <textarea
          className="input col-span-2 h-28"
          placeholder="Professional summary..."
        />
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          className="border px-4 py-2 rounded-lg"
        >
          Back
        </button>

        <button
          onClick={nextStep}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
