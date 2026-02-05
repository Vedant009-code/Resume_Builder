"use client";

import { useState } from "react";
import { useStepper } from "@/context/ResumeStepperContext";

export default function SkillsForm() {
  const { nextStep, prevStep } = useStepper();
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([
    "React",
    "TypeScript",
    "Node.js",
    "Python",
  ]);

  const addSkill = () => {
    if (!skill.trim()) return;
    setSkills([...skills, skill.trim()]);
    setSkill("");
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Skills</h2>

      {/* Add Skills */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Add Skills
        </label>

        <div className="flex gap-3">
          <input
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            className="input flex-1"
            placeholder="Enter a skill"
          />
          <button
            onClick={addSkill}
            className="bg-indigo-600 text-white px-5 rounded-lg text-sm flex items-center gap-1"
          >
            + Add
          </button>
        </div>
      </div>

      {/* Skills Chips */}
      <div className="flex flex-wrap gap-3 mb-3">
        {skills.map((s, index) => (
          <span
            key={index}
            className="flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-lg text-sm"
          >
            {s}
            <button
              onClick={() => removeSkill(index)}
              className="text-indigo-500 hover:text-indigo-700"
            >
              ×
            </button>
          </span>
        ))}
      </div>

      <p className="text-sm text-gray-500 mb-8">
        Drag and drop to reorder skills
      </p>

      {/* Bottom Buttons */}
      <div className="flex justify-between">
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
