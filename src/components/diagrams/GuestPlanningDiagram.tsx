"use client";

export default function GuestPlanningDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-800">Personalized Planning</h3>
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">1</div>
          <div><p className="text-sm font-semibold text-slate-800">Tell Us Your Style</p><p className="text-xs text-slate-500">Dates, budget, preferences.</p></div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">2</div>
          <div><p className="text-sm font-semibold text-slate-800">Get a Custom Proposal</p><p className="text-xs text-slate-500">Curated stays, activities, transfers.</p></div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">3</div>
          <div><p className="text-sm font-semibold text-slate-800">Book &amp; Go</p><p className="text-xs text-slate-500">Everything arranged, one confirmation.</p></div>
        </div>
      </div>
    </div>
  );
}
