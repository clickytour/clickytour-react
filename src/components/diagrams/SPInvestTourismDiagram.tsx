"use client";

export default function SPInvestTourismDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-800">
        Tourism Investment Path
      </h3>
      <div className="space-y-3">
        <div className="flex items-center gap-3 rounded-lg bg-teal-50 p-3">
          <span className="text-lg">💡</span>
          <div><p className="text-xs font-bold text-slate-800">Identify Opportunity</p><p className="text-[10px] text-slate-500">Tourism gaps in your area</p></div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-teal-50 p-3">
          <span className="text-lg">🚀</span>
          <div><p className="text-xs font-bold text-slate-800">Launch on ClickyTour</p><p className="text-[10px] text-slate-500">Instant market access</p></div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-teal-50 p-3">
          <span className="text-lg">📈</span>
          <div><p className="text-xs font-bold text-slate-800">Scale with Demand</p><p className="text-[10px] text-slate-500">Grow as bookings increase</p></div>
        </div>
      </div>
    </div>
  );
}
