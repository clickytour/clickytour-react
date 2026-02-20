"use client";

export default function SPGrowReachDiagram() {
  const channels = [
    { icon: "🏖️", label: "Tourists & Guests" },
    { icon: "🏠", label: "Property Owners" },
    { icon: "🤝", label: "Agents & PMCs" },
    { icon: "📣", label: "Campaigns & Promotions" },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-800">
        Your Audience Channels
      </h3>
      <div className="space-y-2">
        {channels.map((c) => (
          <div key={c.label} className="flex items-center gap-3 rounded-lg bg-teal-50 px-3 py-2">
            <span className="text-lg">{c.icon}</span>
            <span className="text-xs font-semibold text-slate-700">{c.label}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-[10px] text-slate-400">One listing, multiple audiences</p>
    </div>
  );
}
