"use client";

import { useStepper } from "@/context/ResumeStepperContext";
import PersonalInfoForm from "@/components/PersonalInfoForm";
import EducationForm from "@/components/EducationForm";
import ExperienceForm from "@/components/ExperienceForm";
import ProjectsForm from "@/components/ProjectsForm";
import SkillsForm from "@/components/SkillsForm";
import OthersForm from "@/components/OthersForm";

export default function StepContent({ setShowFullPreview }) {
  const { currentStep } = useStepper();

  switch (currentStep) {
    case 0:
      return <PersonalInfoForm />;

    case 1:
      return <EducationForm />;

    case 2:
      return <ExperienceForm />;

    case 3:
      return <ProjectsForm />;

    case 4:
      return <SkillsForm />;

    case 5:
      return <OthersForm setShowFullPreview={setShowFullPreview} />;

    default:
      return null;
  }
}
