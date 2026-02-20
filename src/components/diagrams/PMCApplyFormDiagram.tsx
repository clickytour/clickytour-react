"use client";

export default function PMCApplyFormDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
        PMC Application Flow
      </h3>
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm font-bold">1</div>
          <div>
            <p className="text-xs font-bold text-slate-800">🏢 Company Info</p>
            <p className="text-[10px] text-slate-500 mt-0.5">Name, size, destinations</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm font-bold">2</div>
          <div>
            <p className="text-xs font-bold text-slate-800">📊 Portfolio</p>
            <p className="text-[10px] text-slate-500 mt-0.5">Properties under management</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm font-bold">3</div>
          <div>
            <p className="text-xs font-bold text-slate-800">🎯 Services Offered</p>
            <p className="text-[10px] text-slate-500 mt-0.5">What you provide</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm font-bold">4</div>
          <div>
            <p className="text-xs font-bold text-slate-800">✅ Review & Approve</p>
            <p className="text-[10px] text-slate-500 mt-0.5">Team reviews your application</p>
          </div>
        </div>
      </div>
    </div>
  );
}