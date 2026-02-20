"use client";

export default function SPForGuestsDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-800">
        Guest Services Flow
      </h3>
      <div className="flex flex-col items-center gap-2">
        <div className="w-full rounded-lg bg-teal-50 p-3 text-center">
          <span className="text-xs font-bold text-teal-800">Your Service Listed</span>
        </div>
        <svg width="16" height="16" viewBox="0 0 16 16" className="text-teal-400"><path d="M8 0v12M2 6l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
        <div className="flex w-full gap-2">
          <div className="flex-1 rounded-lg bg-slate-50 p-2 text-center"><span className="text-[9px] font-bold text-slate-600">ClickyTour</span></div>
          <div className="flex-1 rounded-lg bg-slate-50 p-2 text-center"><span className="text-[9px] font-bold text-slate-600">Agents</span></div>
          <div className="flex-1 rounded-lg bg-slate-50 p-2 text-center"><span className="text-[9px] font-bold text-slate-600">Partners</span></div>
        </div>
        <svg width="16" height="16" viewBox="0 0 16 16" className="text-teal-400"><path d="M8 0v12M2 6l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
        <div className="w-full rounded-lg bg-teal-600 p-2 text-center">
          <span className="text-[10px] font-bold text-white">Guests Book Your Service</span>
        </div>
      </div>
    </div>
  );
}
