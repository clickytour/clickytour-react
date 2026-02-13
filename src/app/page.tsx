import Link from "next/link";

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

const cards = [
  {
    title: "For Guests",
    text: "Hand-picked villas with local support, transfers, and activities. Book with confidence.",
    href: "/vacation-assistance",
  },
  {
    title: "For Owners",
    text: "Choose the right management model and grow revenue with transparent reporting.",
    href: "/for-owners",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Collaborate",
    text: "PMCs, providers, and agents: partner for net pricing, listings, and shared tools.",
    href: "/collaborate",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <div className="mx-auto max-w-[1280px] px-3 pb-16 pt-5 md:px-6 md:pt-8">
        <section className="rounded-[24px] border border-white/20 bg-[radial-gradient(circle_at_20%_0%,#0f1f46_0%,#090f22_40%,#070b16_75%,#050913_100%)] p-3 md:p-5 lg:p-7">
          <div className="grid gap-4 lg:grid-cols-[1fr_430px] lg:gap-6">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-emerald-300">
                Trusted villa stays & management · 18+ years
              </p>
              <h1 className="mt-2 max-w-[16ch] text-[62px] font-semibold leading-[0.98] tracking-[-0.03em] text-white md:text-[72px] lg:text-[78px]">
                Find the perfect villa for your vacations in Greece
              </h1>
              <p className="mt-4 max-w-[34ch] text-[20px] leading-[1.35] text-white/82 md:text-[22px]">
                Villa4you connects vetted villas, expert trip planning, and pro property management across Greece.
              </p>

              <div className="mt-4 flex flex-wrap gap-2.5 text-[15px] font-semibold">
                <span className="rounded-full border border-emerald-300/70 bg-emerald-400/15 px-4 py-2 text-emerald-200">Guests</span>
                <span className="rounded-full border border-rose-300/60 bg-rose-400/10 px-4 py-2 text-rose-200">Owners</span>
                <span className="rounded-full border border-fuchsia-300/60 bg-fuchsia-400/10 px-4 py-2 text-fuchsia-200">Collaborate</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                <button className="h-[56px] rounded-[14px] bg-black text-[39px] font-medium leading-none tracking-[-0.02em] text-[#efe07d] md:text-[42px]">
                  Find a Villa
                </button>
                <button className="h-[56px] rounded-[14px] border border-white/45 bg-white/5 text-[39px] font-medium leading-none tracking-[-0.02em] text-[#efe07d] md:text-[42px]">
                  Plan My Trip
                </button>
              </div>

              <div className="mt-4 rounded-[16px] border border-white/25 bg-black/20 p-3">
                <div className="grid gap-2.5 md:grid-cols-[2fr_1fr_1fr_0.9fr_auto]">
                  <input className="h-[52px] rounded-xl border border-white/20 bg-white/10 px-4 text-[17px] placeholder:text-white/55" placeholder="Type a place (e.g., Santorini, Paros)" />
                  <input className="h-[52px] rounded-xl border border-white/20 bg-white/10 px-4 text-[17px] placeholder:text-white/55" placeholder="dd/mm/yyyy" />
                  <input className="h-[52px] rounded-xl border border-white/20 bg-white/10 px-4 text-[17px] placeholder:text-white/55" placeholder="dd/mm/yyyy" />
                  <input className="h-[52px] rounded-xl border border-white/20 bg-white/10 px-4 text-[17px]" defaultValue="2" />
                  <button className="h-[52px] rounded-xl bg-black px-5 text-[34px] font-medium leading-none tracking-[-0.02em] text-white md:text-[30px]">Search</button>
                </div>
                <p className="mt-2 text-[13px] text-white/65">Tip: this destination will also be included in the Quick Request.</p>
              </div>

              <div className="mt-3 flex flex-wrap gap-4 text-[20px] text-white/88">
                <span>⭐ 4.8/5 guest reviews</span>
                <span>🏝️ 6+ top destinations</span>
                <span className="hidden md:inline">🔄 seamless Planyo bookings</span>
              </div>
            </div>

            <aside className="rounded-[20px] border border-white/25 bg-white/5 p-4 backdrop-blur">
              <h2 className="text-[36px] font-semibold leading-none">Quick Request</h2>
              <p className="mt-1 text-sm text-white/70">Get a shortlist fast — 60 seconds.</p>

              <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-2">
                {fields.map((label) => (
                  <label key={label} className="text-[14px] font-semibold text-white/90">
                    {label}
                    <input
                      className="mt-1 h-[50px] w-full rounded-xl border border-white/25 bg-black/30 px-3 text-[15px] placeholder:text-white/55"
                      placeholder={label.includes("0–3") ? "0" : "Please Select"}
                    />
                  </label>
                ))}
              </div>

              <div className="mt-4 flex justify-end">
                <button className="h-12 min-w-[92px] rounded-xl bg-blue-600 px-4 text-[17px] font-semibold">Next</button>
              </div>
            </aside>
          </div>
        </section>

        <section className="mt-6 grid gap-3 md:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div
                className="h-40 bg-[#0b1020] bg-cover bg-center"
                style={card.image ? { backgroundImage: `url(${card.image})` } : undefined}
              />
              <div className="p-5">
                <h3 className="text-[40px] font-semibold leading-none tracking-[-0.02em] md:text-[34px]">{card.title}</h3>
                <p className="mt-3 text-[18px] leading-[1.35] text-white/80 md:text-[16px]">{card.text}</p>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
