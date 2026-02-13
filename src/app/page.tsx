const fields = [
  "Destination",
  "Check-in",
  "Check-out",
  "Adults",
  "Children (3–14 age)",
  "Children (0–3 age)",
  "Distance to beach",
  "Distance to infrastructures",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3f5f8] text-slate-900">
      <section className="mx-auto max-w-[1280px] px-4 py-8">
        <div
          className="overflow-hidden rounded-[24px] border border-slate-200 p-4 md:p-6"
          style={{
            backgroundImage:
              "linear-gradient(110deg, rgba(255,255,255,0.70) 0%, rgba(246,250,255,0.62) 40%, rgba(238,245,252,0.52) 64%, rgba(232,241,249,0.44) 100%), url('https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1800&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="min-w-0">
              <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-emerald-700">
                Trusted villa stays & management · 18+ years
              </p>

              <h1
                className="mt-2 max-w-[14ch] text-[70px] font-semibold leading-[0.96] tracking-[-0.03em] text-slate-900"
                style={{ textShadow: "0 1px 2px rgba(255,255,255,0.35), 0 1px 10px rgba(15,31,70,0.08)" }}
              >
                Find the perfect villa for your vacations in Greece
              </h1>

              <p className="mt-4 max-w-[30ch] text-[45px] leading-[1.05] text-slate-800">
                Villa4you connects vetted villas, expert trip planning, and pro property management across Greece.
              </p>

              <div className="mt-4 flex flex-wrap gap-2 text-[13px] font-semibold">
                <span className="rounded-full border border-emerald-400 bg-emerald-50 px-3 py-1.5 text-emerald-700">Guests</span>
                <span className="rounded-full border border-rose-300 bg-rose-50 px-3 py-1.5 text-rose-700">Owners</span>
                <span className="rounded-full border border-violet-300 bg-violet-50 px-3 py-1.5 text-violet-700">Collaborate</span>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                <button className="h-11 rounded-[10px] bg-slate-900 text-[15px] font-medium text-white">Find a Villa</button>
                <button className="h-11 rounded-[10px] border border-slate-400 bg-white/70 text-[15px] font-medium text-slate-800">Plan My Trip</button>
              </div>

              <div className="mt-4 rounded-[12px] border border-slate-300 bg-white/85 p-2.5 backdrop-blur">
                <div className="grid gap-2 lg:grid-cols-12">
                  <input className="h-10 rounded-lg border border-slate-300 bg-white px-3 text-[13px] text-slate-800 placeholder:text-slate-500 lg:col-span-4" placeholder="Type a place (e.g., Santorini, Paros)" />
                  <input className="h-10 rounded-lg border border-slate-300 bg-white px-3 text-[13px] text-slate-800 placeholder:text-slate-500 lg:col-span-2" placeholder="dd/mm/yyyy" />
                  <input className="h-10 rounded-lg border border-slate-300 bg-white px-3 text-[13px] text-slate-800 placeholder:text-slate-500 lg:col-span-2" placeholder="dd/mm/yyyy" />
                  <input className="h-10 rounded-lg border border-slate-300 bg-white px-3 text-[13px] text-slate-800 lg:col-span-2" defaultValue="2" />
                  <button className="h-10 rounded-lg bg-slate-900 px-4 text-[14px] font-medium text-white lg:col-span-2">Search</button>
                </div>
                <p className="mt-1.5 text-[11px] text-slate-600">Tip: this destination will also be included in the Quick Request.</p>
              </div>

              <div className="mt-3 flex flex-wrap gap-4 text-[14px] text-slate-700">
                <span>⭐ 4.8/5 guest reviews</span>
                <span>🏝️ 6+ top destinations</span>
                <span className="hidden md:inline">🔄 seamless Planyo bookings</span>
              </div>
            </div>

            <aside className="w-full max-w-[360px] rounded-[16px] border border-slate-300 bg-white/90 p-3.5 shadow-sm">
              <h2 className="text-[18px] font-semibold leading-none text-slate-900">Quick Request</h2>
              <p className="mt-1 text-[11px] text-slate-600">Get a shortlist fast — 60 seconds.</p>

              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {fields.map((label) => (
                  <label key={label} className="text-[10px] font-semibold text-slate-700">
                    {label}
                    <input
                      className="mt-1 h-9 w-full rounded-md border border-slate-300 bg-white px-2.5 text-[12px] text-slate-800"
                      placeholder={label.includes("0–3") ? "0" : "Please Select"}
                    />
                  </label>
                ))}
              </div>

              <div className="mt-3 flex justify-end">
                <button className="h-9 min-w-[72px] rounded-md bg-blue-600 px-3 text-[13px] font-semibold text-white">Next</button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
