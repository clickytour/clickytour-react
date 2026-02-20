"use client";

export default function StaffDirectoryDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
        Browse by Category
      </h3>
      <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-slate-50 p-2 text-center"><p className="text-lg">🧹</p><p className="text-[10px] font-semibold text-slate-700 mt-1">Cleaning</p></div>
          <div className="rounded-lg bg-slate-50 p-2 text-center"><p className="text-lg">🔑</p><p className="text-[10px] font-semibold text-slate-700 mt-1">Check-in</p></div>
          <div className="rounded-lg bg-slate-50 p-2 text-center"><p className="text-lg">🔧</p><p className="text-[10px] font-semibold text-slate-700 mt-1">Maintenance</p></div>
          <div className="rounded-lg bg-slate-50 p-2 text-center"><p className="text-lg">🍳</p><p className="text-[10px] font-semibold text-slate-700 mt-1">Kitchen</p></div>
          <div className="rounded-lg bg-slate-50 p-2 text-center"><p className="text-lg">🚗</p><p className="text-[10px] font-semibold text-slate-700 mt-1">Drivers</p></div>
          <div className="rounded-lg bg-slate-50 p-2 text-center"><p className="text-lg">🏔</p><p className="text-[10px] font-semibold text-slate-700 mt-1">Guides</p></div>
      </div>
    </div>
  );
}