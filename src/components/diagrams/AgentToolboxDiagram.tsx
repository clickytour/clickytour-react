"use client";

export default function AgentToolboxDiagram() {
  const tools = [
    { icon: "🔍", label: "Advanced Search" },
    { icon: "📄", label: "White-Label Offers" },
    { icon: "🎨", label: "Branded Templates" },
    { icon: "💬", label: "Chat Tools" },
    { icon: "📊", label: "Dashboard" },
    { icon: "💰", label: "Net Pricing" },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-800">
        Your Agent Toolbox
      </h3>
      <div className="grid grid-cols-3 gap-2">
        {tools.map((t) => (
          <div key={t.label} className="flex flex-col items-center rounded-lg bg-teal-50 p-3">
            <span className="text-xl">{t.icon}</span>
            <span className="mt-1 text-center text-[9px] font-semibold text-slate-700">{t.label}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-[10px] text-slate-400">All tools in one dashboard</p>
    </div>
  );
}
