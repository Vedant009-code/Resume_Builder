"use client";

import { useState } from "react";
import { useStepper } from "@/context/ResumeStepperContext";

export default function OthersForm() {
  const { prevStep } = useStepper();
  const [items, setItems] = useState([
    "AWS Certified Solutions Architect",
  ]);

  const addItem = () => {
    setItems([...items, ""]);
  };

  const updateItem = (index, value) => {
    const updated = [...items];
    updated[index] = value;
    setItems(updated);
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-6">
        Certifications & Achievements
      </h2>

      {/* List */}
      <div className="space-y-4 mb-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3"
          >
            <input
              value={item}
              onChange={(e) =>
                updateItem(index, e.target.value)
              }
              className="input flex-1"
              placeholder="Enter certification or achievement"
            />
            <button
              onClick={() => removeItem(index)}
              className="text-red-500 text-lg"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {/* Add Button */}
      <button
        onClick={addItem}
        className="w-full border-2 border-dashed rounded-xl py-4 text-sm text-gray-600 hover:bg-gray-50 mb-8"
      >
        + Add Certification/Achievement
      </button>

      {/* Bottom Buttons */}
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="border px-6 py-2 rounded-lg text-sm"
        >
          ← Back
        </button>

        <button className="bg-green-600 text-white px-6 py-2 rounded-lg text-sm flex items-center gap-1">
          Preview Full Screen →
        </button>
      </div>
    </div>
  );
}
