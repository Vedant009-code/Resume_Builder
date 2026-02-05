import HomeB from "@/components/Button";
import FeatureCard from "@/components/FeatureCard";
import {
  FileText,
  CheckCircle,
  Users,
  BarChart3,
} from "lucide-react";

export default function Home (){
return(
  <div>
      <section className="bg-white">
  <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

    {/* Left Content */}
    <div>
      <h1 className="text-[44px] font-bold text-gray-900 leading-tight mb-6">
        Build Your Perfect Resume <br /> with AI
      </h1>

      <p className="text-[16px] text-gray-600 mb-8 max-w-md">
        Create professional, ATS-friendly resumes in minutes. Our AI-powered
        platform helps you stand out and land your dream job.
      </p>

      <div className="flex gap-4">
       <a href="/resume-builder"> <HomeB name=" Get Started"/></a>

        {/*<HomeB name="Shortlist Resumes"/>*/}
      </div>
    </div>

    {/* Right Image */}
    <div className="relative">
      <img
        src="/resume-preview.jpg"
        alt="Resume Preview"
        className="rounded-[16px] shadow-lg"
      />

      {/* Badge */}
      <div className="absolute top-0 right-0 bg-white px-4 py-2 rounded-[11px] shadow text-sm font-medium text-green-600">
        ✔ ATS Optimized
      </div>
    </div>

  </div>
  

  <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[40px] font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-[16px] text-gray-600">
            Everything you need to create and manage resumes
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <FeatureCard
            icon={<FileText size={22} />}
            title="Resume Builder"
            desc="Create professional resumes with our intuitive step-by-step builder"
            iconBg="bg-indigo-100"
            iconColor="text-indigo-600"
          />

          <FeatureCard
            icon={<CheckCircle size={22} />}
            title="ATS-Friendly Templates"
            desc="Templates designed to pass Applicant Tracking Systems"
            iconBg="bg-green-100"
            iconColor="text-green-600"
          />

          <FeatureCard
            icon={<Users size={22} />}
            title="Smart Shortlisting"
            desc="AI-powered candidate matching based on job requirements"
            iconBg="bg-purple-100"
            iconColor="text-purple-600"
          />

          <FeatureCard
            icon={<BarChart3 size={22} />}
            title="Resume Score"
            desc="Get instant feedback and recommendations to improve your resume"
            iconBg="bg-orange-100"
            iconColor="text-orange-600"
          />

        </div>
      </div>
</section>


<section className="bg-white pt- pb-24">

<div className="max-w-7xl mx-auto px-9">

    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="text-[36px] font-bold text-gray-900 mb-4">
        How It Works
      </h2>
      <p className="text-[16px] text-gray-600">
        Create your resume in three simple steps
      </p>
    </div>

    {/* Steps */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">

      {/* Step 1 */}
      <div>
        <div className="w-14 h-14 mx-auto rounded-full bg-indigo-600 text-white flex items-center justify-center text-[18px] font-semibold mb-6">
          1
        </div>

        <h3 className="text-[18px] font-semibold text-gray-900 mb-3">
          Enter Details
        </h3>

        <p className="text-[14px] text-gray-600 leading-relaxed max-w-xs mx-auto">
          Fill in your personal information, work experience, education, and skills
        </p>
      </div>

      {/* Step 2 */}
      <div>
        <div className="w-14 h-14 mx-auto rounded-full bg-indigo-600 text-white flex items-center justify-center text-[18px] font-semibold mb-6">
          2
        </div>

        <h3 className="text-[18px] font-semibold text-gray-900 mb-3">
          Choose Template
        </h3>

        <p className="text-[14px] text-gray-600 leading-relaxed max-w-xs mx-auto">
          Select from our collection of professional, ATS-friendly templates
        </p>
      </div>

      {/* Step 3 */}
      <div>
        <div className="w-14 h-14 mx-auto rounded-full bg-indigo-600 text-white flex items-center justify-center text-[18px] font-semibold mb-6">
          3
        </div>

        <h3 className="text-[18px] font-semibold text-gray-900 mb-3">
          Download / Shortlist
        </h3>

        <p className="text-[14px] text-gray-600 leading-relaxed max-w-xs mx-auto">
          Download your resume or use our AI shortlister to find the best candidates
        </p>
      </div>

    </div>
  </div>


</section>

</div>
);
}