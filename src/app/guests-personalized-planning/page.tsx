import Link from 'next/link';
import { GuestPlanningDiagram } from '@/components/diagrams';
import { CheckList, Hero, PageShell, SectionTitle } from '@/components/site';

const benefits = [
  'Personal guidance from local experts',
  'Verified homes and trusted service partners',
  'Transparent proposals with clear next steps',
  'Flexible options beyond generic booking platforms',
  'Direct support before and during your stay',
];

const process = [
  { title: 'Step 1 — Tell us about your trip', desc: 'Share dates, destination preferences, group size, and must-haves.' },
  { title: 'Step 2 — We curate options', desc: 'Our team reviews stays, services, and logistics that fit your profile.' },
  { title: 'Step 3 — Receive your proposal', desc: 'Get tailored recommendations with pricing and booking-ready links.' },
];

export default function GuestsPersonalizedPlanningPage() {
  return (
    <PageShell>
      <Hero
diagram={<GuestPlanningDiagram />}
                title="Personalized Planning"
        subtitle="Answer a few questions and receive a tailored trip proposal for your Greek vacation — practical, fast, and personalized."
        ctaA="Start planning"
        ctaB="See how it works"
      />

      

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="How It Works" title="A simple 3-step planning flow" />
          <div className="grid md:grid-cols-3 gap-4">
            {process.map((step) => (
              <article key={step.title} className="card p-5">
                <h3 className="font-bold text-[#0F2B46]">{step.title}</h3>
                <p className="text-sm text-slate-600 mt-2">{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container grid lg:grid-cols-2 gap-8">
          <div>
            <SectionTitle eyebrow="Why Guests Choose This" title="Planning with local support" />
            <CheckList items={benefits} />
          </div>
          <article className="card p-6">
            <h3 className="text-xl font-bold text-[#0F2B46]">What you can include in your request</h3>
            <ul className="mt-4 space-y-2 text-slate-600 list-disc list-inside">
              <li>Check-in / check-out dates and destination region</li>
              <li>Adults, children, bedrooms, and trip purpose</li>
              <li>Budget range and preferred distance to beach/town</li>
              <li>Optional needs: pool, sea view, parking, fast Wi-Fi</li>
              <li>Special notes for events, accessibility, or logistics</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="rounded-xl bg-[#0F2B46] text-white p-8 md:p-10">
            <h2 className="text-3xl font-extrabold">Ready for your tailored proposal?</h2>
            <p className="mt-3 text-cyan-100">Our team will prepare recommendations matched to your needs, not generic listings.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/trip-planer/" className="btn-primary">Start trip planner</Link>
              <Link href="/guests-help/" className="btn-secondary">Questions before booking?</Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
