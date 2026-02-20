"use client";

export default function AgentAffiliateDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-800">
        Affiliate Earnings Model
      </h3>
      <div className="space-y-3">
        <div className="flex items-center gap-3 rounded-lg bg-teal-50 p-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-800">Refer Partners</p>
            <p className="text-[10px] text-slate-500">Invite PMCs, owners, or agents</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-teal-50 p-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-800">They Join &amp; Activate</p>
            <p className="text-[10px] text-slate-500">Partner signs up through your link</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-teal-50 p-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-800">Earn Commissions</p>
            <p className="text-[10px] text-slate-500">Recurring revenue from referrals</p>
          </div>
        </div>
      </div>
    </div>
  );
}
