"use client";

import { createContext, useContext, useState } from "react";

const StepperContext = createContext(null);

export function StepperProvider({ children }) {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Personal Info",
    "Education",
    "Experience",
    "Projects",
    "Skills",
    "Others",
  ];

  const nextStep = () => {
    setCurrentStep((prev) =>
      prev < steps.length - 1 ? prev + 1 : prev
    );
  };

  const prevStep = () => {
    setCurrentStep((prev) =>
      prev > 0 ? prev - 1 : prev
    );
  };

  const goToStep = (index) => {
    if (index >= 0 && index < steps.length) {
      setCurrentStep(index);
    }
  };

  return (
    <StepperContext.Provider
      value={{
        steps,
        currentStep,
        nextStep,
        prevStep,
        goToStep,
      }}
    >
      {children}
    </StepperContext.Provider>
  );
}

export function useStepper() {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error("useStepper must be used inside StepperProvider");
  }
  return context;
}
