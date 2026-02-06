"use client";

import { useResumeData } from "@/context/ResumeDataContext";
import { useStepper } from "@/context/ResumeStepperContext";

export default function OthersForm({setShowFullPreview }) {
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
    <div className="bg-white rounded-xl p-6">
      <h2 className="font-semibold mb-4">
        Certifications & Achievements
      </h2>

      {certifications.map((cert, i) => (
        <div key={i} className="flex gap-2 mb-3">
          <input
            className="input flex-1"
            placeholder="AWS Certified Solutions Architect"
            value={cert || ""}
            onChange={e => updateCert(i, e.target.value)}
          />
          <button
            onClick={() => removeCert(i)}
            className="text-red-500 text-sm"
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

      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="border px-4 py-2 rounded"
        >
          ← Back
        </button>

        <button 
         onClick={() => setShowFullPreview(true)}
        className="bg-green-600 text-white px-6 py-2 rounded">
          Preview Full Screen →
        </button>
      </div>
    </div>
  );
}
