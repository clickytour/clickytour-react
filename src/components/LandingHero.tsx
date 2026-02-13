import type { HeroPageConfig } from "@/lib/landingHeroes";

export function LandingHero({ config }: { config: HeroPageConfig }) {
  return (
    <main className="min-h-screen bg-[#f3f5f8] text-slate-900">
      <section className="mx-auto max-w-[1280px] px-4 py-8">
        <div
          className="overflow-hidden rounded-[24px] border border-slate-200 p-4 md:p-6"
          style={{
            backgroundImage: `linear-gradient(110deg, rgba(255,255,255,0.72) 0%, rgba(246,250,255,0.64) 40%, rgba(238,245,252,0.56) 64%, rgba(232,241,249,0.46) 100%), url('${config.heroImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="min-w-0">
              <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-emerald-700">{config.badge}</p>

              <h1
                className="mt-2 max-w-[16ch] text-[42px] font-semibold leading-[0.96] tracking-[-0.03em] text-slate-900 md:text-[58px] lg:text-[68px]"
                style={{ textShadow: "0 1px 2px rgba(255,255,255,0.35), 0 1px 10px rgba(15,31,70,0.08)" }}
              >
                {config.title}
              </h1>

              <p className="mt-4 max-w-[34ch] text-[22px] leading-[1.08] text-slate-800 md:text-[34px] lg:text-[42px]">{config.subtitle}</p>

              <div className="mt-4 flex flex-wrap gap-2 text-[13px] font-semibold">
                {config.chips.map((chip) => (
                  <span key={chip} className="rounded-full border border-slate-300 bg-white/70 px-3 py-1.5 text-slate-800">
                    {chip}
                  </span>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                <button className="h-11 rounded-[10px] bg-slate-900 px-4 text-[15px] font-medium text-white">{config.ctaPrimary}</button>
                <button className="h-11 rounded-[10px] border border-slate-400 bg-white/75 px-4 text-[15px] font-medium text-slate-800">
                  {config.ctaSecondary}
                </button>
              </div>

              <div className="mt-4 rounded-[12px] border border-slate-300 bg-white/85 p-3 backdrop-blur">
                <p className="text-[12px] font-semibold uppercase tracking-[0.05em] text-slate-700">Key value proposition</p>
                <p className="mt-1 text-[14px] text-slate-700 md:text-[15px]">
                  Better matching, better communication, and better outcomes for guests, owners, and partners.
                </p>
              </div>

              <div className="mt-3 flex flex-wrap gap-4 text-[14px] text-slate-700">
                {config.trust.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <aside className="w-full max-w-[360px] rounded-[16px] border border-slate-300 bg-white/90 p-4 shadow-sm">
              <h2 className="text-[18px] font-semibold leading-none text-slate-900">{config.panelTitle}</h2>
              <p className="mt-1 text-[11px] text-slate-600">Contextual guidance block replacing the old quick request form.</p>

              <div className="mt-3 space-y-2.5">
                {config.panelItems.map((item) => (
                  <div key={item.label} className="rounded-xl border border-slate-200 bg-slate-50/80 p-2.5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-slate-600">{item.label}</p>
                    <p className="mt-1 text-[13px] text-slate-800">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-3 rounded-lg border border-blue-100 bg-blue-50 p-2.5 text-[12px] text-blue-900">{config.panelFooter}</div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
