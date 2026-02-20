"use client";

export default function OwnerFreeEvalDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-800">Free Evaluation</h3>
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">1</div>
          <div><p className="text-sm font-semibold text-slate-800">Submit Property Info</p><p className="text-xs text-slate-500">Location, type, and basic details.</p></div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">2</div>
          <div><p className="text-sm font-semibold text-slate-800">Expert Analysis</p><p className="text-xs text-slate-500">Market comparison and earning potential.</p></div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">3</div>
          <div><p className="text-sm font-semibold text-slate-800">Receive Report</p><p className="text-xs text-slate-500">Actionable recommendations, no obligation.</p></div>
        </div>
      </div>
      <div className="mt-4 rounded-lg bg-teal-50 py-2 text-center text-[10px] font-bold text-teal-700">100% Free — No Commitment</div>
    </div>
  );
}
