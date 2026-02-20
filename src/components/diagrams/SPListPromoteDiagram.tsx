"use client";

export default function SPListPromoteDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-800">
        List &amp; Promote Flow
      </h3>
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-col items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>
          </div>
          <span className="mt-1 text-[10px] font-semibold text-slate-700">List</span>
        </div>
        <svg width="24" height="12" viewBox="0 0 24 12" className="text-teal-400"><path d="M0 6h18M14 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
        <div className="flex flex-col items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-600">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
          </div>
          <span className="mt-1 text-[10px] font-semibold text-slate-700">Verify</span>
        </div>
        <svg width="24" height="12" viewBox="0 0 24 12" className="text-teal-400"><path d="M0 6h18M14 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
        <div className="flex flex-col items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
          </div>
          <span className="mt-1 text-[10px] font-semibold text-slate-700">Promote</span>
        </div>
      </div>
    </div>
  );
}
