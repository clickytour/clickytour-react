import { AgentsSubpageTemplate } from '@/components/agents-subpage';

export default function Page() {
  return (
    <AgentsSubpageTemplate
      title={"Book Smarter. Earn More."}
      subtitle={"Net pricing gives you a built-in profit margin on every booking — with faster quotes and cleaner client offers."}
      cardTitle={"Highlights"}
      cards={["Search Listings", "See Net Prices", "Sell at Your Rate", "October 14, 2025: test another saving NEW", "Updates: Net pricing updates"]}
      sections={[{"title": "Pick a listing", "body": "Choose rentals, services, or real estate offers that match your customer."}, {"title": "See your net cost", "body": "If your plan includes net access, you’ll see the net price instantly."}, {"title": "Set your selling rate", "body": "You add your margin and send a client-ready offer (PDF / link)."}]}
      ctaTitle={"Start growing with ClickyTour"}
      ctaBody={"Create your agent profile, publish your offers, and help clients book faster with a complete digital journey."}
      ctaPrimary={{ label: 'Get started', href: '/contact' }}
      ctaSecondary={{ label: 'View agent tools', href: '/for-agents' }}
    />
  );
}
