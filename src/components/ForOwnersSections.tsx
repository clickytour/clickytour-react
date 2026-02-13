const ownerHowItWorksSteps = [
  {
    title: "1) Free evaluation",
    text: "We assess your listing quality, seasonality, and pricing opportunities.",
  },
  {
    title: "2) Model & plan",
    text: "Pick Self-Managed, Multi-Platform Sync, or Fully Managed. We propose target ADR & occupancy.",
  },
  {
    title: "3) Launch & grow",
    text: "We activate channels, automate calendars, and deliver reporting that owners love.",
  },
];

export function ForOwnersSections() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 pb-6">
      <div className="rounded-[24px] border border-slate-200 bg-white/95 p-5 shadow-sm md:p-6">
        <h2 className="text-[42px] font-semibold tracking-[-0.01em] text-slate-900">How it works</h2>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {ownerHowItWorksSteps.map((step) => (
            <article key={step.title} className="rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="text-[30px] font-semibold leading-none text-slate-900">{step.title}</h3>
              <p className="mt-3 text-[21px] text-slate-700">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
