const pmcTrustStats = [
  { title: "18+ yrs", text: "Hospitality & villa operations" },
  { title: "Multi-channel", text: "Distribution + pricing stack" },
  { title: "Owner-ready", text: "Reporting & governance" },
  { title: "Fast launch", text: "Onboarding in days, not months" },
];

const pmcBenefits = [
  {
    title: "More qualified bookings",
    text: "We position your managed portfolio across high-intent channels with better listing quality, pricing rhythm, and conversion UX.",
    bullets: ["OTA + direct channel synchronization", "Rate strategy aligned by season", "Portfolio-level occupancy improvements"],
  },
  {
    title: "Operational clarity for owners",
    text: "Create trust with structured reporting and service standards owners can understand without micro-managing daily operations.",
    bullets: ["Owner-friendly monthly reporting", "SLA-based guest communication model", "Content & quality standards by property"],
  },
  {
    title: "Scalable partnership model",
    text: "Start with one destination and scale to multiple regions with a repeatable go-to-market framework.",
    bullets: ["Destination-by-destination expansion", "Shared marketing opportunities", "Structured escalation & support workflow"],
  },
];

const pmcFlow = [
  {
    title: "1) Discovery call",
    text: "We align on destinations, property types, portfolio size, and your current performance baseline.",
  },
  {
    title: "2) Pilot launch",
    text: "We activate a focused portfolio set to validate pricing, content, and response-time workflows.",
  },
  {
    title: "3) Scale across regions",
    text: "After pilot success, we expand channel mix and growth targets with clear reporting cadence.",
  },
];

const pmcCoveragePills = [
  "Halkidiki",
  "Crete",
  "Santorini",
  "Mykonos",
  "Athens",
  "Paros",
  "Family Villas",
  "Luxury Villas",
  "Beachfront",
  "Complexes",
];

const pmcFaqItems = [
  {
    question: "Who is this partnership ideal for?",
    answer:
      "PMCs managing villas or complexes that want stronger occupancy, clearer owner reporting, and scalable distribution workflows.",
  },
  {
    question: "Do you support one destination only or multi-region PMCs?",
    answer:
      "Both. Many PMCs start with one region and expand after the pilot phase proves conversion and operational fit.",
  },
  {
    question: "What is required to start?",
    answer:
      "A short company profile, portfolio scope, service regions, and your preferred operating model. We then run a structured onboarding review.",
  },
  {
    question: "How fast can we go live?",
    answer:
      "Typical timeline is 7–21 days depending on portfolio readiness, media quality, and selected collaboration scope.",
  },
];

export function PartnerPmcSections() {
  return (
    <>
      <section className="mx-auto max-w-[1280px] px-4 pb-6">
        <div className="grid gap-3 md:grid-cols-4">
          {pmcTrustStats.map((card) => (
            <article key={card.title} className="rounded-xl border border-slate-200 bg-white px-4 py-3">
              <h2 className="text-[42px] font-semibold leading-none text-slate-900">{card.title}</h2>
              <p className="mt-1 text-[21px] text-slate-500">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 pb-6">
        <div className="rounded-[24px] border border-slate-200 bg-white/95 p-5 shadow-sm md:p-6">
          <h2 className="text-[42px] font-semibold tracking-[-0.01em] text-slate-900">Why PMCs partner with Villa4you</h2>
          <p className="mt-2 text-[21px] text-slate-700">
            A practical growth model designed for real operations: stronger booking flow, clearer owner communication, and controlled scale.
          </p>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {pmcBenefits.map((benefit) => (
              <article key={benefit.title} className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-[30px] font-semibold leading-none text-slate-900">{benefit.title}</h3>
                <p className="mt-3 text-[21px] text-slate-700">{benefit.text}</p>
                <ul className="mt-3 list-disc space-y-1 pl-6 text-[19px] text-slate-800">
                  {benefit.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 pb-6">
        <div className="rounded-[24px] border border-slate-200 bg-white/95 p-5 shadow-sm md:p-6">
          <h2 className="text-[42px] font-semibold tracking-[-0.01em] text-slate-900">How the PMC onboarding works</h2>
          <p className="mt-2 text-[21px] text-slate-700">Clear stages, concrete deliverables, and transparent timelines.</p>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {pmcFlow.map((step) => (
              <article key={step.title} className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-[30px] font-semibold leading-none text-slate-900">{step.title}</h3>
                <p className="mt-3 text-[21px] text-slate-700">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 pb-6">
        <div className="rounded-[24px] border border-slate-200 bg-white/95 p-5 shadow-sm md:p-6">
          <h2 className="text-[42px] font-semibold tracking-[-0.01em] text-slate-900">Coverage & portfolio fit</h2>
          <p className="mt-2 text-[21px] text-slate-700">We support PMCs across key Greek destinations and high-demand villa categories.</p>

          <div className="mt-4 grid gap-3 sm:grid-cols-3 md:grid-cols-5">
            {pmcCoveragePills.map((pill) => (
              <span key={pill} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-center text-sm text-slate-600">
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 pb-6">
        <div className="rounded-[24px] border border-slate-200 bg-white/95 p-6 text-center shadow-sm md:p-8">
          <h2 className="text-[42px] font-semibold leading-none tracking-[-0.01em] text-slate-900">Ready to grow your PMC portfolio with Villa4you?</h2>
          <p className="mt-3 text-[21px] text-slate-700">Apply now and we&apos;ll review your profile, coverage, and go-live plan.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a href="/pmc-apply" className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white">
              Apply as PMC
            </a>
            <a href="/collaborate" className="rounded-xl border border-slate-400 bg-white px-5 py-2.5 text-sm font-medium text-slate-800">
              View all collaboration paths
            </a>
            <a href="/support" className="rounded-xl border border-slate-400 bg-white px-5 py-2.5 text-sm font-medium text-slate-800">
              Talk to support
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 pb-10">
        <div className="rounded-[24px] border border-blue-200 bg-white/95 p-5 shadow-sm md:p-6">
          <h2 className="text-[42px] font-semibold tracking-[-0.01em] text-slate-900">PMC partnership FAQ</h2>
          <div className="mt-4 overflow-hidden rounded-xl border border-blue-200 bg-white">
            {pmcFaqItems.map((item, idx) => (
              <details key={item.question} className={idx < pmcFaqItems.length - 1 ? "border-b border-blue-200" : ""} open={idx === pmcFaqItems.length - 1}>
                <summary className="cursor-pointer list-none px-4 py-3 text-[30px] font-semibold text-slate-900 marker:content-none">
                  {item.question}
                </summary>
                <p className="px-4 pb-4 text-[21px] text-slate-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
