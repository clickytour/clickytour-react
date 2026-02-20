import { AgentsSubpageTemplate } from '@/components/agents-subpage';
import { AgentRealEstateDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <AgentsSubpageTemplate
      diagram={<AgentRealEstateDiagram />}
      title={"Real Estate Sales Agent Tools"}
      subtitle={"Explore Real Estate Listings"}
      cardTitle={"Highlights"}
      cards={["Browse properties ready for sale or rent. Use advanced filters to find the perfect match for your client.","Search Properties","Go to Manager Dashboard","Featured Properties","Popular Listings Among Agents","Create Offer"]}
      sections={[{"title":"Overview","body":"Browse properties ready for sale or rent. Use advanced filters to find the perfect match for your client.","points":["Search Properties","Go to Manager Dashboard","Featured Properties"]},{"title":"How agents apply this","body":"Popular Listings Among Agents","points":["Filters & Sorting","Why Property Managers Love ClickyTour","Type: Villa, Apartment, Commercial, Land","Status: For Sale, For Rent"]},{"title":"Next steps","body":"Title","points":["Price: Slider","Bedrooms/Bathrooms dropdown","Newest | Price Low–High | Price High–Low"]}]}
      ctaTitle={"Start growing with ClickyTour"}
      ctaBody={"Create your agent profile, publish your offers, and help clients book faster with a complete digital journey."}
      ctaPrimary={{ label: 'Get started', href: '/contact' }}
      ctaSecondary={{ label: 'View agent tools', href: '/for-agents' }}
    />
  );
}
