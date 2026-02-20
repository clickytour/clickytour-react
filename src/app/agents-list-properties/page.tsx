import { AgentsSubpageTemplate } from '@/components/agents-subpage';
import { AgentListPropertiesDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <AgentsSubpageTemplate
      diagram={<AgentListPropertiesDiagram />}
      title={"List Properties on ClickyTour"}
      subtitle={"Add Your Properties to ClickyTour"}
      cardTitle={"Highlights"}
      cards={["Reach thousands of potential buyers, renters, and partners by listing your properties in one centralized platform.","List a Property Now","Why List on ClickyTour?","Why Agents Choose ClickyTour","Wider Reach","Appear in global and local searches for agents, PMCs, and guests"]}
      sections={[{"title":"Overview","body":"Reach thousands of potential buyers, renters, and partners by listing your properties in one centralized platform.","points":["List a Property Now","Why List on ClickyTour?","Why Agents Choose ClickyTour"]},{"title":"How agents apply this","body":"Wider Reach","points":["Add property details once, share across all connected channels","Marketing Ready","Generate white-label presentations instantly for each listing","Track Performance"]},{"title":"Next steps","body":"Appear in global and local searches for agents, PMCs, and guests","points":["Monitor views, inquiries, and conversions","How Listing Works","Why Agents Love ClickyTour"]}]}
      ctaTitle={"Start growing with ClickyTour"}
      ctaBody={"Create your agent profile, publish your offers, and help clients book faster with a complete digital journey."}
      ctaPrimary={{ label: 'Get started', href: '/contact' }}
      ctaSecondary={{ label: 'View agent tools', href: '/for-agents' }}
    />
  );
}
