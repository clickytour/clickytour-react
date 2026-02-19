import { AgentsSubpageTemplate } from '@/components/agents-subpage';

export default function Page() {
  return (
    <AgentsSubpageTemplate
      title={"Promote Local Services"}
      subtitle={"Expand Your Revenue with Local Service Bookings"}
      cardTitle={"Highlights"}
      cards={["Offer clients curated local services — earn commission or bundle them in your packages.","Browse Services","See Commission Rates","How It Works","3 Steps to Add Value & Earn More","Select Services"]}
      sections={[{"title":"Overview","body":"Offer clients curated local services — earn commission or bundle them in your packages.","points":["Browse Services","See Commission Rates","How It Works"]},{"title":"How agents apply this","body":"3 Steps to Add Value & Earn More","points":["Choose from vetted ClickyTour providers.","Instant White-label Offers","Add to Offers","Earn Commission"]},{"title":"Next steps","body":"Select Services","points":["Get paid after service completion.","Boost Client Experience & Your Earnings","🌍 Wide Range of Services"]}]}
      ctaTitle={"Start growing with ClickyTour"}
      ctaBody={"Create your agent profile, publish your offers, and help clients book faster with a complete digital journey."}
      ctaPrimary={{ label: 'Get started', href: '/contact' }}
      ctaSecondary={{ label: 'View agent tools', href: '/for-agents' }}
    />
  );
}
