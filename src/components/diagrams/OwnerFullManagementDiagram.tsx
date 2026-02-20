"use client";

export default function OwnerFullManagementDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-800">Full Management Flow</h3>
      <div className="space-y-3">
        <div className="flex items-center gap-3 rounded-lg bg-teal-50 p-3">
          <span className="text-lg">🏠</span>
          <div><p className="text-xs font-bold text-slate-800">You Own the Property</p><p className="text-[10px] text-slate-500">We handle everything else</p></div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-teal-50 p-3">
          <span className="text-lg">🔑</span>
          <div><p className="text-xs font-bold text-slate-800">PMC Manages Operations</p><p className="text-[10px] text-slate-500">Bookings, guests, maintenance</p></div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-teal-50 p-3">
          <span className="text-lg">💰</span>
          <div><p className="text-xs font-bold text-slate-800">You Earn Passively</p><p className="text-[10px] text-slate-500">Regular payouts, full reports</p></div>
        </div>
      </div>
    </div>
  );
}
