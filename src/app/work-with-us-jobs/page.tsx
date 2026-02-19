import { CheckList, FeatureGrid, Hero, PageShell, SectionTitle } from '@/components/site';

const jobCategories = [
  {
    title: 'Cleaning & Housekeeping',
    desc: 'Villa and apartment cleaning, linen turnaround, deep cleaning and quality checks.',
    icon: '🧽',
  },
  {
    title: 'Maintenance & Repairs',
    desc: 'General maintenance, plumbing, electrical support, pool and garden care.',
    icon: '🛠️',
  },
  {
    title: 'Guest Services',
    desc: 'Check-in support, concierge services, guest communication, and local recommendations.',
    icon: '🛎️',
  },
  {
    title: 'Property Management',
    desc: 'Operations coordinators, portfolio assistants, and account managers for growing inventories.',
    icon: '🏢',
  },
  {
    title: 'Sales & Partnerships',
    desc: 'Business development, affiliate growth, and local partner acquisition.',
    icon: '🤝',
  },
  {
    title: 'Marketing & Content',
    desc: 'Content creators, social media specialists, and listing optimization support.',
    icon: '📣',
  },
];

const applySteps = [
  'Choose a category that matches your skills and experience',
  'Send your profile (CV, portfolio, and preferred location/role)',
  'Complete a short screening call with our team or partner',
  'Receive role matching and onboarding instructions',
];

const benefits = [
  {
    title: 'Flexible Work Models',
    desc: 'Find full-time, part-time, freelance, and seasonal opportunities.',
    icon: '⏱️',
  },
  {
    title: 'Growing Industry Network',
    desc: 'Work with owners, agencies, and PM companies in high-demand destinations.',
    icon: '🌍',
  },
  {
    title: 'Skill Development',
    desc: 'Gain hospitality, operations, and digital platform experience.',
    icon: '📚',
  },
  {
    title: 'Reliable Pipeline',
    desc: 'Access recurring opportunities from verified partners and projects.',
    icon: '📈',
  },
];

export default function WorkWithUsJobsPage() {
  return (
    <PageShell>
      <Hero
        title="Job Opportunities Across Tourism, Rentals & Real Estate"
        subtitle="Discover roles with ClickyTour and our partner network in cleaning, maintenance, guest services, property management and more."
        ctaA="View Opportunities"
        ctaB="Submit Your Profile"
      />

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Career Paths"
            title="Popular Job Categories"
            subtitle="We match talent with real operational needs across the ClickyTour ecosystem."
          />
          <FeatureGrid items={jobCategories} cols={3} />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionTitle
            eyebrow="Application Process"
            title="How to Apply"
            subtitle="A simple process to help us quickly match you to suitable openings."
          />
          <CheckList items={applySteps} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Why Join"
            title="Benefits of Working with ClickyTour"
          />
          <FeatureGrid items={benefits} cols={4} />
        </div>
      </section>
    </PageShell>
  );
}
