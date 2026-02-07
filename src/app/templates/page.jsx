"use client";

import { templates } from "@/data/templates";
import TemplatePreview from "@/components/templates/TemplatePreview";
import Link from "next/link";

export default function TemplatesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
      <h1 className="text-2xl font-semibold mb-2">
        Resume Templates
      </h1>

      <p className="text-gray-600 mb-6">
        Choose from ATS-optimized and professional resume templates
      </p>

      {/* RESPONSIVE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {templates.map(template => (
          <div
            key={template.id}
            className="border rounded-xl overflow-hidden bg-white"
          >
            {/* PREVIEW */}
            <div className="h-40 sm:h-48 bg-gray-50">
              <TemplatePreview templateId={template.id} />
            </div>

            {/* INFO */}
            <div className="p-4">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-sm">
                  {template.name}
                </h3>

                {template.type === "ATS" && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                    ATS Optimized
                  </span>
                )}
              </div>

              <p className="text-xs text-gray-500 mt-1">
                {template.description}
              </p>

              <Link href={`/resume-builder?template=${template.id}`}>
                <button className="mt-3 w-full bg-indigo-600 text-white py-2 text-sm rounded">
                  Use Template
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
