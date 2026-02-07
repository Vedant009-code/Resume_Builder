"use client";

import { useResumeData } from "@/context/ResumeDataContext";
import { useStepper } from "@/context/ResumeStepperContext";

export default function OthersForm({ setShowFullPreview }) {
  const { resumeData, setResumeData } = useResumeData();
  const { prevStep } = useStepper();

  const certifications = resumeData.others || [""];

  const updateCert = (index, value) => {
    const updated = [...certifications];
    updated[index] = value;

    setResumeData(prev => ({
      ...prev,
      others: updated,
    }));
  };

  const addCert = () => {
    setResumeData(prev => ({
      ...prev,
      others: [...(prev.others || []), ""],
    }));
  };

  const removeCert = index => {
    setResumeData(prev => ({
      ...prev,
      others: prev.others.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="bg-white rounded-xl p-4 md:p-6">
      <h2 className="font-semibold mb-4">
        Certifications & Achievements
      </h2>

      {/* CERTIFICATIONS */}
      {certifications.map((cert, i) => (
        <div
          key={i}
          className="flex flex-col sm:flex-row gap-2 mb-3"
        >
          <input
            className="input flex-1"
            placeholder="AWS Certified Solutions Architect"
            value={cert || ""}
            onChange={e => updateCert(i, e.target.value)}
          />
          <button
            onClick={() => removeCert(i)}
            className="text-red-500 text-sm self-start sm:self-center"
          >
            ✕
          </button>
        </div>
      ))}

      <button
        onClick={addCert}
        className="text-indigo-600 text-sm mb-6"
      >
        + Add Certification / Achievement
      </button>

      {/* ACTIONS */}
      <div className="flex flex-col-reverse md:flex-row md:justify-between gap-3">
        <button
          onClick={prevStep}
          className="border px-4 py-2 rounded w-full md:w-auto"
        >
          ← Back
        </button>

        <button
          onClick={() => setShowFullPreview(true)}
          className="bg-green-600 text-white px-6 py-2 rounded w-full md:w-auto"
        >
          Preview Full Screen →
        </button>
      </div>
    </div>
  );
}
