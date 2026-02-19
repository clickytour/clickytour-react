import { AgentsSubpageTemplate } from '@/components/agents-subpage';

export default function Page() {
  return (
    <AgentsSubpageTemplate
      title={"Agents Local Activities"}
      subtitle={"Sell Local Experiences to Your Clients"}
      cardTitle={"Highlights"}
      cards={["Connect your customers with handpicked tours, activities, and experiences — all at net rates for agents.","Browse Activities","Advanced Search Activities","Featured Destinations","Top Local Activity Hotspots","Cards Grid (examples)"]}
      sections={[{"title":"Overview","body":"Connect your customers with handpicked tours, activities, and experiences — all at net rates for agents.","points":["Browse Activities","Advanced Search Activities","Featured Destinations"]},{"title":"How agents apply this","body":"Top Local Activity Hotspots","points":["Crete: Boat tours, wine tasting, diving","Santorini: Sunset cruises, photography tours","Book at agent rates, earn your commission margin","See All Destinations"]},{"title":"Next steps","body":"Cards Grid (examples)","points":["Why Book Through ClickyTour","Benefits for Agents","Net pricing + commission potential"]}]}
      ctaTitle={"Start growing with ClickyTour"}
      ctaBody={"Create your agent profile, publish your offers, and help clients book faster with a complete digital journey."}
      ctaPrimary={{ label: 'Get started', href: '/contact' }}
      ctaSecondary={{ label: 'View agent tools', href: '/for-agents' }}
    />
  );
}
