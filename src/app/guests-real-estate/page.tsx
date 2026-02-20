import Link from 'next/link';
import { GuestServicesDiagram } from '@/components/diagrams';
import { FeatureGrid, Hero, PageShell, SectionTitle } from '@/components/site';

const reasons = [
  { title: 'Lifestyle & Climate', desc: 'Year-round sun, sea access, and rich local culture.', icon: '☀️' },
  { title: 'Investment Potential', desc: 'Attractive pricing with rental and resale upside in key areas.', icon: '📈' },
  { title: 'Golden Visa Paths', desc: 'Residency routes for qualifying non-EU investments.', icon: '🛂' },
  { title: 'Remote-Work Friendly', desc: 'Strong fit for flexible living and long stays.', icon: '💼' },
];

const propertyTypes = [
  { title: 'Villas', desc: 'Sea-view or beach-close properties for private use or rental.', icon: '🏖️' },
  { title: 'Apartments', desc: 'Urban and touristic options with practical accessibility.', icon: '🏙️' },
  { title: 'Land', desc: 'Plots for custom build opportunities and long-term planning.', icon: '🌿' },
  { title: 'Renovation Projects', desc: 'Classic properties with upgrade and value-add potential.', icon: '🔧' },
];

export default function GuestsRealEstatePage() {
  return (
    <PageShell>
      <Hero
diagram={<GuestServicesDiagram/>}
                title="Real Estate"
        subtitle="Explore property opportunities in Greece for relocation, investment, vacation homes, or long-term lifestyle plans."
        ctaA="Browse properties"
        ctaB="Request property match" ctaHrefA="/guests-real-estate-request" ctaHrefB="/real-estate"
      />

      

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Why Buy in Greece" title="Strong lifestyle and investment fundamentals" />
          <FeatureGrid items={reasons} cols={4} />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionTitle eyebrow="What You Can Buy" title="Property categories" subtitle="The source page presents villas, apartments, land, and renovation opportunities as the main tracks." />
          <FeatureGrid items={propertyTypes} cols={4} />
        </div>
      </section>

      <section className="section">
        <div className="container grid lg:grid-cols-2 gap-6">
          <article className="card p-6">
            <h3 className="text-xl font-bold text-[#0F2B46]">Search criteria used by buyers</h3>
            <ul className="mt-4 space-y-2 text-slate-600 list-disc list-inside">
              <li>Mode: Buy or monthly rent</li>
              <li>Type: Home, land, or business</li>
              <li>Region, size range, bedrooms, and budget</li>
              <li>Features: sea view, pool, parking, garden, condition</li>
              <li>Timeframe: immediate, 1–3 months, or flexible</li>
            </ul>
          </article>
          <article className="card p-6">
            <h3 className="text-xl font-bold text-[#0F2B46]">End-to-end support</h3>
            <p className="mt-3 text-slate-600">ClickyTour partner advisors can assist with inspections, legal steps, paperwork coordination, and local professional referrals.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/contact/" className="btn-primary">Speak with an advisor</Link>
              <Link href="/guests-help-contact/" className="btn-secondary">Support contacts</Link>
            </div>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
