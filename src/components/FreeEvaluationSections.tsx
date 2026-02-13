const models = [
  {
    title: "Self-Managed Assist",
    badge: "You run ops",
    bullets: [
      "Listing tune-up (photos brief, copy, amenities mapping)",
      "Smart pricing rules for Greek seasonality & events",
      "Channel setup/health (Airbnb, Booking.com, Vrbo, Google Vacation Rentals)",
      "Owner handles guest comms & housekeeping",
    ],
  },
  {
    title: "Multi-Platform",
    badge: "Co-managed",
    bullets: [
      "Full multi-channel distribution & sync",
      "7/7 multilingual guest comms (EN/EL + optional DE/FR/RU)",
      "Revenue & yield management + min-stay/L.O.S control",
      "Access to vetted cleaners, laundry, pool/garden, transfers",
    ],
  },
  {
    title: "Fully Managed",
    badge: "Hands-off",
    bullets: [
      "End-to-end operations with quality standards, reporting and owner peace of mind",
      "Guest support 24/7, check-in/out & in-stay care",
      "Housekeeping schedule, linens, maintenance coordination",
      "Upsells & concierge (transfers, tours, chefs, activities)",
    ],
  },
];

export function FreeEvaluationSections() {
  return (
    <>
      <section className="mx-auto max-w-[1280px] px-4 pb-6 pt-4">
        <div className="rounded-2xl border border-slate-300 bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">Owner revenue intake</p>
          <h1 className="mt-2 text-[42px] font-semibold leading-none text-slate-900">Free Evaluation for your villa</h1>
          <p className="mt-3 text-[21px] text-slate-600">Get a practical growth plan in minutes. Share your property details and we’ll recommend the best model.</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 pb-6">
        <h2 className="text-[42px] font-semibold leading-none text-slate-900">Choose the management model that fits your villa</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {models.map((m) => (
            <article key={m.title} className="rounded-xl border border-slate-300 bg-white">
              <div className="border-b border-slate-300 p-4">
                <span className="inline-block rounded-full border border-slate-300 px-2 py-1 text-xs text-slate-600">{m.badge}</span>
                <h3 className="mt-2 text-[30px] font-semibold leading-none text-slate-900">{m.title}</h3>
              </div>
              <ul className="space-y-2 p-4 text-[18px] text-slate-800">
                {m.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
              <div className="border-t border-slate-300 p-4">
                <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white">Get Free Evaluation</button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-300 bg-white">
          <table className="w-full min-w-[900px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-300 bg-slate-50 text-left text-slate-700">
                <th className="p-3">Area</th>
                <th className="p-3">Self-Managed Assist</th>
                <th className="p-3">Multi-Platform</th>
                <th className="p-3">Fully Managed</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {[
                ["Channel distribution", "Core OTAs setup & audits", "Full multi-channel + sync", "Full multi-channel + sync"],
                ["Revenue/yield management", "Rules & seasonality", "Dynamic pricing", "Dynamic pricing"],
                ["Guest communications", "Owner", "Villa4you 7/7", "Villa4you 24/7"],
                ["On-site operations", "Owner team", "Owner or Villa4you providers", "Villa4you end-to-end"],
                ["Reporting", "Monthly lite", "Monthly detailed", "Monthly + season planning"],
              ].map((row) => (
                <tr key={row[0]} className="border-b border-slate-200">
                  {row.map((cell) => (
                    <td key={cell} className="p-3">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 pb-10">
        <div className="rounded-2xl border border-slate-300 bg-white p-4">
          <h2 className="text-[42px] font-semibold leading-none text-slate-900">Owner / Property Intake Form</h2>
          <p className="mt-2 text-[21px] text-slate-600">UI-only step form (fields aligned to your sample). Integration will be connected later.</p>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-xl border border-slate-300 bg-slate-50 p-3 text-sm text-slate-700">Step 1 · Request & Contact</div>
            <div className="rounded-xl border border-slate-300 bg-slate-50 p-3 text-sm text-slate-700">Step 2 · Region & Property</div>
            <div className="rounded-xl border border-slate-300 bg-slate-50 p-3 text-sm text-slate-700">Step 3 · Distances & Amenities</div>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <label className="text-sm text-slate-700">Request Type *<select className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900"><option>Property Evaluation</option></select></label>
            <label className="text-sm text-slate-700">Property Type *<select className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900"><option>Villa</option></select></label>
            <label className="text-sm text-slate-700">First Name *<input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" /></label>
            <label className="text-sm text-slate-700">Last Name *<input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" /></label>
            <label className="text-sm text-slate-700">Email *<input type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" /></label>
            <label className="text-sm text-slate-700">Phone<input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="+30 ..." /></label>
            <label className="text-sm text-slate-700">Region *<select className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900"><option>Crete</option></select></label>
            <label className="text-sm text-slate-700">Google Map URL<input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="https://..." /></label>
            <label className="text-sm text-slate-700">Bedrooms *<input type="number" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" /></label>
            <label className="text-sm text-slate-700">Bathrooms<input type="number" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" /></label>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {['Pool','Sea view','Parking','Wi-Fi','Pet-friendly','Chef-ready','Gym','Hot tub'].map((a) => (
              <span key={a} className="rounded-full border border-slate-300 bg-white px-3 py-1 text-sm text-slate-700">{a}</span>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-3">
            <button className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white">Submit evaluation request</button>
            <button className="rounded-xl border border-slate-800 bg-white px-5 py-2.5 text-sm font-medium text-slate-900">Save draft</button>
          </div>
        </div>
      </section>
    </>
  );
}
