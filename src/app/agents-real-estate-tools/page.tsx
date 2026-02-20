import { AgentsSubpageTemplate } from '@/components/agents-subpage';

export default function Page() {
  return (
    <AgentsSubpageTemplate
      title={"Real Estate Tools for Agents"}
      subtitle={"Access ready-to-use tools to create property offers, communicate with clients, and close deals faster."}
      cardTitle={"Highlights"}
      cards={["White-label Offer Generator: Create branded or no-logo offers in seconds (PDF or shareable link).", "Property Performance Insights: Market data and insights to strengthen your client pitch.", "Portfolio Organizer: Keep all client-targeted listings organized in one place.", "Branded Email Templates: Send polished property proposals in a click — consistent and professional.", "Branded proposals: PDF, link, or message — your choice.", "Simple tracking: Know what your clients opened and when."]}
      sections={[{"title": "Search property in ClickyTour’s pool", "body": "Use filters to find the best match for your client."}, {"title": "Select and customize your offer", "body": "Add listings, reorder items, and adjust your presentation."}, {"title": "Send to client via branded email or link", "body": "Use templates or export as PDF — with your brand or no-logo style."}]}
      ctaTitle={"Start growing with ClickyTour"}
      ctaBody={"Start with the White-label Offer tool, then explore listings and build your client portfolio."}
      ctaPrimary={{ label: 'Get started', href: '/contact' }}
      ctaSecondary={{ label: 'View agent tools', href: '/for-agents' }}
    />
  );
}
