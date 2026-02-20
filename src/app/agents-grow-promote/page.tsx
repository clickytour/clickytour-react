import { AgentsSubpageTemplate } from '@/components/agents-subpage';
import { AgentGrowPromoteDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <AgentsSubpageTemplate
      diagram={<AgentGrowPromoteDiagram />}
      title={"Grow & Promote"}
      subtitle={"Grow Your Reach, Maximize Your Earnings"}
      cardTitle={"Highlights"}
      cards={["Promote properties, services, and offers with powerful branding tools.","Start Promoting","See Affiliate Program”","How You Grow","Your Path to Growth","Offer Listings Without Branding"]}
      sections={[{"title":"Overview","body":"Promote properties, services, and offers with powerful branding tools.","points":["Start Promoting","See Affiliate Program”","How You Grow"]},{"title":"How agents apply this","body":"Your Path to Growth","points":["Send clean white-label presentations.","Promote Local Services","Partner with businesses for commissions.","Affiliate Program"]},{"title":"Next steps","body":"Offer Listings Without Branding","points":["Earn by referring owners, services, and agents.","Tools to Help You Promote","Promotional Tools at Your Fingertips"]}]}
      ctaTitle={"Start growing with ClickyTour"}
      ctaBody={"Create your agent profile, publish your offers, and help clients book faster with a complete digital journey."}
      ctaPrimary={{ label: 'Get started', href: '/contact' }}
      ctaSecondary={{ label: 'View agent tools', href: '/for-agents' }}
    />
  );
}
