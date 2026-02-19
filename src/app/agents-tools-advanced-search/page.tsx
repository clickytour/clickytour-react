import { AgentsSubpageTemplate } from '@/components/agents-subpage';

export default function Page() {
  return (
    <AgentsSubpageTemplate
      title={"Advanced Search Tools"}
      subtitle={"Find the Perfect Listing in Seconds – Across All ClickyTour Pools"}
      cardTitle={"Highlights"}
      cards={["Vacation Rentals, Real Estate, Services — all in one powerful search.","Search Vacation Pool","Search Real Estate Pool","Search Services Pool","How It Works","Three Specialized Search Pools"]}
      sections={[{"title":"Overview","body":"Vacation Rentals, Real Estate, Services — all in one powerful search.","points":["Search Vacation Pool","Search Real Estate Pool","Search Services Pool"]},{"title":"How agents apply this","body":"How It Works","points":["Vacation Pool","Browse top vacation rentals with live availability.","Real Estate Pool","Filter properties for sale or long-term rent."]},{"title":"Next steps","body":"Three Specialized Search Pools","points":["Services Pool","Find bookable or referable services (e.g. tours, rentals).","Filters & Speed"]}]}
      ctaTitle={"Start growing with ClickyTour"}
      ctaBody={"Create your agent profile, publish your offers, and help clients book faster with a complete digital journey."}
      ctaPrimary={{ label: 'Get started', href: '/contact' }}
      ctaSecondary={{ label: 'View agent tools', href: '/for-agents' }}
    />
  );
}
