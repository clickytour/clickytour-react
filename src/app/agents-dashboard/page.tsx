import { AgentsSubpageTemplate } from '@/components/agents-subpage';

export default function Page() {
  return (
    <AgentsSubpageTemplate
      title={"Agent Dashboard"}
      subtitle={"Your Business. One Dashboard."}
      cardTitle={"Highlights"}
      cards={["Track deals, bookings, clients, and commissions in one place — fully integrated with ClickyTour tools.","Login to Dashboard","Dashboard Features","Everything You Need, Instantly Accessible","Instant access to properties, white-label offers, and clients — without overhead.","Bookings Overview"]}
      sections={[{"title":"Overview","body":"Track deals, bookings, clients, and commissions in one place — fully integrated with ClickyTour tools.","points":["Login to Dashboard","Dashboard Features"]},{"title":"How agents apply this","body":"Everything You Need, Instantly Accessible","points":["Bookings Overview","See all reservations at a glance.","Earnings Tracking","Monitor commission in real-time."]},{"title":"Next steps","body":"Instant access to properties, white-label offers, and clients — without overhead.","points":["Client Management","Store and access client info securely.","Listing Access"]}]}
      ctaTitle={"Start growing with ClickyTour"}
      ctaBody={"Create your agent profile, publish your offers, and help clients book faster with a complete digital journey."}
      ctaPrimary={{ label: 'Get started', href: '/contact' }}
      ctaSecondary={{ label: 'View agent tools', href: '/for-agents' }}
    />
  );
}
