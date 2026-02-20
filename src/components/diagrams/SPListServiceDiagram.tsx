"use client";

export default function SPListServiceDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-800">
        3 Steps to Get Listed
      </h3>
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">1</div>
          <div><p className="text-sm font-semibold text-slate-800">Submit Your Service</p><p className="text-xs text-slate-500">Name, description, photos, and pricing.</p></div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">2</div>
          <div><p className="text-sm font-semibold text-slate-800">Review &amp; Approve</p><p className="text-xs text-slate-500">ClickyTour team verifies your listing.</p></div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">3</div>
          <div><p className="text-sm font-semibold text-slate-800">Go Live</p><p className="text-xs text-slate-500">Visible to guests, owners, and agents.</p></div>
        </div>
      </div>
      <div className="mt-4 rounded-lg bg-teal-50 py-2 text-center text-[10px] font-medium text-teal-700">
        Reach thousands of customers instantly
      </div>
    </div>
  );
}
