"use client";

export default function FindStaffHubDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
        Staff & Hiring Hub
      </h3>
      <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-slate-50 p-2 text-center"><p className="text-lg">🏢</p><p className="text-[10px] font-semibold text-slate-700 mt-1">PM Companies</p></div>
          <div className="rounded-lg bg-slate-50 p-2 text-center"><p className="text-lg">🏠</p><p className="text-[10px] font-semibold text-slate-700 mt-1">Owners</p></div>
          <div className="rounded-lg bg-slate-50 p-2 text-center"><p className="text-lg">🏪</p><p className="text-[10px] font-semibold text-slate-700 mt-1">Providers</p></div>
          <div className="rounded-lg bg-slate-50 p-2 text-center"><p className="text-lg">👤</p><p className="text-[10px] font-semibold text-slate-700 mt-1">Job Seekers</p></div>
          <div className="rounded-lg bg-slate-50 p-2 text-center"><p className="text-lg">📋</p><p className="text-[10px] font-semibold text-slate-700 mt-1">Directory</p></div>
          <div className="rounded-lg bg-slate-50 p-2 text-center"><p className="text-lg">📝</p><p className="text-[10px] font-semibold text-slate-700 mt-1">Post Request</p></div>
      </div>
    </div>
  );
}