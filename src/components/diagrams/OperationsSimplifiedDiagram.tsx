"use client";

export default function OperationsSimplifiedDiagram() {
  const steps = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
      ),
      title: "LOGIN",
      desc: "Access your Manager Dashboard",
      btn: "DASHBOARD",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2"><path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>
      ),
      title: "SYNC",
      desc: "Connect properties with Channel Manager",
      btn: "CHANNELS",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
      ),
      title: "AUTOMATE",
      desc: "Bookings, payments, communications run automatically",
      btn: "TOOLS",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
      ),
      title: "TRACK",
      desc: "Monitor performance & grow your portfolio",
      btn: "BOOKINGS",
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-5 text-center text-xs font-bold uppercase tracking-wider text-slate-800">
        Your Operations, Simplified
      </h3>

      <div className="space-y-1">
        {steps.map((s, i) => (
          <div key={s.title}>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-teal-50">
                {s.icon}
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold uppercase text-slate-800">{s.title}</p>
                <p className="text-[11px] text-slate-500">{s.desc}</p>
              </div>
              <div className="rounded-lg border border-teal-200 bg-teal-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-teal-700">
                {s.btn}
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="ml-5 flex h-4 items-center">
                <svg width="2" height="16" className="text-teal-300"><line x1="1" y1="0" x2="1" y2="16" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3"/></svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
