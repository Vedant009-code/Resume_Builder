"use client";

import { useResumeData } from "@/context/ResumeDataContext";
import { useStepper } from "@/context/ResumeStepperContext";

export default function ExperienceForm() {
  const { resumeData, setResumeData } = useResumeData();
  const { nextStep, prevStep } = useStepper();

  const exp = resumeData.experience?.[0] || {
    title: "",
    company: "",
    duration: "",
    bullets: [""],
  };

  const update = (field, value) => {
    setResumeData(prev => ({
      ...prev,
      experience: [
        {
          ...(prev.experience?.[0] || {}),
          [field]: value,
        },
      ],
    }));
  };

  const updateBullet = (index, value) => {
    const bullets = [...(exp.bullets || [])];
    bullets[index] = value;
    update("bullets", bullets);
  };

  const addBullet = () => {
    update("bullets", [...(exp.bullets || []), ""]);
  };

  return (
    <div className="bg-white rounded-xl p-4 md:p-6">
      <h2 className="font-semibold mb-4">Work Experience</h2>

      {/* INPUT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          className="input"
          placeholder="Job Title"
          value={exp.title || ""}
          onChange={e => update("title", e.target.value)}
        />

        <input
          className="input"
          placeholder="Company"
          value={exp.company || ""}
          onChange={e => update("company", e.target.value)}
        />

        <input
          className="input md:col-span-2"
          placeholder="Duration (e.g. Jan 2022 – Present)"
          value={exp.duration || ""}
          onChange={e => update("duration", e.target.value)}
        />
      </div>

      {/* RESPONSIBILITIES */}
      <div className="mt-4">
        <label className="text-sm font-medium">
          Responsibilities
        </label>

        {(exp.bullets || []).map((bullet, i) => (
          <textarea
            key={i}
            className="input mt-2 h-20 md:h-24"
            placeholder="• Built scalable frontend features"
            value={bullet || ""}
            onChange={e => updateBullet(i, e.target.value)}
          />
        ))}

        <button
          type="button"
          onClick={addBullet}
          className="text-indigo-600 text-sm mt-2"
        >
          + Add Bullet
        </button>
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
