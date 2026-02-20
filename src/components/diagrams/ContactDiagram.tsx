"use client";

export default function ContactDiagram() {
  const channels = [
    { icon: "📧", label: "Email", desc: "support@clickytour.com" },
    { icon: "💬", label: "Live Chat", desc: "Instant support" },
    { icon: "📞", label: "Phone", desc: "Business hours" },
    { icon: "🎫", label: "Ticket", desc: "Track your request" },
  ];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-slate-800">Reach Us</h3>
      <div className="space-y-2">
        {channels.map((c) => (
          <div key={c.label} className="flex items-center gap-3 rounded-lg bg-teal-50 px-3 py-2">
            <span className="text-lg">{c.icon}</span>
            <div><p className="text-xs font-bold text-slate-800">{c.label}</p><p className="text-[10px] text-slate-500">{c.desc}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
}
