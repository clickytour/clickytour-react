import { AgentsSubpageTemplate } from '@/components/agents-subpage';
import { AgentAdvancedSearchDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <AgentsSubpageTemplate
      diagram={<AgentAdvancedSearchDiagram />}
      title={"Find the Perfect Listing in Seconds – Across All ClickyTour Pools"}
      subtitle={"Vacation Rentals, Real Estate, Services — all in one powerful search."}
      cardTitle={"Highlights"}
      cards={["Location-based search: by destination, area, and radius.", "Price range + margin filters: to protect your profit.", "Availability sync: in real-time (where enabled).", "Tag filters: (Premium, Hot Offer, Exclusive) for quick matching.", "News Title Placeholder: Replace with Elementor Posts widget or your dynamic feed."]}
      sections={[{"title": "Choose a pool", "body": "Start with vacation rentals, real estate, or services — based on your client request."}, {"title": "Apply precision filters", "body": "Use location, price range, tags, and availability to narrow results fast."}, {"title": "Create offer instantly", "body": "Select a listing and generate a white-label PDF or branded client offer."}]}
      ctaTitle={"Start growing with ClickyTour"}
      ctaBody={"Select a listing, instantly create a white-label PDF or branded offer for your customer."}
      ctaPrimary={{ label: 'Get started', href: '/contact' }}
      ctaSecondary={{ label: 'View agent tools', href: '/for-agents' }}
    />
  );
}
