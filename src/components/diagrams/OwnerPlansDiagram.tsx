"use client";

export default function OwnerPlansDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-800">Owner Plans</h3>
      <div className="space-y-2">
        <div className="rounded-lg border border-slate-200 p-3">
          <div className="flex items-center justify-between"><span className="text-xs font-bold text-slate-800">Free Listing</span><span className="rounded bg-slate-100 px-2 py-0.5 text-[9px] font-bold text-slate-600">FREE</span></div>
          <p className="mt-1 text-[10px] text-slate-500">Basic visibility on ClickyTour</p>
        </div>
        <div className="rounded-lg border-2 border-teal-500 bg-teal-50 p-3">
          <div className="flex items-center justify-between"><span className="text-xs font-bold text-teal-800">Enhanced</span><span className="rounded bg-teal-600 px-2 py-0.5 text-[9px] font-bold text-white">POPULAR</span></div>
          <p className="mt-1 text-[10px] text-teal-700">Priority placement + promotion tools</p>
        </div>
        <div className="rounded-lg border border-slate-200 p-3">
          <div className="flex items-center justify-between"><span className="text-xs font-bold text-slate-800">Full Management</span><span className="rounded bg-slate-100 px-2 py-0.5 text-[9px] font-bold text-slate-600">PREMIUM</span></div>
          <p className="mt-1 text-[10px] text-slate-500">End-to-end property management</p>
        </div>
      </div>
    </div>
  );
}
