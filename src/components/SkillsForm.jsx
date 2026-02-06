"use client";

import { useState } from "react";
import { useResumeData } from "@/context/ResumeDataContext";
import { useStepper } from "@/context/ResumeStepperContext";

export default function SkillsForm() {
  const { resumeData, setResumeData } = useResumeData();
  const { nextStep, prevStep } = useStepper();
  const [skillInput, setSkillInput] = useState("");

  const addSkill = () => {
    if (!skillInput.trim()) return;

    setResumeData(prev => ({
      ...prev,
      skills: [...(prev.skills || []), skillInput.trim()], // ✅ SAFE
    }));

    setSkillInput("");
  };

  const removeSkill = index => {
    setResumeData(prev => ({
      ...prev,
      skills: (prev.skills || []).filter((_, i) => i !== index), // ✅ SAFE
    }));
  };

  return (
    <div className="bg-white p-6 rounded-lg border">
      <h3 className="font-semibold mb-4">Skills</h3>

      <div className="flex gap-2">
        <input
          className="input flex-1"
          placeholder="Enter a skill"
          value={skillInput}
          onChange={e => setSkillInput(e.target.value)}
        />
        <button
          onClick={addSkill}
          className="bg-indigo-600 text-white px-4 rounded"
        >
          + Add
        </button>
      </div>

      {/* Skill Chips */}
      <div className="flex flex-wrap gap-2 mt-4">
        {(resumeData.skills || []).map((skill, index) => ( // ✅ SAFE
          <span
            key={index}
            className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm flex items-center gap-2"
          >
            {skill}
            <button
              onClick={() => removeSkill(index)}
              className="text-indigo-500 hover:text-red-500"
            >
              ×
            </button>
          </span>
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          className="border px-4 py-2 rounded"
        >
          ← Back
        </button>
        <button
          onClick={nextStep}
          className="bg-indigo-600 text-white px-5 py-2 rounded"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
