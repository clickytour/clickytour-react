"use client";

export default function WhiteLabelPoolDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-5 text-center text-sm font-bold uppercase tracking-wider text-slate-800">
        ClickyTour&apos;s Pool<br />
        <span className="text-slate-500">White-Label Presentations</span>
      </h3>

      {/* Top flow: Brand → White-Label → Guests */}
      <div className="mb-6 flex items-center justify-center gap-3">
        <div className="flex flex-col items-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-100">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 3v18M3 9h18"/></svg>
          </div>
          <span className="mt-1 text-[11px] font-bold text-slate-700">YOUR<br/>BRAND</span>
        </div>

        <svg width="32" height="16" viewBox="0 0 32 16" className="text-teal-400"><path d="M0 8h24M20 2l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>

        <div className="flex flex-col items-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-600">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
          </div>
          <span className="mt-1 text-[11px] font-medium text-slate-600">White-Label<br/>Offer</span>
        </div>

        <svg width="32" height="16" viewBox="0 0 32 16" className="text-teal-400"><path d="M0 8h24M20 2l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>

        <div className="flex flex-col items-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-100">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
          </div>
          <span className="mt-1 text-[11px] font-bold text-teal-700">GUESTS</span>
        </div>
      </div>

      <div className="border-t border-slate-100 pt-4">
        {/* Bottom: Sources */}
        <div className="flex justify-center gap-4">
          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
            </div>
            <span className="mt-1 text-[9px] font-bold uppercase text-slate-600">Property<br/>Owners</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/></svg>
            </div>
            <span className="mt-1 text-[9px] font-bold uppercase text-slate-600">Agents/Tour-<br/>Operators</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 00-8 0v2"/></svg>
            </div>
            <span className="mt-1 text-[9px] font-bold uppercase text-slate-600">Property Mgmt<br/>Companies</span>
          </div>
        </div>
        <p className="mt-3 text-center text-xs text-slate-500">Properties — 1 or more</p>
      </div>
    </div>
  );
}
