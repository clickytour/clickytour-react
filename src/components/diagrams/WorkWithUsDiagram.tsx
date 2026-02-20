"use client";

export default function WorkWithUsDiagram() {
  const roles = [
    { icon: "🤝", label: "Agent" },
    { icon: "🏠", label: "Owner" },
    { icon: "🔧", label: "Service Provider" },
    { icon: "🏢", label: "PMC" },
    { icon: "💼", label: "Affiliate" },
    { icon: "👤", label: "Team Member" },
  ];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-800">Partner Roles</h3>
      <div className="grid grid-cols-3 gap-2">
        {roles.map((r) => (
          <div key={r.label} className="flex flex-col items-center rounded-lg bg-teal-50 p-3">
            <span className="text-xl">{r.icon}</span>
            <span className="mt-1 text-center text-[9px] font-semibold text-slate-700">{r.label}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-[10px] text-slate-400">Find your place in the ClickyTour ecosystem</p>
    </div>
  );
}
