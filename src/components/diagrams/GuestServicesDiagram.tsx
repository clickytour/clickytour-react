"use client";

export default function GuestServicesDiagram() {
  const services = [
    { icon: "🏠", label: "Vacation Rentals" },
    { icon: "🚗", label: "Transfers" },
    { icon: "🎯", label: "Activities" },
    { icon: "🍽️", label: "Dining" },
    { icon: "🧖", label: "Wellness" },
    { icon: "🏡", label: "Real Estate" },
  ];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-800">What You Can Do</h3>
      <div className="grid grid-cols-3 gap-2">
        {services.map((s) => (
          <div key={s.label} className="flex flex-col items-center rounded-lg bg-teal-50 p-3">
            <span className="text-xl">{s.icon}</span>
            <span className="mt-1 text-center text-[9px] font-semibold text-slate-700">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
