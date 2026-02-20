"use client";

export default function GuestPremiumDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-800">Premium Experience</h3>
      <div className="space-y-2">
        <div className="flex items-center gap-3 rounded-lg bg-teal-50 p-3">
          <span className="text-lg">⭐</span>
          <div><p className="text-xs font-bold text-slate-800">Curated Selection</p><p className="text-[10px] text-slate-500">Hand-picked premium properties</p></div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-teal-50 p-3">
          <span className="text-lg">🎯</span>
          <div><p className="text-xs font-bold text-slate-800">Personal Concierge</p><p className="text-[10px] text-slate-500">Dedicated trip planning support</p></div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-teal-50 p-3">
          <span className="text-lg">🛎️</span>
          <div><p className="text-xs font-bold text-slate-800">VIP Services</p><p className="text-[10px] text-slate-500">Transfers, dining, experiences included</p></div>
        </div>
      </div>
    </div>
  );
}
