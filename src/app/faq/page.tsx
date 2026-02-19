import { FAQ, PageShell, SectionTitle } from '@/components/site';

const faqItems = [
  {
    q: 'What is ClickyTour?',
    a: 'ClickyTour is a platform that connects travelers, owners, service providers, agents, and property management companies in one ecosystem.',
  },
  {
    q: 'Which user roles can use the platform?',
    a: 'The platform is built for Guests, Property Owners, Service Providers, Agents, and PM Companies.',
  },
  {
    q: 'How do I get started?',
    a: 'Choose your role, complete the relevant quick form, and the team guides you through the next onboarding steps.',
  },
  {
    q: 'Are there hidden fees?',
    a: 'No. ClickyTour highlights transparent pricing and clear fee logic for every workflow.',
  },
  {
    q: 'Can I contact support?',
    a: 'Yes. You can contact support through the Contact Us page, ticket support, or direct follow-up from the team.',
  },
  {
    q: 'Do you offer white-label tools?',
    a: 'Yes. Agents and partners can create white-label offers and presentations depending on role and plan.',
  },
];

export default function FaqPage() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-16 md:py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-extrabold">General FAQ</h1>
          <p className="max-w-2xl mt-4 text-cyan-100 text-lg">Where Travelers, Hosts & Partners Connect</p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container max-w-4xl">
          <SectionTitle title="Frequently Asked Questions" subtitle="General answers about ClickyTour and how the platform works." />
          <FAQ items={faqItems} />
        </div>
      </section>
    </PageShell>
  );
}
