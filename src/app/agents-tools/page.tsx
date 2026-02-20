import { AgentsSubpageTemplate } from '@/components/agents-subpage';

export default function Page() {
  return (
    <AgentsSubpageTemplate
      title={"Your Agent Toolbox in One Place"}
      subtitle={"Access every tool you need — from branded offers to advanced searches — all in your dedicated dashboard."}
      cardTitle={"Highlights"}
      cards={["White-label Offers: Send branded or no-logo presentations instantly.", "Templates Library: Pre-built and customizable messaging templates.", "Advanced Search: Search across rentals, services, and real estate in one flow.", "Reduce manual work: with auto-generated documents and offers.", "Manage all client requests: from one dashboard.", "Access listings from multiple categories: and roles in one place."]}
      sections={[{"title":"Overview","body":"Access every tool you need — from branded offers to advanced searches — all in your dedicated dashboard.","points":["Open Toolbox","Go to Manager Dashboard","Tools Overview"]},{"title":"How agents apply this","body":"Why Agents Choose ClickyTour","points":["Send branded or no-logo presentations instantly","Templates Library","Pre-built and customizable messaging templates","Advanced Search"]},{"title":"Next steps","body":"White-label Offers","points":["Why It Saves Time","Save Hours on Every Deal","⏱ Reduce manual work with auto-generated documents"]}]}
      ctaTitle={"Start growing with ClickyTour"}
      ctaBody={"Ready-made marketing assets, share tools, and quick exports to speed up promotion."}
      ctaPrimary={{ label: 'Get started', href: '/contact' }}
      ctaSecondary={{ label: 'View agent tools', href: '/for-agents' }}
    />
  );
}
