"use client";

export default function FindStaffOwnersDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
        Staff for Property Owners
      </h3>
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm font-bold">1</div>
          <div>
            <p className="text-xs font-bold text-slate-800">🧹 Cleaners</p>
            <p className="text-[10px] text-slate-500 mt-0.5">Turnover and deep cleaning</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm font-bold">2</div>
          <div>
            <p className="text-xs font-bold text-slate-800">🔑 Check-in Staff</p>
            <p className="text-[10px] text-slate-500 mt-0.5">Guest welcome and handover</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm font-bold">3</div>
          <div>
            <p className="text-xs font-bold text-slate-800">🔧 Maintenance</p>
            <p className="text-[10px] text-slate-500 mt-0.5">Repairs and seasonal upkeep</p>
          </div>
        </div>
      </div>
    </div>
  );
}