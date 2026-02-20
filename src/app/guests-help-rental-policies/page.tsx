import Link from 'next/link';
import { Hero, PageShell, SectionTitle } from '@/components/site';

export default function GuestsHelpRentalPoliciesPage() {
  return (
    <PageShell>
      <Hero
        title="Rental Policies"
        subtitle="Understand the key stay rules and policy checks to avoid surprises before and during your booking."
        ctaA="Review policies"
        ctaB="Ask a question" ctaHrefA="/guests-help-contact" ctaHrefB="/guests-help"
      />

      <section className="section">
        <div className="container">
          <SectionTitle title="Core policy areas" subtitle="This page was created from title intent because WP content is empty." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { t: 'Check-in & Check-out', d: 'Timings, arrival procedures, late check-in conditions.' },
              { t: 'Guest Capacity', d: 'Maximum occupancy and visitor rules by property.' },
              { t: 'House Rules', d: 'Noise, smoking, parties, pets, and shared-space conduct.' },
              { t: 'Security Deposits', d: 'If required, terms and return conditions are shown in advance.' },
              { t: 'Property Care', d: 'Respectful use of amenities and reporting damages promptly.' },
              { t: 'Local Compliance', d: 'Follow local laws and community requirements during your stay.' },
            ].map((item) => (
              <article key={item.t} className="card p-5">
                <h3 className="font-bold text-[#0F2B46]">{item.t}</h3>
                <p className="text-sm text-slate-600 mt-2">{item.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container card p-6 md:p-8">
          <h3 className="text-2xl font-bold text-[#0F2B46]">Policy reminder</h3>
          <p className="text-slate-600 mt-3">
            Always review listing-specific policies before payment, since terms can vary by host, location, and booking dates.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/guests-help-refunds-cancellation/" className="btn-primary">Refunds & cancellation</Link>
            <Link href="/guests-help-contact/" className="btn-secondary">Contact support</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
