"use client";

export default function SPForOwnersDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-800">
        Owner Services Flow
      </h3>
      <div className="flex flex-col items-center gap-2">
        <div className="w-full rounded-lg bg-teal-50 p-3 text-center">
          <span className="text-xs font-bold text-teal-800">Property Owner Needs Service</span>
        </div>
        <svg width="16" height="16" viewBox="0 0 16 16" className="text-teal-400"><path d="M8 0v12M2 6l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
        <div className="w-full rounded-lg bg-slate-50 p-3 text-center">
          <span className="text-xs font-bold text-slate-700">ClickyTour Matches You</span>
        </div>
        <svg width="16" height="16" viewBox="0 0 16 16" className="text-teal-400"><path d="M8 0v12M2 6l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
        <div className="w-full rounded-lg bg-teal-600 p-2 text-center">
          <span className="text-[10px] font-bold text-white">You Get the Job</span>
        </div>
      </div>
      <div className="mt-3 flex justify-center gap-2">
        <span className="rounded bg-teal-50 px-2 py-1 text-[9px] font-medium text-teal-700">Recurring clients</span>
        <span className="rounded bg-teal-50 px-2 py-1 text-[9px] font-medium text-teal-700">Steady income</span>
      </div>
    </div>
  );
}
