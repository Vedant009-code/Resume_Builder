"use client";

export default function TemplatePreview({ templateId }) {
  return (
    <div className="h-full bg-white p-4 text-xs text-gray-700">
      <div className="font-bold text-sm mb-1">John Doe</div>
      <div className="text-[10px] mb-2">Software Engineer</div>

      <div className="border-t pt-1 mb-1 font-semibold">Summary</div>
      <p className="text-[10px] mb-2">
        Experienced software engineer with 5+ years of experience...
      </p>

      <div className="border-t pt-1 mb-1 font-semibold">Experience</div>
      <p className="text-[10px]">Senior Software Engineer</p>

      <div className="border-t pt-1 mt-2 font-semibold">Education</div>
      <p className="text-[10px]">B.Tech Computer Science</p>

      {templateId === "" && (
        <div className="mt-2 text-indigo-600 font-semibold">
          ✦ Creative Style
        </div>
      )}
    </div>
  );
}
