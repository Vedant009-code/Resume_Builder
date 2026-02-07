"use client";

import { useResumeData } from "@/context/ResumeDataContext";
import { useStepper } from "@/context/ResumeStepperContext";

export default function PersonalInfoForm() {
  const { resumeData, setResumeData } = useResumeData();
  const { nextStep } = useStepper();

  const update = (field, value) => {
    setResumeData((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        [field]: value,
      },
    }));
  };

  const p = resumeData.personal;

  return (
    <div className="bg-white rounded-xl p-4 md:p-6">
      <h2 className="font-semibold mb-4">Personal Information</h2>

      {/* INPUT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          className="input"
          placeholder="Full Name"
          value={p.fullName || ""}
          onChange={(e) => update("fullName", e.target.value)}
        />

        <input
          className="input"
          placeholder="Email"
          value={p.email || ""}
          onChange={(e) => update("email", e.target.value)}
        />

        <input
          className="input"
          placeholder="Phone"
          value={p.phone || ""}
          onChange={(e) => update("phone", e.target.value)}
        />

        <input
          className="input"
          placeholder="LinkedIn"
          value={p.linkedin || ""}
          onChange={(e) => update("linkedin", e.target.value)}
        />

        <input
          className="input md:col-span-2"
          placeholder="GitHub"
          value={p.github || ""}
          onChange={(e) => update("github", e.target.value)}
        />
      </div>

      {/* SUMMARY */}
      <textarea
        className="input mt-4 h-24 md:h-28"
        placeholder="Professional summary..."
        value={p.summary || ""}
        onChange={(e) => update("summary", e.target.value)}
      />

      {/* ACTION */}
      <div className="flex justify-end mt-6">
        <button
          onClick={nextStep}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg w-full md:w-auto"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
