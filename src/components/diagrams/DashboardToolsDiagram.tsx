"use client";

export default function DashboardToolsDiagram() {
  const items = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
      ),
      label: "DASHBOARD",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
      ),
      label: "CHANNEL\nMANAGER",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
      ),
      label: "TOOLS",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="1.5"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
      ),
      label: "REPORTS",
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-center gap-3">
        {items.map((item, i) => (
          <div key={item.label} className="flex items-center gap-3">
            <div className="flex flex-col items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50">
                {item.icon}
              </div>
              <span className="mt-1.5 whitespace-pre-line text-center text-[9px] font-bold uppercase leading-tight text-slate-700">
                {item.label}
              </span>
            </div>
            {i < items.length - 1 && (
              <svg width="24" height="16" viewBox="0 0 24 16" className="flex-shrink-0 text-teal-300">
                <path d="M0 8h18M14 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
