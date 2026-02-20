"use client";

export default function EcosystemDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
        How the Ecosystem Works
      </h3>

      <div className="flex items-stretch gap-2">
        {/* Standard Way */}
        <div className="flex-1 rounded-xl bg-slate-50 p-4">
          <p className="mb-3 text-center text-[11px] font-bold uppercase tracking-wider text-slate-400">Standard Way</p>
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="rounded-lg bg-slate-200 px-3 py-2 text-xs font-medium text-slate-700">
              Property Management Company
            </div>
            <svg width="16" height="24" viewBox="0 0 16 24" className="text-slate-300"><path d="M8 0v20M2 14l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
            <div className="flex gap-2">
              <div className="rounded bg-slate-200 px-2 py-1 text-[10px] text-slate-600">Property 1</div>
              <div className="rounded bg-slate-200 px-2 py-1 text-[10px] text-slate-600">Property 2</div>
            </div>
            <svg width="16" height="24" viewBox="0 0 16 24" className="text-slate-300"><path d="M8 0v20M2 14l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
            <div className="rounded bg-slate-200 px-2 py-1 text-[10px] text-slate-500">Your Customers</div>
            <p className="mt-2 text-[10px] text-slate-400">Limited marketing reach</p>
          </div>
        </div>

        {/* VS Badge */}
        <div className="flex items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white shadow">
            VS
          </div>
        </div>

        {/* ClickyTour Network */}
        <div className="flex-1 rounded-xl bg-teal-50 p-4">
          <p className="mb-3 text-center text-[11px] font-bold uppercase tracking-wider text-teal-600">ClickyTour Network</p>
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="rounded-lg bg-teal-600 px-3 py-2 text-xs font-medium text-white">
              Property Management Company
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[10px] text-teal-600">+</span>
              <div className="rounded bg-teal-100 px-2 py-1 text-[10px] font-medium text-teal-700">ClickyTour Marketplace</div>
            </div>
            <svg width="16" height="20" viewBox="0 0 16 20" className="text-teal-400"><path d="M8 0v16M2 10l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
            <div className="flex flex-wrap justify-center gap-1">
              <div className="rounded bg-teal-100 px-2 py-1 text-[10px] text-teal-700">White-label Offers</div>
              <div className="rounded bg-teal-100 px-2 py-1 text-[10px] text-teal-700">Partner Network</div>
              <div className="rounded bg-teal-100 px-2 py-1 text-[10px] text-teal-700">Inventory</div>
            </div>
            <svg width="16" height="20" viewBox="0 0 16 20" className="text-teal-400"><path d="M8 0v16M2 10l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
            <div className="flex gap-2">
              <div className="rounded bg-teal-100 px-2 py-1 text-[10px] text-teal-700">
                📈 More bookings
              </div>
              <div className="rounded bg-teal-100 px-2 py-1 text-[10px] text-teal-700">
                📊 Bigger portfolio
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-teal-600 py-2 text-center">
        <span className="text-sm font-semibold text-white">Supercharge Your PMC Business</span>
        <span className="ml-2 rounded bg-teal-500 px-2 py-0.5 text-xs text-white">Get Started Today</span>
      </div>
    </div>
  );
}
