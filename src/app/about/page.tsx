import { CheckList, FeatureGrid, Hero, PageShell, SectionTitle } from '@/components/site';
import { AboutPlatformDiagram } from '@/components/diagrams';

const platformAreas = [
  {
    title: 'Travel & Guest Experience',
    desc: 'Accommodation discovery, trip support, and destination services in one flow.',
    icon: '✈️',
  },
  {
    title: 'Owner & Property Growth',
    desc: 'Listing exposure, bookings, and management support for property owners.',
    icon: '🏡',
  },
  {
    title: 'Service Marketplace',
    desc: 'Connect trusted local providers with guests, owners, and managers.',
    icon: '🛎️',
  },
  {
    title: 'Agent & Partner Tools',
    desc: 'Referral systems, white-label offers, and conversion-focused workflows.',
    icon: '🤝',
  },
];

const values = [
  'Collaboration first — every role in the ecosystem should benefit',
  'Transparent operations and clear commercial models',
  'Practical technology that solves real day-to-day problems',
  'Local expertise combined with global platform access',
  'Long-term partnerships over one-time transactions',
];

const ecosystem = [
  { title: 'Guests', desc: 'Find stays, services, and destination guidance.', icon: '🧳' },
  { title: 'Owners', desc: 'List and manage properties with better visibility.', icon: '🏠' },
  { title: 'Service Providers', desc: 'Offer valuable local services to active demand.', icon: '🧰' },
  { title: 'Agents', desc: 'Promote and monetize through trusted inventory.', icon: '📢' },
  { title: 'PM Companies', desc: 'Scale operations with centralized control.', icon: '📊' },
];

export default function AboutPage() {
  return (
    <PageShell>
      <Hero
diagram={<AboutPlatformDiagram />}
                title="About ClickyTour"
        subtitle="ClickyTour was built to connect travelers, property stakeholders, and service partners in one practical platform for growth."
        ctaA="Explore the Platform"
        ctaB="Talk to Our Team"
      />

      

      <section className="section">
        <div className="container grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <SectionTitle
              eyebrow="Our Story"
              title="From Local Operations to a Connected Ecosystem"
              subtitle="After years of hands-on experience in tourism, rentals, and real estate, we created ClickyTour to unify fragmented workflows and partnerships."
            />
          </div>
          <div className="card p-6 md:p-8 text-slate-700">
            <p>
              Our mission is simple: make collaboration easier between guests, owners, providers, agents, and PM companies.
              Instead of disconnected tools, emails, and spreadsheets, ClickyTour offers one ecosystem where each role can
              discover opportunities, operate efficiently, and grow with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionTitle eyebrow="What We Do" title="A Platform Built Around Real Use Cases" />
          <FeatureGrid items={platformAreas} cols={4} />
        </div>
      </section>

      <section className="section">
        <div className="container grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <SectionTitle eyebrow="Our Values" title="Principles That Guide Every Decision" />
            <CheckList items={values} />
          </div>
          <div>
            <SectionTitle eyebrow="Our Ecosystem" title="Who We Serve" />
            <FeatureGrid items={ecosystem} cols={2} />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
