import { AgentsSubpageTemplate } from '@/components/agents-subpage';

export default function Page() {
  return (
    <AgentsSubpageTemplate
      title={"Explore Activities"}
      subtitle={"Sell Experiences, Not Just Stays"}
      cardTitle={"Highlights"}
      cards={["Delight your clients by offering curated activities they can book instantly through ClickyTour.","View All Activities","Why Activities Matter for Agents","Activities Boost Your Sales & Client Loyalty","Higher package value = higher commissions","Activities encourage repeat bookings"]}
      sections={[{"title":"Overview","body":"Delight your clients by offering curated activities they can book instantly through ClickyTour.","points":["View All Activities","Why Activities Matter for Agents"]},{"title":"How agents apply this","body":"Activities Boost Your Sales & Client Loyalty","points":["Activities encourage repeat bookings","Agents can upsell activities even after the stay is booked","How to Book Activities","Simple Booking Process"]},{"title":"Next steps","body":"Higher package value = higher commissions","points":["Search activities by destination and category","Add selected activities to client’s offer","Confirm and send itinerary with your branding"]}]}
      ctaTitle={"Start growing with ClickyTour"}
      ctaBody={"Create your agent profile, publish your offers, and help clients book faster with a complete digital journey."}
      ctaPrimary={{ label: 'Get started', href: '/contact' }}
      ctaSecondary={{ label: 'View agent tools', href: '/for-agents' }}
    />
  );
}
