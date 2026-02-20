"use client";

export default function SimpleThreeStepDiagram() {
  const steps = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
      ),
      title: "Browse Pool",
      desc: "See available properties in the dashboard.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
      ),
      title: "Send White-Label Offers",
      desc: "Brand them as your own.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
      ),
      title: "Book & Track",
      desc: "Track your bookings and commissions.",
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-5 text-center text-xs font-bold uppercase tracking-wider text-slate-800">
        Simple 3-Step Process
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

        {/* Right side flow */}
        <div className="flex flex-col items-center gap-2">
          <div className="rounded-lg bg-slate-100 px-3 py-2 text-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="1.5" className="mx-auto"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
            <span className="text-[9px] font-bold uppercase text-slate-600">PMC<br/>Dashboard</span>
          </div>
          <svg width="16" height="20" viewBox="0 0 16 20" className="text-teal-400"><path d="M8 0v16M2 10l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
          <div className="rounded-lg bg-teal-50 px-3 py-2 text-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="1.5" className="mx-auto"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
            <span className="text-[9px] font-bold uppercase text-teal-700">Property<br/>Pool</span>
          </div>
          <svg width="16" height="20" viewBox="0 0 16 20" className="text-teal-400"><path d="M8 0v16M2 10l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
          <div className="rounded-lg bg-teal-600 px-3 py-2 text-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="mx-auto"><path d="M20 6L9 17l-5-5"/></svg>
            <span className="text-[9px] font-bold uppercase text-white">Booking</span>
          </div>
        </div>
      </div>
    </div>
  );
}
