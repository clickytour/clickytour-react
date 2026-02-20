import { AgentsSubpageTemplate } from '@/components/agents-subpage';

export default function Page() {
  return (
    <AgentsSubpageTemplate
      title={"Explore Real Estate Listings"}
      subtitle={"Browse properties ready for sale or rent. Use advanced filters to find the perfect match for your client."}
      cardTitle={"Highlights"}
      cards={["Browse listings", "Create white-label offers", "Track proposals", "Access All Listings", "Instant White-label Offers", "Net Pricing"]}
      sections={[{"title":"Overview","body":"Browse properties ready for sale or rent. Use advanced filters to find the perfect match for your client.","points":["Choose a search form","Search Properties","Why Work With ClickyTour"]},{"title":"How agents apply this","body":"Why Agents Choose ClickyTour","points":["Access All Listings","Rentals, real estate, and services in one system","Instant White-label Offers","Send branded or no-logo quotes in 1 click"]},{"title":"Next steps","body":"Instant access to properties, white-label offers, and clients — without overhead.","points":["Book at agent rates, earn your commission margin","How It Helps PMC","Why Property Managers Love ClickyTour"]}]}
      ctaTitle={"Start growing with ClickyTour"}
      ctaBody={"Use “Advanced Search” for precise filtering (regions, budget, type). Then generate a branded offer."}
      ctaPrimary={{ label: 'Get started', href: '/contact' }}
      ctaSecondary={{ label: 'View agent tools', href: '/for-agents' }}
    />
  );
}
