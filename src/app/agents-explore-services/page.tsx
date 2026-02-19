import { AgentsSubpageTemplate } from '@/components/agents-subpage';

export default function Page() {
  return (
    <AgentsSubpageTemplate
      title={"Explore Vacation Services / Businesses"}
      subtitle={"Explore Vacation Services & Business Opportunities"}
      cardTitle={"Highlights"}
      cards={["Connect your clients with bookable services — from transfers to private chefs — all at net rates that boost your commissions.","Browse Services","Create White-label Offer","How It Works","From Search to Booking in Minutes","Instant access to properties, white-label offers, and clients — without overhead."]}
      sections={[{"title":"Overview","body":"Connect your clients with bookable services — from transfers to private chefs — all at net rates that boost your commissions.","points":["Browse Services","Create White-label Offer","How It Works"]},{"title":"How agents apply this","body":"From Search to Booking in Minutes","points":["Access All Listings","Rentals, real estate, and services in one system","Instant White-label Offers","Send branded or no-logo quotes in 1 click"]},{"title":"Next steps","body":"Instant access to properties, white-label offers, and clients — without overhead.","points":["Book at agent rates, earn your commission margin","Why Agents Use ClickyTour for Services","Save Time. Increase Margin. Stay Invisible."]}]}
      ctaTitle={"Start growing with ClickyTour"}
      ctaBody={"Create your agent profile, publish your offers, and help clients book faster with a complete digital journey."}
      ctaPrimary={{ label: 'Get started', href: '/contact' }}
      ctaSecondary={{ label: 'View agent tools', href: '/for-agents' }}
    />
  );
}
