import { FAQ, FeatureGrid, Hero, PageShell, SectionTitle } from '@/components/site';

const hiringGroups = [
  {
    title: 'Property Management Companies',
    desc: 'Need staff for guest services, maintenance, and admin operations.',
    icon: '🏢',
  },
  {
    title: 'Vacation Property Owners',
    desc: 'Often hiring cleaners, check-in assistants, and support staff.',
    icon: '🏡',
  },
  {
    title: 'Real Estate Agencies',
    desc: 'Looking for sales agents, listing assistants, and office support.',
    icon: '🏘️',
  },
  {
    title: 'Service Businesses',
    desc: 'Opportunities for drivers, chefs, guides, and wellness experts.',
    icon: '🛎️',
  },
  {
    title: 'Agents & Affiliates',
    desc: 'Openings for resellers, coordinators, and growth assistants.',
    icon: '🤝',
  },
  {
    title: 'Tour Guide Partners',
    desc: 'Regional guide roles for local destination experiences.',
    icon: '🧭',
  },
];

const openRoles = [
  { title: 'Property Manager Coordinator', desc: 'Coordinate daily operations and owner communication.', icon: '📋' },
  { title: 'Partnership Manager', desc: 'Build B2B relationships in real estate and services.', icon: '🌐' },
  { title: 'Affiliate Marketing Specialist', desc: 'Grow referral partnerships and performance campaigns.', icon: '📈' },
  { title: 'Front-End Web Developer', desc: 'Support React and Elementor-based web experiences.', icon: '💻' },
  { title: 'Content Creator', desc: 'Create travel and real-estate focused media content.', icon: '🎬' },
];

const faq = [
  {
    q: 'How do I apply?',
    a: 'Choose a role, prepare your CV/portfolio, and submit through the application flow. This page currently uses mock actions.',
  },
  {
    q: 'Can I send an open application?',
    a: 'Yes. If your role is not listed, you can still submit an open application for future matching.',
  },
  {
    q: 'Is this connected to a live ATS?',
    a: 'No. This implementation is static/mock and does not connect to external job systems yet.',
  },
];

export default function WorkWithUsJobsPage() {
  return (
    <PageShell>
      <Hero
        title="Find Your Next Role in Vacation Rentals, Real Estate & Tourism"
        subtitle="Jobs posted by ClickyTour and trusted partners across our network."
        ctaA="Browse Vacancies"
        ctaB="Send CV for Matching"
      />

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Who’s Hiring on ClickyTour"
            title="Opportunities From Our Network"
            subtitle="Instant access to opportunities across rentals, real estate, and travel services."
          />
          <FeatureGrid items={hiringGroups} cols={3} />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionTitle eyebrow="Current Openings" title="Open Vacancies" />
          <FeatureGrid items={openRoles} cols={3} />
        </div>
      </section>

      <section className="section">
        <div className="container max-w-4xl">
          <SectionTitle title="How to Apply" subtitle="Choose a role, submit your profile, and we will contact you for next steps." />
          <FAQ items={faq} />
        </div>
      </section>
    </PageShell>
  );
}
