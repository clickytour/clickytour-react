"use client";

export default function SPWhatYouOfferDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-800">
        Service Categories
      </h3>
      <div className="space-y-2">
        <div className="flex items-center gap-3 rounded-lg bg-teal-50 px-3 py-2">
          <span className="text-lg">🏖️</span>
          <div><p className="text-xs font-bold text-slate-800">For Guests</p><p className="text-[10px] text-slate-500">Activities, transport, dining, wellness</p></div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-teal-50 px-3 py-2">
          <span className="text-lg">🏠</span>
          <div><p className="text-xs font-bold text-slate-800">For Owners</p><p className="text-[10px] text-slate-500">Cleaning, maintenance, repairs, check-in</p></div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-teal-50 px-3 py-2">
          <span className="text-lg">💼</span>
          <div><p className="text-xs font-bold text-slate-800">For Business</p><p className="text-[10px] text-slate-500">Staffing, consulting, B2B services</p></div>
        </div>
      </div>
    </div>
  );
}
