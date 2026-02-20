import { AgentsSubpageTemplate } from '@/components/agents-subpage';
import { AgentNetPricingDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <AgentsSubpageTemplate
      diagram={<AgentNetPricingDiagram />}
      title={"Net Pricing for Agents"}
      subtitle={"Net pricing is your B2B partner rate. You add your margin, send a client-ready offer, and keep the difference as profit."}
      cardTitle={"What you can do"}
      cards={["Instant Margin", "Client-ready Offers", "Faster Closing", "Net pricing visibility: depends on your plan + listing eligibility.", "Some listings may be", "Use white-label offers to keep client presentation consistent.: Margin Calculator"]}
      sections={[{"title": "Search inventory", "body": "Use filters to find the right option for your customer."}, {"title": "View net price", "body": "Net pricing appears based on your plan and listing eligibility."}, {"title": "Add margin", "body": "Set your selling price (or keep public price as-is)."}, {"title": "Frequently Asked Questions", "points": ["Is net pricing available for all listings?", "Can I bundle rentals with tours/transfers in one offer?", "Do clients see my net price?", "Where do I track bookings and earnings?"]}]}
      ctaTitle={"Start growing with ClickyTour"}
      ctaBody={"Net pricing is your B2B partner rate. You add your margin, send a client-ready offer, and keep the difference as profit."}
      ctaPrimary={{ label: 'Get started', href: '/contact' }}
      ctaSecondary={{ label: 'View agent tools', href: '/for-agents' }}
    />
  );
}
