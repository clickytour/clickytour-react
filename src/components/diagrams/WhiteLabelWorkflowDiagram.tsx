"use client";

export default function WhiteLabelWorkflowDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-1 text-center text-sm font-bold text-slate-800">White-label Offer Workflow</h3>
      <p className="mb-5 text-center text-xs text-slate-500">Your branding, your proposal</p>

      <div className="flex items-center justify-between gap-2">
        {/* Your Portfolio */}
        <div className="flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-teal-50 shadow-sm">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="1.5"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 10h8M8 14h4"/></svg>
          </div>
          <span className="mt-2 text-[10px] font-semibold text-slate-700">Your Portfolio</span>
        </div>

        <svg width="28" height="16" viewBox="0 0 28 16" className="flex-shrink-0 text-teal-400"><path d="M0 8h20M16 2l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>

        {/* Generate */}
        <div className="flex flex-col items-center">
          <div className="relative flex h-20 w-20 flex-col items-center justify-center rounded-xl bg-teal-600 p-2 shadow-sm">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 3v18"/></svg>
            <span className="mt-1 text-[9px] font-bold text-teal-100">Generate</span>
          </div>
          <div className="mt-2 flex flex-wrap justify-center gap-1">
            <span className="rounded bg-teal-50 px-1.5 py-0.5 text-[9px] text-teal-700">Logo</span>
            <span className="rounded bg-teal-50 px-1.5 py-0.5 text-[9px] text-teal-700">Branding</span>
            <span className="rounded bg-teal-50 px-1.5 py-0.5 text-[9px] text-teal-700">Colors</span>
          </div>
        </div>

        <svg width="28" height="16" viewBox="0 0 28 16" className="flex-shrink-0 text-teal-400"><path d="M0 8h20M16 2l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>

        {/* Send to Client */}
        <div className="flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-teal-50 shadow-sm">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="1.5"><path d="M22 2L11 13"/><path d="M22 2L15 22l-4-9-9-4z"/></svg>
          </div>
          <span className="mt-2 text-[10px] font-semibold text-slate-700">Send to Client</span>
          <div className="mt-1 flex gap-1">
            <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[9px] text-slate-600">PDF / Link</span>
          </div>
        </div>
      </div>

      <p className="mt-5 text-center text-[10px] text-slate-400">
        ✅ Your branding, no ClickyTour logo
      </p>
    </div>
  );
}
