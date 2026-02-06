"use client";

import { createContext, useContext, useState } from "react";

const ResumeDataContext = createContext(null);

const INITIAL_DATA = {
  personal: {
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    summary: "",
  },
  education: [
    { degree: "", college: "", year: "", gpa: "" },
  ],
  experience: [
    { title: "", company: "", duration: "", bullets: [""] },
  ],
  projects: [
    { title: "", description: "", tech: "", link: "" },
  ],
  skills: [],
  others: [], // ✅ REQUIRED FOR CERTIFICATIONS
};




export function ResumeDataProvider({ children }) {
  const [resumeData, setResumeData] = useState(INITIAL_DATA);

  return (
    <ResumeDataContext.Provider value={{ resumeData, setResumeData }}>
      {children}
    </ResumeDataContext.Provider>
  );
}

export function useResumeData() {
  const context = useContext(ResumeDataContext);
  if (!context) {
    throw new Error(
      "useResumeData must be used inside ResumeDataProvider"
    );
  }
  return context;
}
