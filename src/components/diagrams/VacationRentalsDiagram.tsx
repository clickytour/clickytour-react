"use client";

export default function VacationRentalsDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
        Find Your Perfect Stay
      </h3>
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm font-bold">1</div>
          <div>
            <p className="text-xs font-bold text-slate-800">🔍 Search</p>
            <p className="text-[10px] text-slate-500 mt-0.5">Destination, dates, and guests</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm font-bold">2</div>
          <div>
            <p className="text-xs font-bold text-slate-800">🏠 Browse</p>
            <p className="text-[10px] text-slate-500 mt-0.5">Villas, apartments, and more</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm font-bold">3</div>
          <div>
            <p className="text-xs font-bold text-slate-800">📋 Compare</p>
            <p className="text-[10px] text-slate-500 mt-0.5">Features, prices, reviews</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm font-bold">4</div>
          <div>
            <p className="text-xs font-bold text-slate-800">✅ Book</p>
            <p className="text-[10px] text-slate-500 mt-0.5">Secure your vacation home</p>
          </div>
        </div>
      </div>
    </div>
  );
}