"use client";

export default function AgentAdvancedSearchDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-800">
        Smart Search Flow
      </h3>
      <div className="flex flex-col items-center gap-2">
        <div className="w-full rounded-lg bg-teal-50 p-3 text-center">
          <div className="flex items-center justify-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            <span className="text-xs font-bold text-teal-800">Search All Pools</span>
          </div>
        </div>
        <svg width="16" height="16" viewBox="0 0 16 16" className="text-teal-400"><path d="M8 0v12M2 6l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
        <div className="flex w-full gap-2">
          <div className="flex-1 rounded-lg bg-slate-50 p-2 text-center">
            <span className="text-[9px] font-bold text-slate-600">Vacations</span>
          </div>
          <div className="flex-1 rounded-lg bg-slate-50 p-2 text-center">
            <span className="text-[9px] font-bold text-slate-600">Real Estate</span>
          </div>
          <div className="flex-1 rounded-lg bg-slate-50 p-2 text-center">
            <span className="text-[9px] font-bold text-slate-600">Services</span>
          </div>
        </div>
        <svg width="16" height="16" viewBox="0 0 16 16" className="text-teal-400"><path d="M8 0v12M2 6l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
        <div className="w-full rounded-lg bg-teal-600 p-2 text-center">
          <span className="text-[10px] font-bold text-white">Filtered Results → Offer</span>
        </div>
      </div>
    </div>
  );
}
