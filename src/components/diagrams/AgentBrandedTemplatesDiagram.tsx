"use client";

export default function AgentBrandedTemplatesDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-800">
        Branded Communication
      </h3>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col items-center rounded-lg bg-teal-50 p-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 3v18M3 9h18"/></svg>
          <span className="mt-1 text-[9px] font-bold text-slate-700">Templates</span>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-teal-50 p-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
          <span className="mt-1 text-[9px] font-bold text-slate-700">Chat Tools</span>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-teal-50 p-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="1.5"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 10h8M8 14h4"/></svg>
          <span className="mt-1 text-[9px] font-bold text-slate-700">PDF Offers</span>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-teal-50 p-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="1.5"><path d="M22 2L11 13"/><path d="M22 2L15 22l-4-9-9-4z"/></svg>
          <span className="mt-1 text-[9px] font-bold text-slate-700">Quick Share</span>
        </div>
      </div>
      <p className="mt-3 text-center text-[10px] text-slate-400">All branded with your identity</p>
    </div>
  );
}
