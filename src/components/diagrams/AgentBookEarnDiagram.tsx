"use client";

export default function AgentBookEarnDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-800">
        Book &amp; Earn Flow
      </h3>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          </div>
          <span className="text-xs font-semibold text-slate-700">Search &amp; Find</span>
        </div>
        <svg width="16" height="20" viewBox="0 0 16 20" className="text-teal-400"><path d="M8 0v16M2 10l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-600">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
          </div>
          <span className="text-xs font-semibold text-slate-700">Book Instantly</span>
        </div>
        <svg width="16" height="20" viewBox="0 0 16 20" className="text-teal-400"><path d="M8 0v16M2 10l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
          </div>
          <span className="text-xs font-semibold text-slate-700">Get Paid</span>
        </div>
      </div>
      <div className="mt-4 rounded-lg bg-slate-50 py-2 text-center text-[10px] font-medium text-slate-500">
        Commissions tracked in your dashboard
      </div>
    </div>
  );
}
