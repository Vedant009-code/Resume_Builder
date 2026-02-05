export default function StatsCards() {
  const stats = [
    { label: "Total Resumes", value: "8", change: "+12%" },
    { label: "Resume Score", value: "92/100", change: "+8%" },
    { label: "Downloads", value: "156", change: "+24%" },
    { label: "Last Updated", value: "2 hours ago", change: "This month" },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      {stats.map((s, i) => (
        <div
          key={i}
          className="bg-white border rounded-xl p-4"
        >
          <div className="flex justify-between text-sm text-gray-500 mb-1">
            <span>{s.label}</span>
            <span className="text-green-600">
              {s.change}
            </span>
          </div>
          <div className="text-xl font-semibold">
            {s.value}
          </div>
        </div>
      ))}
    </div>
  );
}
