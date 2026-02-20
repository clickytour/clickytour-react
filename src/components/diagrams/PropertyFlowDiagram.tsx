"use client";

export default function PropertyFlowDiagram() {
  const steps = [
    { num: 1, icon: "☑️", title: "Receive Property Alerts", desc: "Matches appear in your dashboard." },
    { num: 2, icon: "✅", title: "Approve & Customize", desc: "Accept, set your pricing rules, and brand if needed." },
    { num: 3, icon: "📢", title: "Publish Instantly", desc: "Ready to promote in your portfolio, white-label if required." },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-1 text-center text-sm font-bold text-slate-800">
        From ClickyTour Database to Your Portfolio — in 3 Steps
      </h3>

      <div className="mt-5 flex gap-5">
        {/* Steps */}
        <div className="flex-1 space-y-3">
          {steps.map((s) => (
            <div key={s.num} className="flex items-start gap-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">
                {s.num}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">{s.title}</p>
                <p className="text-xs text-slate-500">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Property Flow Visual */}
        <div className="flex flex-col items-center gap-1">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">Property Flow</p>
          
          <div className="flex flex-col items-center gap-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
            </div>
            <span className="text-[9px] font-bold uppercase text-slate-600">Owners</span>
            <span className="text-lg text-teal-400">→</span>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-600">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
            </div>
            <span className="text-[9px] font-bold uppercase text-teal-600">ClickyTour</span>
            <span className="text-lg text-teal-400">→</span>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
            </div>
            <span className="text-[9px] font-bold uppercase text-slate-600">PMC</span>
            <svg width="16" height="20" viewBox="0 0 16 20" className="text-teal-400"><path d="M8 0v16M2 10l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
            </div>
            <span className="text-[9px] font-bold uppercase text-slate-600">Customer</span>
          </div>
        </div>
      </div>
    </div>
  );
}
