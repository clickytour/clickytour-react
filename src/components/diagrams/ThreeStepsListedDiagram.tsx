"use client";

export default function ThreeStepsListedDiagram() {
  const steps = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M12 18v-6M9 15h6"/></svg>
      ),
      title: "Upload Property",
      desc: "Add property info, media, and pricing.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
      ),
      title: "Approve & Publish",
      desc: "ClickyTour team validates.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
      ),
      title: "Get Bookings",
      desc: "Start receiving leads and reservations.",
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-5 text-center text-xs font-bold uppercase tracking-wider text-slate-800">
        3 Steps to Get Listed
      </h3>

      <div className="flex gap-5">
        <div className="flex-1 space-y-4">
          {steps.map((s, i) => (
            <div key={s.title} className="flex items-start gap-3">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-teal-600">
                {s.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">{s.title}</p>
                <p className="text-xs text-slate-500">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: flow to channels */}
        <div className="flex flex-col items-center gap-2">
          <div className="rounded-lg bg-slate-100 px-3 py-2 text-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="1.5" className="mx-auto"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
            <span className="text-[9px] font-bold uppercase text-slate-600">PMC<br/>Dashboard</span>
          </div>
          <svg width="16" height="20" viewBox="0 0 16 20" className="text-teal-400"><path d="M8 0v16M2 10l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
          <div className="rounded-lg bg-teal-600 px-4 py-2 text-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="mx-auto"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
            <span className="text-[9px] font-bold uppercase text-white">Multiple<br/>Channels</span>
          </div>
        </div>
      </div>
    </div>
  );
}
