import { AgentsSubpageTemplate } from '@/components/agents-subpage';

export default function Page() {
  return (
    <AgentsSubpageTemplate
      title={"Explore Vacation Services & Business Opportunities"}
      subtitle={"Connect your clients with bookable services — from transfers to private chefs — all at net rates that boost your commissions."}
      cardTitle={"Highlights"}
      cards={["Access All Listings", "Instant White-label Offers", "Net Pricing", "No expertise needed — ready-to-use templates", "Search net-priced listings easily", "Full branding control — no ClickyTour logos"]}
      sections={[{"title": "Select services", "body": "Transfers, tours, chefs, wellness, and more."}, {"title": "Choose output", "body": "PDF, share link, WhatsApp-ready message."}, {"title": "Brand it", "body": "Your logo/colors or neutral style — no ClickyTour logos."}, {"title": "Frequently Asked Questions", "points": ["Do I need experience selling tours/activities?", "Will my client see ClickyTour branding?", "How do I get net rates?", "Where do I track bookings and earnings?"]}]}
      ctaTitle={"Start growing with ClickyTour"}
      ctaBody={"Pick services, add notes, set your selling price, and generate client-ready output instantly."}
      ctaPrimary={{ label: 'Get started', href: '/contact' }}
      ctaSecondary={{ label: 'View agent tools', href: '/for-agents' }}
    />
  );
}
