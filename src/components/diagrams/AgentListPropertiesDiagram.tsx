"use client";

export default function AgentListPropertiesDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-800">
        Listing Flow for Agents
      </h3>
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">1</div>
          <div>
            <p className="text-sm font-semibold text-slate-800">Submit Property</p>
            <p className="text-xs text-slate-500">Add details, photos, and pricing info.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">2</div>
          <div>
            <p className="text-sm font-semibold text-slate-800">Validation &amp; Publish</p>
            <p className="text-xs text-slate-500">ClickyTour reviews and activates your listing.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">3</div>
          <div>
            <p className="text-sm font-semibold text-slate-800">Receive Leads</p>
            <p className="text-xs text-slate-500">Get booking requests from guests and partners.</p>
          </div>
        </div>
      </div>
      <div className="mt-4 rounded-lg bg-teal-50 py-2 text-center">
        <span className="text-[10px] font-medium text-teal-700">Listed across all ClickyTour channels</span>
      </div>
    </div>
  );
}
