import { AgentsSubpageTemplate } from '@/components/agents-subpage';

export default function Page() {
  return (
    <AgentsSubpageTemplate
      title={"Help & Support"}
      subtitle={"We’re Here to Support Your Growth"}
      cardTitle={"Highlights"}
      cards={["Quick answers, direct contact, and guidance for every step of your journey as a ClickyTour agent.","Contact Support","Quick Links","Popular Topics","Frequently Asked Questions","Find quick answers to the most common questions."]}
      sections={[{"title":"Overview","body":"Quick answers, direct contact, and guidance for every step of your journey as a ClickyTour agent.","points":["Contact Support","Quick Links"]},{"title":"How agents apply this","body":"Popular Topics","points":["Find quick answers to the most common questions.","Contact Our Team","Reach us directly for personalized help.","Agent Plans & Pricing"]},{"title":"Next steps","body":"Frequently Asked Questions","points":["See what fits your business goals.","How It Helps PMC","💰 Payments & Commissions"]}]}
      ctaTitle={"Start growing with ClickyTour"}
      ctaBody={"Create your agent profile, publish your offers, and help clients book faster with a complete digital journey."}
      ctaPrimary={{ label: 'Get started', href: '/contact' }}
      ctaSecondary={{ label: 'View agent tools', href: '/for-agents' }}
    />
  );
}
