import { AgentsSubpageTemplate } from '@/components/agents-subpage';
import { AgentPlansDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <AgentsSubpageTemplate
      diagram={<AgentPlansDiagram />}
      title={"Choose Your Agent Plan"}
      subtitle={"Pick the access model that fits your workflow — subscription tools, commission-based access, or a free account to explore the ecosystem."}
      cardTitle={"What you can do"}
      cards={["/ month", "Browse public inventory", "Net pricing access", "White-label tools", "Advanced search pools", "/ month"]}
      sections={[{"title":"How it works","body":"ClickyTour gives agents a practical workflow for help plans pricing, from setup to delivery and follow-up.","points":["Pick the right tools for your market and client profile.","Publish and share polished offers or listings quickly.","Measure performance and refine your outreach each week."]},{"title":"Best practices","points":["Keep messaging simple and outcome-focused.","Use consistent branding across every client touchpoint.","Bundle services to increase booking confidence and revenue."]},{"title":"Why agents use this","body":"Agents choose ClickyTour for help plans pricing because it reduces manual work while improving conversion and service quality."}]}
      ctaTitle={"Start growing with ClickyTour"}
      ctaBody={"Create your agent profile, publish your offers, and help clients book faster with a complete digital journey."}
      ctaPrimary={{ label: 'Get started', href: '/contact' }}
      ctaSecondary={{ label: 'View agent tools', href: '/for-agents' }}
    />
  );
}
