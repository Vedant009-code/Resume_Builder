"use client";
import { useStepper } from "@/context/ResumeStepperContext";

export default function Stepper() {
  const { steps, currentStep, goToStep } = useStepper();

  return (
    <div className="mb-6 overflow-x-auto">
      <div className="flex items-center gap-4 min-w-max px-1">
        {steps.map((step, index) => (
          <button
            key={step}
            onClick={() => goToStep(index)}
            className="flex items-center gap-2 shrink-0"
          >
            {/* STEP CIRCLE */}
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

            {/* STEP LABEL (HIDDEN ON MOBILE) */}
            <span
              className={`text-sm hidden sm:inline ${
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
    </div>
  );
}
