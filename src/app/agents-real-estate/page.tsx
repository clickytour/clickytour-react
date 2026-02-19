import { AgentsSubpageTemplate } from '@/components/agents-subpage';

export default function Page() {
  return (
    <AgentsSubpageTemplate
      title={"Real Estate"}
      subtitle={"Explore Real Estate Listings"}
      cardTitle={"Highlights"}
      cards={["Browse properties ready for sale or rent. Use advanced filters to find the perfect match for your client.","Choose a search form","Search Properties","Why Work With ClickyTour","Why Agents Choose ClickyTour","Instant access to properties, white-label offers, and clients — without overhead."]}
      sections={[{"title":"Overview","body":"Browse properties ready for sale or rent. Use advanced filters to find the perfect match for your client.","points":["Choose a search form","Search Properties","Why Work With ClickyTour"]},{"title":"How agents apply this","body":"Why Agents Choose ClickyTour","points":["Access All Listings","Rentals, real estate, and services in one system","Instant White-label Offers","Send branded or no-logo quotes in 1 click"]},{"title":"Next steps","body":"Instant access to properties, white-label offers, and clients — without overhead.","points":["Book at agent rates, earn your commission margin","How It Helps PMC","Why Property Managers Love ClickyTour"]}]}
      ctaTitle={"Start growing with ClickyTour"}
      ctaBody={"Create your agent profile, publish your offers, and help clients book faster with a complete digital journey."}
      ctaPrimary={{ label: 'Get started', href: '/contact' }}
      ctaSecondary={{ label: 'View agent tools', href: '/for-agents' }}
    />
  );
}
