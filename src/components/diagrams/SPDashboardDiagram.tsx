"use client";

export default function SPDashboardDiagram() {
  const items = [
    { icon: "📋", label: "Bookings", desc: "Track requests" },
    { icon: "💬", label: "Messages", desc: "Client communication" },
    { icon: "📊", label: "Analytics", desc: "View performance" },
    { icon: "💰", label: "Payments", desc: "Track payouts" },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-800">
        Dashboard Overview
      </h3>
      <div className="grid grid-cols-2 gap-2">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col items-center rounded-lg border border-slate-100 bg-slate-50 p-3">
            <span className="text-xl">{item.icon}</span>
            <span className="mt-1 text-xs font-bold text-slate-800">{item.label}</span>
            <span className="text-[9px] text-slate-500">{item.desc}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-[10px] text-slate-400">Manage everything in one place</p>
    </div>
  );
}
