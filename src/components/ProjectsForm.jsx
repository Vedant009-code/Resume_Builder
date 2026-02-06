"use client";

import { useResumeData } from "@/context/ResumeDataContext";
import { useStepper } from "@/context/ResumeStepperContext";

export default function ProjectsForm() {
  const { resumeData, setResumeData } = useResumeData();
  const { nextStep, prevStep } = useStepper();

  const project = resumeData.projects[0];

  const update = (field, value) => {
    setResumeData((prev) => ({
      ...prev,
      projects: [
        {
          ...prev.projects[0],
          [field]: value,
        },
      ],
    }));
  };

  return (
    <div className="bg-white rounded-xl p-6">
      <h2 className="font-semibold mb-4">Projects</h2>

      <div className="grid grid-cols-2 gap-4">

  <input
    className="input col-span-2"
    placeholder="Project Title"
    value={project.title || ""}
    onChange={(e) => update("title", e.target.value)}
  />

  <textarea
    className="input col-span-2 h-28"
    placeholder="Project Description"
    value={project.description || ""}
    onChange={(e) => update("description", e.target.value)}
  />

  <input
    className="input"
    placeholder="Tech Stack (React, Node.js, MongoDB)"
    value={project.tech || ""}
    onChange={(e) => update("tech", e.target.value)}
  />

  <input
    className="input"
    placeholder="Project Link"
    value={project.link || ""}
    onChange={(e) => update("link", e.target.value)}
  />

</div>


      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          className="border px-4 py-2 rounded-lg"
        >
          ← Back
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
