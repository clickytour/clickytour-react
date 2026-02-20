import { AgentsSubpageTemplate } from '@/components/agents-subpage';

export default function Page() {
  return (
    <AgentsSubpageTemplate
      title={"We’re Here to Support Your Growth"}
      subtitle={"Quick answers, direct contact, and guidance for every step of your journey as a ClickyTour agent."}
      cardTitle={"Highlights"}
      cards={["Contact Our Team: Reach us directly for personalized help.", "Agent Plans & Pricing: See what fits your business goals.", "Agent Tools: Explore white-label offers, search tools, templates.", "Popular topics", "Already a partner?: Login to your dashboard to track bookings and tools.", "Frequently Asked Questions: Find quick answers. For full guides, open the Agent FAQ page."]}
      sections={[{"title":"Overview","body":"Quick answers, direct contact, and guidance for every step of your journey as a ClickyTour agent.","points":["Contact Support","Quick Links"]},{"title":"How agents apply this","body":"Popular Topics","points":["Find quick answers to the most common questions.","Contact Our Team","Reach us directly for personalized help.","Agent Plans & Pricing"]},{"title":"Next steps","body":"Frequently Asked Questions","points":["See what fits your business goals.","How It Helps PMC","💰 Payments & Commissions"]}]}
      ctaTitle={"Start growing with ClickyTour"}
      ctaBody={"Create your agent profile, publish your offers, and help clients book faster with a complete digital journey."}
      ctaPrimary={{ label: 'Get started', href: '/contact' }}
      ctaSecondary={{ label: 'View agent tools', href: '/for-agents' }}
    />
  );
}
