"use client";

export default function OwnerInvestDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-800">Investment Path</h3>
      <div className="space-y-3">
        <div className="flex items-center gap-3 rounded-lg bg-teal-50 p-3">
          <span className="text-lg">🔍</span>
          <div><p className="text-xs font-bold text-slate-800">Discover Opportunities</p><p className="text-[10px] text-slate-500">Curated Greek real estate listings</p></div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-teal-50 p-3">
          <span className="text-lg">🏗️</span>
          <div><p className="text-xs font-bold text-slate-800">Invest with Support</p><p className="text-[10px] text-slate-500">Legal, management, and setup assistance</p></div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-teal-50 p-3">
          <span className="text-lg">📈</span>
          <div><p className="text-xs font-bold text-slate-800">Earn Returns</p><p className="text-[10px] text-slate-500">Rental income + property appreciation</p></div>
        </div>
      </div>
    </div>
  );
}
