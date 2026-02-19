import { AgentsSubpageTemplate } from '@/components/agents-subpage';

export default function Page() {
  return (
    <AgentsSubpageTemplate
      title={"ClikyTour Tools For Agents"}
      subtitle={"Your Agent Toolbox in One Place"}
      cardTitle={"Highlights"}
      cards={["Access every tool you need — from branded offers to advanced searches — all in your dedicated dashboard.","Open Toolbox","Go to Manager Dashboard","Tools Overview","Why Agents Choose ClickyTour","White-label Offers"]}
      sections={[{"title":"Overview","body":"Access every tool you need — from branded offers to advanced searches — all in your dedicated dashboard.","points":["Open Toolbox","Go to Manager Dashboard","Tools Overview"]},{"title":"How agents apply this","body":"Why Agents Choose ClickyTour","points":["Send branded or no-logo presentations instantly","Templates Library","Pre-built and customizable messaging templates","Advanced Search"]},{"title":"Next steps","body":"White-label Offers","points":["Why It Saves Time","Save Hours on Every Deal","⏱ Reduce manual work with auto-generated documents"]}]}
      ctaTitle={"Start growing with ClickyTour"}
      ctaBody={"Create your agent profile, publish your offers, and help clients book faster with a complete digital journey."}
      ctaPrimary={{ label: 'Get started', href: '/contact' }}
      ctaSecondary={{ label: 'View agent tools', href: '/for-agents' }}
    />
  );
}
