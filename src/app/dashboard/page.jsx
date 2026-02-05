"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import StatsCards from "@/components/dashboard/StatsCards";
import RecentResumes from "@/components/dashboard/RecentResumes";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-semibold">
              Welcome back, John!
            </h1>
            <p className="text-sm text-gray-500">
              Here&apos;s what&apos;s happening with your resumes today
            </p>
          </div>

          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm">
            + Create New Resume
          </button>
        </div>

        <StatsCards />
        <RecentResumes />
      </div>
    </div>
  );
}
