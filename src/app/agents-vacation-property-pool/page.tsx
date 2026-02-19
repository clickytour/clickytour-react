import { AgentsSubpageTemplate } from '@/components/agents-subpage';

export default function Page() {
  return (
    <AgentsSubpageTemplate
      title={"Vacation Property Pool"}
      subtitle={"Your Private Pool of Vacation Rentals"}
      cardTitle={"Highlights"}
      cards={["Book directly from our network of properties — instantly, at net pricing.","Browse Properties","Access Net Pricing","How It Works","Simple, Fast, Unlimited Access","Instant access to properties, white-label offers, and clients — without overhead."]}
      sections={[{"title":"Overview","body":"Book directly from our network of properties — instantly, at net pricing.","points":["Browse Properties","Access Net Pricing","How It Works"]},{"title":"How agents apply this","body":"Simple, Fast, Unlimited Access","points":["Search in the Agent Pool","Filter by destination, date, or property type","White-label the Offer","Generate client-ready presentations instantly"]},{"title":"Next steps","body":"Instant access to properties, white-label offers, and clients — without overhead.","points":["Book & Get Paid","Confirm booking at your net price","Why Agents Use the Pool"]}]}
      ctaTitle={"Start growing with ClickyTour"}
      ctaBody={"Create your agent profile, publish your offers, and help clients book faster with a complete digital journey."}
      ctaPrimary={{ label: 'Get started', href: '/contact' }}
      ctaSecondary={{ label: 'View agent tools', href: '/for-agents' }}
    />
  );
}
