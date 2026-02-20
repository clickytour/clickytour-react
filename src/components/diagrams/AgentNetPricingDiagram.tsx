"use client";

export default function AgentNetPricingDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-800">
        How Net Pricing Works
      </h3>
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">1</div>
          <div>
            <p className="text-sm font-semibold text-slate-800">Browse Inventory</p>
            <p className="text-xs text-slate-500">Search properties with net pricing enabled.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">2</div>
          <div>
            <p className="text-sm font-semibold text-slate-800">Add Your Margin</p>
            <p className="text-xs text-slate-500">Set your selling price above the net rate.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">3</div>
          <div>
            <p className="text-sm font-semibold text-slate-800">Send White-Label Offer</p>
            <p className="text-xs text-slate-500">Client sees your brand, your price.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">4</div>
          <div>
            <p className="text-sm font-semibold text-slate-800">Earn the Difference</p>
            <p className="text-xs text-slate-500">You keep the margin as profit.</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-teal-50 py-2">
        <span className="text-[10px] font-medium text-teal-700">Net Price</span>
        <span className="text-teal-400">+</span>
        <span className="text-[10px] font-medium text-teal-700">Your Margin</span>
        <span className="text-teal-400">=</span>
        <span className="text-[10px] font-bold text-teal-800">Client Price</span>
      </div>
    </div>
  );
}
