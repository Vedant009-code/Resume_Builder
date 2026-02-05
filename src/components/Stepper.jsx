"use client";
import { useStepper } from "@/context/ResumeStepperContext";

export default function Stepper() {
  const { steps, currentStep, goToStep } = useStepper();

  return (
    <div className="flex items-center gap-4 mb-6">
      {steps.map((step, index) => (
        <button
          key={step}
          onClick={() => goToStep(index)}
          className="flex items-center gap-2"
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm
              ${
                index === currentStep
                  ? "bg-indigo-600 text-white"
                  : index < currentStep
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
          >
            {index + 1}
          </div>
          <span
            className={`text-sm ${
              index === currentStep
                ? "font-semibold text-black"
                : "text-gray-600"
            }`}
          >
            {step}
          </span>
        </button>
      ))}
    </div>
  );
}
