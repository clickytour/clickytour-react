"use client";

export default function SPFreeVisibilityDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-800">
        Free Visibility Check
      </h3>
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">1</div>
          <div><p className="text-sm font-semibold text-slate-800">Submit Your Info</p><p className="text-xs text-slate-500">Basic service details.</p></div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">2</div>
          <div><p className="text-sm font-semibold text-slate-800">We Evaluate</p><p className="text-xs text-slate-500">Market fit and reach potential.</p></div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">3</div>
          <div><p className="text-sm font-semibold text-slate-800">Get Your Report</p><p className="text-xs text-slate-500">Free visibility score &amp; recommendations.</p></div>
        </div>
      </div>
      <div className="mt-4 rounded-lg bg-teal-50 py-2 text-center text-[10px] font-bold text-teal-700">
        100% Free — No Commitment
      </div>
    </div>
  );
}
