import { AgentsSubpageTemplate } from '@/components/agents-subpage';

export default function Page() {
  return (
    <AgentsSubpageTemplate
      title={"Explore Main Index"}
      subtitle={"Your Central Access Point to All Listings"}
      cardTitle={"Highlights"}
      cards={["Find everything you can sell — vacation rentals, real estate, and services — in one place.","Search Now”","Advanced Search","Three Main Pools","Browse ClickyTour’s Full Inventory","Vacation Rentals Pool"]}
      sections={[{"title":"Overview","body":"Find everything you can sell — vacation rentals, real estate, and services — in one place.","points":["Search Now”","Advanced Search","Three Main Pools"]},{"title":"How agents apply this","body":"Browse ClickyTour’s Full Inventory","points":["Instant bookable rentals with net pricing for agents.","Real Estate Pool","Properties ready for sale, long-term rental, or investment.","Services & Activities Pool"]},{"title":"Next steps","body":"Vacation Rentals Pool","points":["Local services and experiences for upsell.","Search & Filter","Find Exactly What Your Client Wants"]}]}
      ctaTitle={"Start growing with ClickyTour"}
      ctaBody={"Create your agent profile, publish your offers, and help clients book faster with a complete digital journey."}
      ctaPrimary={{ label: 'Get started', href: '/contact' }}
      ctaSecondary={{ label: 'View agent tools', href: '/for-agents' }}
    />
  );
}
