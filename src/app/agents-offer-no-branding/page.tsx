import { AgentsSubpageTemplate } from '@/components/agents-subpage';
import { AgentWhiteLabelDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <AgentsSubpageTemplate
      diagram={<AgentWhiteLabelDiagram />}
      title={"Offer Listings Without Branding"}
      subtitle={"Send Clean, Professional Offers in Seconds"}
      cardTitle={"Highlights"}
      cards={["No logos, no distractions — just the property details your client needs to make a decision.","Generate Offer","See Example","How It Works","Create a No-Brand Offer in 3 Clicks","Select property from pool"]}
      sections={[{"title":"Overview","body":"No logos, no distractions — just the property details your client needs to make a decision.","points":["Generate Offer","See Example","How It Works"]},{"title":"How agents apply this","body":"Create a No-Brand Offer in 3 Clicks","points":["Customize pricing & details","Send no-logo link or PDF","Why It Matters","Stay Invisible While Closing Deals"]},{"title":"Next steps","body":"Select property from pool","points":["🔍 Protect Client Relationship","– Your client sees only your details.","📄 Consistent Presentation"]}]}
      ctaTitle={"Start growing with ClickyTour"}
      ctaBody={"Create your agent profile, publish your offers, and help clients book faster with a complete digital journey."}
      ctaPrimary={{ label: 'Get started', href: '/contact' }}
      ctaSecondary={{ label: 'View agent tools', href: '/for-agents' }}
    />
  );
}
