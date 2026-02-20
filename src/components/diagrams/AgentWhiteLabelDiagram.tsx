"use client";

export default function AgentWhiteLabelDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-800">
        White-Label Offer Flow
      </h3>
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-col items-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-100">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          </div>
          <span className="mt-1 text-[10px] font-semibold text-slate-700">Pick Listing</span>
        </div>
        <svg width="24" height="12" viewBox="0 0 24 12" className="text-teal-400"><path d="M0 6h18M14 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
        <div className="flex flex-col items-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-600">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 3v18M3 9h18"/></svg>
          </div>
          <span className="mt-1 text-[10px] font-semibold text-slate-700">Brand It</span>
        </div>
        <svg width="24" height="12" viewBox="0 0 24 12" className="text-teal-400"><path d="M0 6h18M14 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
        <div className="flex flex-col items-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-100">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="1.5"><path d="M22 2L11 13"/><path d="M22 2L15 22l-4-9-9-4z"/></svg>
          </div>
          <span className="mt-1 text-[10px] font-semibold text-slate-700">Send</span>
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        <span className="rounded bg-teal-50 px-2 py-1 text-[9px] text-teal-700">Your Logo</span>
        <span className="rounded bg-teal-50 px-2 py-1 text-[9px] text-teal-700">Your Colors</span>
        <span className="rounded bg-teal-50 px-2 py-1 text-[9px] text-teal-700">No ClickyTour Branding</span>
      </div>
    </div>
  );
}
