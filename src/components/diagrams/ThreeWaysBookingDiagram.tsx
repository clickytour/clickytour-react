"use client";

export default function ThreeWaysBookingDiagram() {
  const items = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
      ),
      title: "Pool Bookings",
      desc: "Properties in ClickyTour pool get promoted to guests & agents",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
      ),
      title: "Agent Network",
      desc: "Net pricing lets agents bring in additional sales",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
      ),
      title: "Visibility Boost",
      desc: "Your listings appear in targeted campaigns & seasonal promotions",
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-5 text-center text-xs font-bold uppercase tracking-wider text-slate-800">
        3 Ways to Increase Your Booking
      </h3>

      <div className="flex justify-center gap-4">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col items-center text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-600 shadow-sm">
              {item.icon}
            </div>
            <p className="mt-2 text-xs font-bold text-slate-800">{item.title}</p>
            <p className="mt-1 max-w-[120px] text-[10px] text-slate-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
