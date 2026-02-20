"use client";

export default function GuestBookingFlowDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-800">How Booking Works</h3>
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">1</div>
          <div><p className="text-sm font-semibold text-slate-800">Search &amp; Explore</p><p className="text-xs text-slate-500">Browse properties, activities, and services.</p></div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">2</div>
          <div><p className="text-sm font-semibold text-slate-800">Request or Book</p><p className="text-xs text-slate-500">Submit a request or book instantly.</p></div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">3</div>
          <div><p className="text-sm font-semibold text-slate-800">Confirm &amp; Enjoy</p><p className="text-xs text-slate-500">Get confirmation and travel with confidence.</p></div>
        </div>
      </div>
    </div>
  );
}
