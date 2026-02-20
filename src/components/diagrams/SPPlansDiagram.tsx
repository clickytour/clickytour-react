"use client";

export default function SPPlansDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-800">
        Provider Plans
      </h3>
      <div className="space-y-2">
        <div className="rounded-lg border border-slate-200 p-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-800">Free</span>
            <span className="rounded bg-slate-100 px-2 py-0.5 text-[9px] font-bold text-slate-600">BASIC</span>
          </div>
          <p className="mt-1 text-[10px] text-slate-500">Basic listing &amp; visibility</p>
        </div>
        <div className="rounded-lg border-2 border-teal-500 bg-teal-50 p-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-teal-800">Professional</span>
            <span className="rounded bg-teal-600 px-2 py-0.5 text-[9px] font-bold text-white">POPULAR</span>
          </div>
          <p className="mt-1 text-[10px] text-teal-700">Priority placement + promotion tools</p>
        </div>
        <div className="rounded-lg border border-slate-200 p-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-800">Premium</span>
            <span className="rounded bg-slate-100 px-2 py-0.5 text-[9px] font-bold text-slate-600">FULL</span>
          </div>
          <p className="mt-1 text-[10px] text-slate-500">Featured placement + dedicated support</p>
        </div>
      </div>
    </div>
  );
}
