import { FAQ, Hero, PageShell, SectionTitle } from '@/components/site';

const generalFaq = [
  {
    q: 'What is ClickyTour?',
    a: 'ClickyTour is a connected platform for guests, owners, service providers, agents, and PM companies.',
  },
  {
    q: 'Do I need a paid plan to start?',
    a: 'You can explore many sections and onboarding flows first, then choose a plan based on your role and goals.',
  },
  {
    q: 'Is ClickyTour available in multiple destinations?',
    a: 'Yes. The platform supports regional growth and local partner ecosystems across destinations.',
  },
];

const roleFaqSections = [
  {
    title: 'Guests',
    items: [
      { q: 'Can I book more than accommodation?', a: 'Yes. You can discover local services, experiences, and support options alongside your stay.' },
      { q: 'How do cancellations work?', a: 'Cancellation terms depend on listing policies. Review the property terms before confirming.' },
    ],
  },
  {
    title: 'Owners',
    items: [
      { q: 'Can I list one or multiple properties?', a: 'Both are supported. You can start with one unit and scale your portfolio over time.' },
      { q: 'Do you support promotional tools?', a: 'Yes. Owners can access visibility, marketing support, and partner-led promotion options.' },
    ],
  },
  {
    title: 'Service Providers',
    items: [
      { q: 'What services can I offer?', a: 'Cleaning, maintenance, transport, wellness, guest assistance, and other destination services.' },
      { q: 'How do I get leads?', a: 'Service providers are discoverable by relevant roles and categories across the platform.' },
    ],
  },
  {
    title: 'Agents',
    items: [
      { q: 'Can I work as an affiliate?', a: 'Yes. Agents and marketing partners can join referral and commission-based programmes.' },
      { q: 'Do you provide white-label tools?', a: 'Yes. White-label and branded offer options are available in selected plans.' },
    ],
  },
  {
    title: 'PM Companies',
    items: [
      { q: 'Can we manage multiple owners in one place?', a: 'Yes. PM workflows are designed for portfolio operations and team collaboration.' },
      { q: 'Are there tools for occupancy growth?', a: 'Yes. PM companies can use listing and promotion features to improve performance.' },
    ],
  },
];

export default function FaqPage() {
  return (
    <PageShell>
      <Hero
        title="Frequently Asked Questions"
        subtitle="Find quick answers about ClickyTour and role-specific workflows."
        ctaA="Browse Help Center"
        ctaB="Contact Support"
      />

      <section className="section section-soft">
        <div className="container max-w-4xl">
          <SectionTitle title="General Questions" />
          <FAQ items={generalFaq} />
        </div>
      </section>

      <section className="section">
        <div className="container space-y-10">
          {roleFaqSections.map((section) => (
            <div key={section.title} className="max-w-4xl">
              <SectionTitle title={section.title} />
              <FAQ items={section.items} />
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
