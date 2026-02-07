"use client";

import { useResumeData } from "@/context/ResumeDataContext";

export default function ResumePreview({ template }) {
  const { resumeData } = useResumeData();
  const { personal, education } = resumeData;

  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 shadow-md h-full w-full overflow-hidden">

      {/* ================= HEADER ================= */}
      <div>
        <h2 className="text-lg md:text-xl font-bold break-words">
          {personal.fullName || "John Doe"}
        </h2>

        {/* CONTACT */}
        <div className="text-xs text-gray-500 mt-1 flex flex-wrap gap-x-2 gap-y-1 break-all">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>• {personal.phone}</span>}
          {personal.linkedin && <span>• {personal.linkedin}</span>}
          {personal.github && <span>• {personal.github}</span>}
        </div>
      </div>

      <hr className="my-4" />

      {/* ================= SUMMARY ================= */}
      {personal.summary && (
        <section className="mb-4">
          <h3 className="text-sm font-semibold mb-1">Summary</h3>
          <p className="text-sm text-gray-700 leading-relaxed break-words">
            {personal.summary}
          </p>
        </section>
      )}

      {/* ================= EDUCATION ================= */}
      {education?.length > 0 && education[0].degree ? (
        <section className="mb-4">
          <h3 className="text-sm font-semibold mb-2">Education</h3>

          {education.map((edu, index) => (
            <div key={index} className="mb-2 text-sm">
              <div className="flex flex-col sm:flex-row sm:justify-between font-medium gap-1">
                <span className="break-words">{edu.degree}</span>
                <span className="text-gray-500 text-xs sm:text-sm">
                  {edu.year}
                </span>
              </div>

              <div className="text-gray-700 break-words">
                {edu.college}
              </div>

              {edu.gpa && (
                <div className="text-xs text-gray-500">
                  GPA: {edu.gpa}
                </div>
              )}
            </div>
          ))}
        </section>
      ) : (
        <section className="mb-4">
          <h3 className="text-sm font-semibold mb-1">Education</h3>
          <p className="text-sm text-gray-500">
            Education details will appear here.
          </p>
        </section>
      )}

      {/* ================= EXPERIENCE ================= */}
      {resumeData.experience?.length > 0 &&
      resumeData.experience[0].title ? (
        <section className="mb-6">
          <h3 className="text-sm font-semibold mb-3 border-b pb-1">
            Experience
          </h3>

          {resumeData.experience.map((exp, index) => (
            <div key={index} className="mb-4 text-sm">

              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="font-medium break-words">
                  {exp.title}
                </span>
                <span className="text-xs text-gray-500">
                  {exp.duration}
                </span>
              </div>

              <div className="text-gray-700 italic mb-1 break-words">
                {exp.company}
              </div>

              <ul className="list-disc ml-4 sm:ml-5 space-y-1 text-gray-700">
                {exp.bullets
                  .filter(b => b.trim() !== "")
                  .map((b, i) => (
                    <li key={i} className="break-words">
                      {b}
                    </li>
                  ))}
              </ul>

            </div>
          ))}
        </section>
      ) : (
        <section className="mb-6">
          <h3 className="text-sm font-semibold mb-1">
            Experience
          </h3>
          <p className="text-sm text-gray-500">
            Experience details will appear here.
          </p>
        </section>
      )}

      {/* ================= PROJECTS ================= */}
      {resumeData.projects?.length > 0 &&
      resumeData.projects[0].title ? (
        <section className="mb-6">
          <h3 className="text-sm font-semibold mb-3 border-b pb-1">
            Projects
          </h3>

          {resumeData.projects.map((proj, index) => (
            <div key={index} className="mb-4 text-sm">

              <div className="font-medium text-gray-900 break-words">
                {proj.title}
              </div>

              {proj.tech && (
                <div className="text-xs text-gray-600 mt-0.5 break-words">
                  <span className="font-medium">Tech:</span> {proj.tech}
                </div>
              )}

              {proj.description && (
                <p className="text-gray-700 mt-1 leading-relaxed break-words">
                  {proj.description}
                </p>
              )}

              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 underline mt-1 inline-block break-all"
                >
                  {proj.link}
                </a>
              )}

            </div>
          ))}
        </section>
      ) : (
        <section className="mb-6">
          <h3 className="text-sm font-semibold mb-1">Projects</h3>
          <p className="text-sm text-gray-500">
            Project details will appear here.
          </p>
        </section>
      )}

      {/* ================= SKILLS ================= */}
      {Array.isArray(resumeData.skills) && resumeData.skills.length > 0 && (
        <section className="mt-4">
          <h3 className="font-semibold text-sm border-b pb-1 mb-2">
            Skills
          </h3>
          <p className="text-sm text-gray-800 break-words">
            {resumeData.skills.join(", ")}
          </p>
        </section>
      )}

      {/* ================= CERTIFICATIONS ================= */}
      {Array.isArray(resumeData.others) && resumeData.others.length > 0 && (
        <section className="mt-4">
          <h3 className="font-semibold text-sm border-b pb-1 mb-2">
            Certifications & Achievements
          </h3>

          <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
            {resumeData.others.map((item, index) => (
              <li key={index} className="break-words">
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

    </div>
  );
}
