import { PMPage } from '@/components/pm-page';
import { PropertyFlowDiagram } from '@/components/diagrams';

export default function Page() {
  return <PMPage diagram={<PropertyFlowDiagram />} title={"Get Matched with New Properties Instantly"}
    subtitle={"Expand your portfolio with verified properties from ClickyTour owner channels."}
    introTitle={"Smart matching for PM growth"}
    introText={"The source content emphasized instant match alerts, fit by region and style, and fast onboarding from dashboard to live listing."}
    highlights={["Receive property alerts inside your dashboard","Approve and customize selected matches quickly","Publish and promote new listings without delay"]}
    features={[{"title":"Regional fit matching","desc":"Prioritized opportunities based on your operating footprint.","icon":"📍"},{"title":"Fast approval workflow","desc":"Accept and configure properties in a guided flow.","icon":"⚙️"},{"title":"Exclusive network access","desc":"See opportunities not broadly available on open channels.","icon":"🔐"}]}
    steps={[{"title":"Receive alerts","desc":"Matched properties appear automatically in your manager view."},{"title":"Approve and brand","desc":"Set terms, pricing rules, and optional white-label settings."},{"title":"Go live","desc":"Publish listings and start promoting to guests and partners."}]}
    ctaTitle={"Start receiving property matches"}
    ctaText={"Activate match alerts and expand your inventory pipeline today."}
    ctaPrimary={"Get Match Alerts"}
    ctaSecondary={"See Sample Properties"} />;
}
