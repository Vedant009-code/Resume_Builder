export default function RecentResumes() {
  const resumes = [
    {
      title: "Software Engineer Resume",
      updated: "Updated 2 hours ago",
      score: "92/100",
    },
    {
      title: "Product Manager CV",
      updated: "Updated 1 day ago",
      score: "88/100",
    },
    {
      title: "Marketing Resume",
      updated: "Updated 3 days ago",
      score: "85/100",
    },
  ];

  return (
    <div className="bg-white border rounded-xl p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold">
          Recent Resumes
        </h2>
        <button className="text-sm text-indigo-600">
          View All
        </button>
      </div>

      <div className="space-y-3">
        {resumes.map((r, i) => (
          <div
            key={i}
            className="flex items-center justify-between border rounded-lg px-4 py-3"
          >
            <div>
              <p className="text-sm font-medium">
                {r.title}
              </p>
              <p className="text-xs text-gray-500">
                {r.updated}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-green-600">
                {r.score}
              </span>
              <button className="border px-3 py-1 rounded text-xs">
                Edit
              </button>
              <button className="bg-indigo-600 text-white px-3 py-1 rounded text-xs">
                Download
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Create New */}
      <div className="mt-4 border-2 border-dashed rounded-lg py-6 text-center text-sm text-gray-500">
        + Create New Resume
      </div>
    </div>
  );
}
