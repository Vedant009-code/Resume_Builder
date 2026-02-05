export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r flex flex-col justify-between">
      <div>
        <div className="px-6 py-5 font-semibold text-indigo-600">
          ResumeAI
        </div>

        <nav className="px-4 space-y-1 text-sm">
          {[
            "Dashboard",
            "My Resumes",
            "Create Resume",
            "Shortlister",
            "Templates",
            "Profile",
          ].map((item) => (
            <button
              key={item}
              className={`w-full text-left px-4 py-2 rounded-lg ${
                item === "Dashboard"
                  ? "bg-indigo-50 text-indigo-600 font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      <div className="px-6 py-4 text-sm text-gray-500">
        Logout
      </div>
    </aside>
  );
}
