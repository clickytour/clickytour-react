"use client";

export default function OwnerDashboardDiagram() {
  const items = [
    { icon: "📋", label: "Reservations", desc: "Track bookings" },
    { icon: "💰", label: "Earnings", desc: "View payouts" },
    { icon: "📊", label: "Performance", desc: "Occupancy stats" },
    { icon: "💬", label: "Messages", desc: "Guest communication" },
  ];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-800">Dashboard Overview</h3>
      <div className="grid grid-cols-2 gap-2">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col items-center rounded-lg border border-slate-100 bg-slate-50 p-3">
            <span className="text-xl">{item.icon}</span>
            <span className="mt-1 text-xs font-bold text-slate-800">{item.label}</span>
            <span className="text-[9px] text-slate-500">{item.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
