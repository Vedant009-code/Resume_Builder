"use client";

import { useStepper } from "@/context/ResumeStepperContext";
import PersonalInfoForm from "@/components/PersonalInfoForm";
import EducationForm from "@/components/EducationForm";
import ExperienceForm from "@/components/ExperienceForm";
import ProjectsForm from "@/components/ProjectsForm";
import SkillsForm from "@/components/SkillsForm";
import OthersForm from "@/components/OthersForm";

export default function StepContent() {
  const { currentStep } = useStepper();

  switch (currentStep) {
    case 0:
      return <PersonalInfoForm />;

    case 1:
      return <EducationForm />;

    case 2:
      return <ExperienceForm />;

    case 3:
      return <ProjectsForm />; // ✅ PROJECTS

    case 4:
      return <SkillsForm />;

    case 5:
      return <OthersForm />;

    default:
      return null;
  }
}
