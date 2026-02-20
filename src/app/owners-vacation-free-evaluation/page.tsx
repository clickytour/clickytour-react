'use client';
import { PageShell } from '@/components/site';
import { OwnerFreeEvalDiagram } from '@/components/diagrams';
import { FreeEvaluationForm } from '@/components/forms';

export default function FreeEvaluation() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-16 md:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">
            <div>
              <p className="text-cyan-200 text-xs font-semibold uppercase tracking-[0.1em]">For Owners</p>
              <h1 className="text-4xl md:text-5xl font-extrabold mt-2">Free Villa Evaluation: Pricing Plan, Demand Insights & Next-Step Options</h1>
              <p className="max-w-3xl mt-4 text-cyan-100 text-lg">Get a concise review of your property&apos;s revenue potential across channels, with a clear plan for Self-Managed, Multi-Platform Sync, or Fully Managed models.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="#eval-form" className="btn-primary">Start Free Evaluation</a>
                <button className="btn-secondary">Book a 15-min Call</button>
              </div>
              <p className="mt-3 text-sm text-cyan-200/70">Response within 1-2 business days.</p>
            </div>
            <div className="hidden lg:block max-w-sm"><OwnerFreeEvalDiagram /></div>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-4">
            {[["18+ yrs", "Greek hospitality"], ["Multi-channel", "Distribution & pricing"], ["Transparent", "Reporting & KPIs"], ["On-the-ground", "Trusted partners"]].map(([t, s]) => (
              <div key={t} className="rounded-xl border border-white/20 bg-white/10 p-3">
                <p className="text-2xl font-bold">{t}</p>
                <p className="mt-1 text-sm text-cyan-100">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FreeEvaluationForm />

      <section className="section">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
          <div className="mt-4 overflow-hidden rounded-xl border border-slate-300 bg-white">
            {[
              { q: "Is the evaluation really free?", a: "Yes. It's a complimentary assessment to help you understand fit and potential." },
              { q: "How fast do I get results?", a: "Usually within 1-2 business days." },
              { q: "Can I keep my existing team?", a: "Absolutely. We coordinate with your team and add distribution, pricing, and guest ops." },
              { q: "Which areas do you cover?", a: "Crete, Halkidiki, Santorini, Athens, Mykonos, Paros, and more via partners." },
            ].map((item, idx) => (
              <details key={item.q} className={idx < 3 ? "border-b border-slate-200" : ""}>
                <summary className="cursor-pointer list-none px-4 py-3 text-lg font-semibold text-slate-900">{item.q}</summary>
                <div className="px-4 pb-4"><p className="text-slate-600">{item.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="rounded-2xl bg-[#0F2B46] text-white p-8 md:p-10 text-center">
            <h2 className="text-3xl font-extrabold">Ready to see your villa&apos;s revenue upside?</h2>
            <p className="text-cyan-100 mt-2">Submit the form above or schedule a quick intro call.</p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <a href="#eval-form" className="btn-primary">Start Free Evaluation</a>
              <button className="btn-secondary">Book a 15-min Call</button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
