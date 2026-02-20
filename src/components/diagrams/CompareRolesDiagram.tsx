"use client";

export default function CompareRolesDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
        Find Your Role
      </h3>
      <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-slate-50 p-2 text-center"><p className="text-lg">🏖</p><p className="text-[10px] font-semibold text-slate-700 mt-1">Guest</p></div>
          <div className="rounded-lg bg-slate-50 p-2 text-center"><p className="text-lg">🏠</p><p className="text-[10px] font-semibold text-slate-700 mt-1">Owner</p></div>
          <div className="rounded-lg bg-slate-50 p-2 text-center"><p className="text-lg">🏪</p><p className="text-[10px] font-semibold text-slate-700 mt-1">Provider</p></div>
          <div className="rounded-lg bg-slate-50 p-2 text-center"><p className="text-lg">💼</p><p className="text-[10px] font-semibold text-slate-700 mt-1">Agent</p></div>
          <div className="rounded-lg bg-slate-50 p-2 text-center"><p className="text-lg">🏢</p><p className="text-[10px] font-semibold text-slate-700 mt-1">PMC</p></div>
          <div className="rounded-lg bg-slate-50 p-2 text-center"><p className="text-lg">👤</p><p className="text-[10px] font-semibold text-slate-700 mt-1">Job Seeker</p></div>
      </div>
    </div>
  );
}