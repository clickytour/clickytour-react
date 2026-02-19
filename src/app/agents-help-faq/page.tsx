import { AgentsSubpageTemplate } from '@/components/agents-subpage';

export default function Page() {
  return (
    <AgentsSubpageTemplate
      title={"FAQ for Agents"}
      subtitle={"Use ClickyTour help faq tools to deliver a faster, clearer experience for every client you support."}
      cardTitle={"What you can do"}
      cards={["Set up help faq in minutes","Share branded links with clients","Track views, clicks, and bookings","Keep communication in one dashboard","Save time with reusable templates","Scale your local sales process"]}
      sections={[{"title":"How it works","body":"ClickyTour gives agents a practical workflow for help faq, from setup to delivery and follow-up.","points":["Pick the right tools for your market and client profile.","Publish and share polished offers or listings quickly.","Measure performance and refine your outreach each week."]},{"title":"Best practices","points":["Keep messaging simple and outcome-focused.","Use consistent branding across every client touchpoint.","Bundle services to increase booking confidence and revenue."]},{"title":"Why agents use this","body":"Agents choose ClickyTour for help faq because it reduces manual work while improving conversion and service quality."}]}
      ctaTitle={"Start growing with ClickyTour"}
      ctaBody={"Create your agent profile, publish your offers, and help clients book faster with a complete digital journey."}
      ctaPrimary={{ label: 'Get started', href: '/contact' }}
      ctaSecondary={{ label: 'View agent tools', href: '/for-agents' }}
    />
  );
}
