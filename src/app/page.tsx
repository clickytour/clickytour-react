const destinations = [
  { name: "Santorini", tags: ["Luxury", "Romance"] },
  { name: "Crete", tags: ["Family", "Gastronomy"] },
  { name: "Mykonos", tags: ["Nightlife", "Beaches"] },
];

const featuredVillas = [
  {
    name: "Villa Blue Calda",
    details: "Santorini · 4 BR · Pool · Caldera view",
  },
  { name: "Villa Olive Grove", details: "Crete · 5 BR · Family-friendly" },
  {
    name: "Villa Psarou Pearl",
    details: "Mykonos · 3 BR · Near beach clubs",
  },
];

const steps = [
  {
    title: "1) Shortlist",
    text: "Browse by destination and dates; we pre-filter options based on your needs.",
  },
  {
    title: "2) Check availability",
    text: "Live availability with transparent rates, terms, and booking policies.",
  },
  {
    title: "3) Add services",
    text: "Transfers, chef, and activities with trusted local partners.",
  },
];

const ctas = [
  {
    title: "Free Owner Evaluation",
    text: "Assess your villa’s earning potential and the right management model.",
    action: "Start evaluation",
  },
  {
    title: "Trip Planning Call",
    text: "Share your dates and vibe, and get a curated shortlist.",
    action: "Request plan",
  },
  {
    title: "Partner Welcome Pack",
    text: "For PMCs, providers, and agents: pricing, tooling, and integration guidance.",
    action: "Get the pack",
  },
];

export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
          Trusted villa stays & management · 18+ years
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
          Find the perfect villa for your vacations in Greece
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-600">
          Villa4you connects vetted villas, expert trip planning, and professional property
          management across Greece.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <span className="rounded-full bg-white px-4 py-2 shadow">⭐ 4.8/5 guest reviews</span>
          <span className="rounded-full bg-white px-4 py-2 shadow">🏝️ 6+ destinations</span>
          <span className="rounded-full bg-white px-4 py-2 shadow">🔄 seamless bookings</span>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-16 md:grid-cols-3">
        {destinations.map((destination) => (
          <article key={destination.name} className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{destination.name}</h2>
            <div className="mt-3 flex gap-2 text-xs text-slate-600">
              {destination.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-slate-100 px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl font-bold">Featured villas</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {featuredVillas.map((villa) => (
            <article key={villa.name} className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="font-semibold">{villa.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{villa.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl font-bold">How it works</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-bold">Start now</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {ctas.map((cta) => (
            <article key={cta.title} className="rounded-2xl bg-sky-900 p-6 text-white">
              <h3 className="font-semibold">{cta.title}</h3>
              <p className="mt-2 text-sm text-sky-100">{cta.text}</p>
              <button className="mt-4 rounded-lg bg-white px-3 py-2 text-sm font-medium text-sky-900">
                {cta.action}
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
