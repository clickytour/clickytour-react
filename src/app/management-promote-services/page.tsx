import { PMPage } from '@/components/pm-page';

export default function Page() {
  return <PMPage title={"Promote Your Services to Property Owners"}
    subtitle={"Present your management services clearly and win more owner partnerships."}
    introTitle={"Turn expertise into signed agreements"}
    introText={"This page had no WordPress content. We rebuilt it around the intended goal: helping PM companies market their services to property owners with clear positioning, trust signals, and conversion-focused communication."}
    highlights={["Show your value proposition in owner-friendly language","Present operations, reporting, and revenue support clearly","Use branded proposals to shorten decision cycles"]}
    features={[{"title":"Service showcase pages","desc":"Display your core management services in a structured format.","icon":"🧾"},{"title":"Owner-ready proposals","desc":"Share polished offers with transparent deliverables.","icon":"📄"},{"title":"Trust-building assets","desc":"Highlight portfolio performance, standards, and workflows.","icon":"✅"}]}
    steps={[{"title":"Define owner segments","desc":"Group owners by property type, region, and expectations."},{"title":"Package your service model","desc":"Set clear tiers, deliverables, and pricing logic."},{"title":"Launch outreach","desc":"Promote your services through ClickyTour channels and follow-up flows."}]}
    ctaTitle={"Need help packaging your service offer?"}
    ctaText={"Build a service presentation that owners understand and trust."}
    ctaPrimary={"Start Service Setup"}
    ctaSecondary={"Book a Strategy Call"} />;
}
