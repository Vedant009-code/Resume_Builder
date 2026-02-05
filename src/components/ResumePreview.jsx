"use client";

export default function ResumePreview({ template }) {
  const templateStyles = {
    modern: "font-sans",
    professional: "font-serif",
    minimal: "font-light",
    creative: "bg-gray-50",
  };

  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-md h-full ${
        templateStyles[template] || ""
      }`}
    >
      <h2 className="text-xl font-bold">John Doe</h2>
      <p className="text-sm text-gray-500 mb-2">
        Software Engineer
      </p>

      <p className="text-xs text-gray-500 mb-4">
        john@example.com · +1 234 567 8900
      </p>

      <hr className="my-4" />

      <p className="text-sm text-gray-700">
        This preview is using the{" "}
        <span className="font-semibold">{template}</span> template.
      </p>
    </div>
  );
}
