import { AgentsSubpageTemplate } from '@/components/agents-subpage';

export default function Page() {
  return (
    <AgentsSubpageTemplate
      title={"Real Estate Input"}
      subtitle={"Sell or Rent Real Estate to Your Clients — Commission Included"}
      cardTitle={"Highlights"}
      cards={["Access a curated pool of properties ready for sale or long-term rent. Create branded offers in one click and share with your clients.","Browse Real Estate Listings","Create White-label Offer","Featured Property Types","Properties You Can Offer to Clients","Instant access to properties, white-label offers, and clients — without overhead."]}
      sections={[{"title":"Overview","body":"Access a curated pool of properties ready for sale or long-term rent. Create branded offers in one click and share with your clients.","points":["Browse Real Estate Listings","Create White-label Offer","Featured Property Types"]},{"title":"How agents apply this","body":"Properties You Can Offer to Clients","points":["Villas for Sale","Apartments for Rent","Commercial Properties","Investment Opportunities"]},{"title":"Next steps","body":"Instant access to properties, white-label offers, and clients — without overhead.","points":["Explore All Properties","Why Agents Sell Real Estate with ClickyTour","Save Time, Increase Sales"]}]}
      ctaTitle={"Start growing with ClickyTour"}
      ctaBody={"Create your agent profile, publish your offers, and help clients book faster with a complete digital journey."}
      ctaPrimary={{ label: 'Get started', href: '/contact' }}
      ctaSecondary={{ label: 'View agent tools', href: '/for-agents' }}
    />
  );
}
