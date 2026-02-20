"use client";

export default function AboutPlatformDiagram() {
  const areas = [
    { icon: "✈️", label: "Travel & Guests" },
    { icon: "🏠", label: "Owners & Properties" },
    { icon: "🤝", label: "Agents & Partners" },
    { icon: "🔧", label: "Service Providers" },
    { icon: "🏢", label: "PMCs" },
  ];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-800">The ClickyTour Ecosystem</h3>
      <div className="space-y-2">
        {areas.map((a) => (
          <div key={a.label} className="flex items-center gap-3 rounded-lg bg-teal-50 px-3 py-2">
            <span className="text-lg">{a.icon}</span>
            <span className="text-xs font-semibold text-slate-700">{a.label}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-[10px] text-slate-400">One platform connecting everyone in hospitality</p>
    </div>
  );
}
