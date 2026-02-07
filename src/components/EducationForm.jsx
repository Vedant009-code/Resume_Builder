"use client";

import { useResumeData } from "@/context/ResumeDataContext";
import { useStepper } from "@/context/ResumeStepperContext";

export default function EducationForm() {
  const { resumeData, setResumeData } = useResumeData();
  const { nextStep, prevStep } = useStepper();

  const edu = resumeData.education?.[0] || {
    degree: "",
    college: "",
    year: "",
    gpa: "",
  };

  const update = (field, value) => {
    setResumeData(prev => ({
      ...prev,
      education: [
        {
          ...(prev.education?.[0] || {}),
          [field]: value,
        },
      ],
    }));
  };

  return (
    <div className="bg-white rounded-xl p-4 md:p-6">
      <h2 className="font-semibold mb-4">Education</h2>

      {/* INPUT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          className="input"
          placeholder="Degree"
          value={edu.degree || ""}
          onChange={e => update("degree", e.target.value)}
        />

        <input
          className="input"
          placeholder="College / University"
          value={edu.college || ""}
          onChange={e => update("college", e.target.value)}
        />

        <input
          className="input"
          placeholder="Year (e.g. 2019 – 2023)"
          value={edu.year || ""}
          onChange={e => update("year", e.target.value)}
        />

        <input
          className="input"
          placeholder="GPA / Grade"
          value={edu.gpa || ""}
          onChange={e => update("gpa", e.target.value)}
        />
      </div>

      {/* ACTIONS */}
      <div className="flex flex-col-reverse md:flex-row md:justify-between gap-3 mt-6">
        <button
          onClick={prevStep}
          className="border px-4 py-2 rounded w-full md:w-auto"
        >
          ← Back
        </button>
        <button
          onClick={nextStep}
          className="bg-indigo-600 text-white px-6 py-2 rounded w-full md:w-auto"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
