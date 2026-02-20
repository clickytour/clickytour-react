"use client";

export default function AgentPropertyPoolDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-800">
        How the Pool Works
      </h3>
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">1</div>
          <div>
            <p className="text-sm font-semibold text-slate-800">Browse Properties</p>
            <p className="text-xs text-slate-500">Access the shared vacation property pool.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">2</div>
          <div>
            <p className="text-sm font-semibold text-slate-800">Send Branded Offers</p>
            <p className="text-xs text-slate-500">Use white-label tools to present as your own.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">3</div>
          <div>
            <p className="text-sm font-semibold text-slate-800">Earn Commissions</p>
            <p className="text-xs text-slate-500">Book and track your earnings automatically.</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-3">
        <div className="rounded bg-teal-50 px-2 py-1 text-[9px] font-medium text-teal-700">No inventory needed</div>
        <div className="rounded bg-teal-50 px-2 py-1 text-[9px] font-medium text-teal-700">Instant access</div>
      </div>
    </div>
  );
}
