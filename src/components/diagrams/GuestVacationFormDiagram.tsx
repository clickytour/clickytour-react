"use client";

export default function GuestVacationFormDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
        Vacation Request Flow
      </h3>
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm font-bold">1</div>
          <div>
            <p className="text-xs font-bold text-slate-800">📍 Destination & Dates</p>
            <p className="text-[10px] text-slate-500 mt-0.5">Where and when you want to travel</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm font-bold">2</div>
          <div>
            <p className="text-xs font-bold text-slate-800">👥 Group & Preferences</p>
            <p className="text-[10px] text-slate-500 mt-0.5">Number of guests and room needs</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm font-bold">3</div>
          <div>
            <p className="text-xs font-bold text-slate-800">💰 Budget & Services</p>
            <p className="text-[10px] text-slate-500 mt-0.5">Price range and extras</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm font-bold">4</div>
          <div>
            <p className="text-xs font-bold text-slate-800">✉️ Submit & Get Matched</p>
            <p className="text-[10px] text-slate-500 mt-0.5">We find the best options for you</p>
          </div>
        </div>
      </div>
    </div>
  );
}