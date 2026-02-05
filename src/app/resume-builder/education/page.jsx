"use client";

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-[#F4F6FB]">

      {/* TOP BAR */}
      <div className="bg-white border-b">
        <div className="max-w-[1600px] mx-auto px-[32px] h-[64px] flex items-center justify-between">
          <span className="text-sm text-gray-500 cursor-pointer">
            ← Back to Dashboard
          </span>

          <div className="flex items-center gap-4">
            <button className="text-sm text-gray-600">Save Draft</button>
            <button className="h-[36px] px-4 rounded-[8px] border text-sm">
              Show Preview
            </button>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-[1600px] mx-auto px-[32px] py-[32px]
                      grid grid-cols-[820px_1fr] gap-[40px]">

        {/* ================= LEFT SIDE ================= */}
        <div>

          {/* STEPPER */}
          <div className="flex items-center gap-[20px] mb-[24px]">
            {[
              "Personal Info",
              "Education",
              "Experience",
              "Projects",
              "Skills",
              "Others",
            ].map((step, index) => (
              <div key={step} className="flex items-center gap-[8px]">
                <div
                  className={`w-[26px] h-[26px] rounded-full flex items-center justify-center text-[12px] font-semibold
                  ${
                    index === 1
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {index + 1}
                </div>
                <span className="text-[12px] text-gray-600">
                  {step}
                </span>
              </div>
            ))}
          </div>

          {/* EDUCATION CARD */}
          <div className="bg-white rounded-[16px] border border-gray-200 p-[36px]">

            <h2 className="text-[20px] font-semibold mb-[24px]">
              Education
            </h2>

            {/* EDUCATION FORM */}
            <div className="bg-white border border-gray-200 rounded-[14px] p-[24px]">

              <div className="grid grid-cols-2 gap-[20px]">
                <div>
                  <label className="text-[13px] text-gray-700 mb-1 block">
                    Degree
                  </label>
                  <input
                    className="h-[44px] w-full px-[14px] border rounded-[10px] text-[14px]"
                    placeholder="Bachelor of Science"
                  />
                </div>

                <div>
                  <label className="text-[13px] text-gray-700 mb-1 block">
                    College/University
                  </label>
                  <input
                    className="h-[44px] w-full px-[14px] border rounded-[10px] text-[14px]"
                    placeholder="University of Example"
                  />
                </div>

                <div>
                  <label className="text-[13px] text-gray-700 mb-1 block">
                    Year
                  </label>
                  <input
                    className="h-[44px] w-full px-[14px] border rounded-[10px] text-[14px]"
                    placeholder="2018 - 2022"
                  />
                </div>

                <div>
                  <label className="text-[13px] text-gray-700 mb-1 block">
                    Grade/GPA
                  </label>
                  <input
                    className="h-[44px] w-full px-[14px] border rounded-[10px] text-[14px]"
                    placeholder="3.8 / 4.0"
                  />
                </div>
              </div>

              {/* REMOVE */}
              <button className="text-red-500 text-[14px] mt-[16px] flex items-center gap-1">
                ✕ Remove
              </button>
            </div>

            {/* ADD EDUCATION */}
            <button
              className="
                w-full mt-[24px]
                h-[56px]
                border-2 border-dashed border-gray-300
                rounded-[14px]
                flex items-center justify-center
                text-[15px] text-gray-700
                hover:bg-gray-50
              "
            >
              + Add Education
            </button>

            {/* ACTIONS */}
            <div className="flex justify-between items-center mt-[32px]">
              <button className="h-[44px] px-[20px] rounded-[10px] border text-[14px]">
                ← Back
              </button>

              <button
                className="
                  h-[44px]
                  px-[32px]
                  bg-indigo-600
                  text-white
                  text-[14px]
                  font-semibold
                  rounded-[10px]
                "
              >
                Next →
              </button>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE (LIVE PREVIEW) ================= */}
        <div className="bg-[#EEF1F7] rounded-[16px] p-[24px]">

          <p className="text-[14px] text-gray-600 mb-[12px]">
            Live Preview
          </p>

          <div className="bg-white rounded-[16px] p-[36px] min-h-[900px] shadow-sm">

            <h1 className="text-[24px] font-bold">
              John Doe
            </h1>
            <p className="text-[14px] text-gray-600 mb-[16px]">
              Software Engineer
            </p>

            <div className="text-[13px] text-gray-600 mb-[20px] space-y-1">
              <div>john@example.com &nbsp; | &nbsp; +1 234 567 8900</div>
              <div>linkedin.com/in/johndoe</div>
              <div>github.com/johndoe</div>
            </div>

            <hr className="my-[20px]" />

            <h3 className="text-[16px] font-semibold mb-[6px]">
              Summary
            </h3>
            <p className="text-[14px] text-gray-600">
              Experienced software engineer with 5+ years of experience
              building scalable web applications.
            </p>

            <h3 className="text-[16px] font-semibold mt-[24px] mb-[6px]">
              Experience
            </h3>
            <p className="text-[14px] font-medium">
              Senior Software Engineer
            </p>
            <p className="text-[13px] text-gray-600 mb-[8px]">
              Tech Corp &nbsp; | &nbsp; Jan 2022 – Present
            </p>
            <ul className="list-disc ml-[18px] text-[14px] text-gray-600">
              <li>Developed and maintained web applications</li>
              <li>Led team of 5 developers</li>
            </ul>

            <h3 className="text-[16px] font-semibold mt-[24px] mb-[6px]">
              Education
            </h3>
            <p className="text-[14px] font-medium">
              Bachelor of Science in Computer Science
            </p>
            <p className="text-[13px] text-gray-600">
              University of Example &nbsp; | &nbsp; 2018 – 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
