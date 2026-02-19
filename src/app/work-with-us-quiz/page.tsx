import { FAQ, FeatureGrid, Hero, PageShell, SectionTitle } from '@/components/site';

const steps = [
  {
    title: 'Answer Simple Questions',
    desc: 'Tell us about your property, business, experience, and goals in just a few quick steps.',
    icon: '🧩',
  },
  {
    title: 'Get Matched to a Role',
    desc: 'Our quiz suggests the most relevant path for you inside the ClickyTour ecosystem.',
    icon: '🎯',
  },
  {
    title: 'Start Right Away',
    desc: 'You are directed to the matching onboarding page with practical next actions.',
    icon: '🚀',
  },
];

const benefits = [
  {
    title: 'Clarity in Minutes',
    desc: 'No guesswork. Quickly understand where you can add the most value.',
    icon: '⚡',
  },
  {
    title: 'Relevant Tools',
    desc: 'See the features and workflows designed for your exact role.',
    icon: '🛠️',
  },
  {
    title: 'Faster Onboarding',
    desc: 'Skip generic setup and begin with role-specific guidance.',
    icon: '🧭',
  },
];

const faq = [
  {
    q: 'Is this a real assessment?',
    a: 'This is a lightweight mock quiz page for now. It reflects the content and flow from the original WordPress page.',
  },
  {
    q: 'How long does it take?',
    a: 'Usually 1–2 minutes. The goal is to quickly map your profile to the best role.',
  },
  {
    q: 'Can I explore all roles anyway?',
    a: 'Yes. You can still browse all role pages after seeing your suggested path.',
  },
];

export default function WorkWithUsQuizPage() {
  return (
    <PageShell>
      <Hero
        title="Not Sure Where You Fit? Find Your ClickyTour Role"
        subtitle="Answer a few quick questions and discover the role that best matches your skills, resources, and goals."
        ctaA="Start Quiz"
        ctaB="Explore All Roles"
      />

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Why Work With ClickyTour" title="How It Works" />
          <FeatureGrid items={steps} cols={3} />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionTitle
            eyebrow="Benefits of Taking the Quiz"
            title="Take Your Next Step With Confidence"
            subtitle="Unlock the right tools and direction before you commit time and effort."
          />
          <FeatureGrid items={benefits} cols={3} />
        </div>
      </section>

      <section className="section">
        <div className="container max-w-4xl">
          <SectionTitle title="FAQ" subtitle="Common questions before you begin." />
          <FAQ items={faq} />
        </div>
      </section>
    </PageShell>
  );
}
