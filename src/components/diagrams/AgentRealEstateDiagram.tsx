"use client";

export default function AgentRealEstateDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-800">
        Real Estate Flow
      </h3>
      <div className="space-y-3">
        <div className="flex items-center gap-3 rounded-lg bg-teal-50 p-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teal-600">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-800">Browse Listings</p>
            <p className="text-[10px] text-slate-500">Sale &amp; rent properties</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-teal-50 p-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teal-600">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 10h8M8 14h4"/></svg>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-800">Generate Proposals</p>
            <p className="text-[10px] text-slate-500">Branded PDF/link offers</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-teal-50 p-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teal-600">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-800">Close &amp; Earn</p>
            <p className="text-[10px] text-slate-500">Track commissions per deal</p>
          </div>
        </div>
      </div>
    </div>
  );
}
