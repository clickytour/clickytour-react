import { AgentsSubpageTemplate } from '@/components/agents-subpage';

export default function Page() {
  return (
    <AgentsSubpageTemplate
      title={"Book & Get Paid"}
      subtitle={"Book Smarter. Earn More."}
      cardTitle={"Highlights"}
      cards={["Net pricing gives you a built-in profit margin on every booking.","Search Listings","View Agent Plans","How It Works","Your Net Pricing Advantage","Filter by rentals, real estate, or services"]}
      sections={[{"title":"Overview","body":"Net pricing gives you a built-in profit margin on every booking.","points":["Search Listings","View Agent Plans","How It Works"]},{"title":"How agents apply this","body":"Your Net Pricing Advantage","points":["See Net Prices","Available to Pro Agents & Subscribers","Sell at Your Rate","Keep the margin as your profit"]},{"title":"Next steps","body":"Filter by rentals, real estate, or services","points":["Why It Works for You","Why Agents Love Net Pricing","💼 Instant Margin"]}]}
      ctaTitle={"Start growing with ClickyTour"}
      ctaBody={"Create your agent profile, publish your offers, and help clients book faster with a complete digital journey."}
      ctaPrimary={{ label: 'Get started', href: '/contact' }}
      ctaSecondary={{ label: 'View agent tools', href: '/for-agents' }}
    />
  );
}
