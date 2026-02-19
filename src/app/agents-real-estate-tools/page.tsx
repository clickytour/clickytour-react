import { AgentsSubpageTemplate } from '@/components/agents-subpage';

export default function Page() {
  return (
    <AgentsSubpageTemplate
      title={"Real Estate Tools for Agents"}
      subtitle={"Access ready-to-use tools to create property offers, communicate with clients, and close deals faster."}
      cardTitle={"Highlights"}
      cards={["Access Tools Now","Key Tools Overview","All-in-One Agent Toolkit","White-label Offer Generator","Market data to strengthen your client pitch","Property Performance Insights"]}
      sections={[{"title":"Overview","body":"Access Tools Now","points":["Key Tools Overview","All-in-One Agent Toolkit","White-label Offer Generator"]},{"title":"How agents apply this","body":"Market data to strengthen your client pitch","points":["Portfolio Organizer","Keep all client-targeted listings organized in one place","Branded Email Templates","Send polished property proposals in a click"]},{"title":"Next steps","body":"Property Performance Insights","points":["From Search to Signed Deal in Minutes","Search property in ClickyTour’s pool","Select and customize your offer"]}]}
      ctaTitle={"Start growing with ClickyTour"}
      ctaBody={"Create your agent profile, publish your offers, and help clients book faster with a complete digital journey."}
      ctaPrimary={{ label: 'Get started', href: '/contact' }}
      ctaSecondary={{ label: 'View agent tools', href: '/for-agents' }}
    />
  );
}
