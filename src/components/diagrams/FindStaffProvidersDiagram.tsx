"use client";

export default function FindStaffProvidersDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
        Hire for Your Business
      </h3>
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm font-bold">1</div>
          <div>
            <p className="text-xs font-bold text-slate-800">📍 Local Matching</p>
            <p className="text-[10px] text-slate-500 mt-0.5">Candidates near your operations</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm font-bold">2</div>
          <div>
            <p className="text-xs font-bold text-slate-800">📊 Track Everything</p>
            <p className="text-[10px] text-slate-500 mt-0.5">Requests and applications in one place</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm font-bold">3</div>
          <div>
            <p className="text-xs font-bold text-slate-800">⚡ On Demand</p>
            <p className="text-[10px] text-slate-500 mt-0.5">Seasonal, part-time, or full-time</p>
          </div>
        </div>
      </div>
    </div>
  );
}