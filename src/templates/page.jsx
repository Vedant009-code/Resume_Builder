"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TemplatesPage() {
  const router = useRouter();
  const [filter, setFilter] = useState("all");

  const templates = [
    { id: "modern", name: "Modern Resume", ats: true },
    { id: "professional", name: "Professional Resume", ats: true },
    { id: "minimal", name: "Minimal Resume", ats: true },
    { id: "creative", name: "Creative Resume", ats: false },
  ];

  const filteredTemplates = templates.filter((t) => {
    if (filter === "ats") return t.ats;
    if (filter === "creative") return !t.ats;
    return true;
  });

  const useTemplate = (templateId) => {
    router.push(`/resume-builder?template=${templateId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-8 py-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Resume Templates
        </h1>
        <p className="text-gray-600 mt-2">
          Choose from ATS-optimized and professional resume templates
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto flex gap-3 mb-8">
        {[
          { key: "all", label: "All" },
          { key: "ats", label: "ATS Friendly" },
          { key: "creative", label: "Creative" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`px-4 py-2 rounded-lg text-sm border ${
              filter === tab.key
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Templates Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredTemplates.map((template) => (
          <div
            key={template.id}
            className="bg-white rounded-2xl border shadow-sm hover:shadow-lg transition overflow-hidden"
          >
            {/* Preview */}
            <div className="relative h-52 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400 text-sm">
                Resume Preview
              </span>

              {template.ats && (
                <span className="absolute top-3 right-3 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  ✓ ATS Optimized
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">
                {template.name}
              </h3>

              <p className="text-sm text-gray-500 mt-1 mb-4">
                Optimized for recruiters & ATS systems
              </p>

              <button
                onClick={() => useTemplate(template.id)}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm font-medium transition"
              >
                Use Template
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
