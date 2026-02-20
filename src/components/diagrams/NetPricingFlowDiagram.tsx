"use client";

export default function NetPricingFlowDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-5 text-center text-sm font-bold text-slate-800">
        Your Property, Their Clients
      </h3>

      <div className="space-y-4">
        {/* Step 1 */}
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">1</div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-slate-800">Set Net Price</p>
            <p className="text-xs text-slate-500">Define your base rate per season</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><circle cx="7" cy="7" r="1"/></svg>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">2</div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-slate-800">Publish to Agents</p>
            <p className="text-xs text-slate-500">Agents see your inventory in their dashboard</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="rounded bg-slate-200 px-2 py-1 text-[9px] font-bold text-slate-700">PMC</div>
            <span className="text-xs text-teal-400">→</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
            </div>
            <span className="text-xs text-teal-400">→</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/></svg>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">3</div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-slate-800">Bookings Flow In</p>
            <p className="text-xs text-slate-500">Agents sell at gross prices, you receive net payout</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-slate-50 py-2 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
        Bookings
      </div>
    </div>
  );
}
