import { PMPage } from '@/components/pm-page';

export default function Page() {
  return <PMPage title={"Tools Center"}
    subtitle={"Everything you need to grow, sell, and operate your portfolio — from white-label offers and booking pool access"}
    introTitle={"One place for operational tools"}
    introText={"This page had empty WP content. We rebuilt it as a structured overview of the manager toolkit: proposal tools, communication flows, reporting, and automation support."}
    highlights={["Access proposal, communication, and reporting tools","Reduce repetitive admin work","Standardize team workflows and outputs"]}
    features={[{"title":"Offer builder","desc":"Create branded proposals quickly with reusable blocks.","icon":"🧰"},{"title":"Communication templates","desc":"Respond faster with consistent guest and owner messaging.","icon":"💬"},{"title":"Operations automations","desc":"Trigger repeatable actions for routine management tasks.","icon":"⚙️"}]}
    steps={[{"title":"Enable relevant modules","desc":"Select tools that match your team workflow."},{"title":"Assign roles","desc":"Set permissions for managers, coordinators, and finance users."},{"title":"Track impact","desc":"Measure time saved and conversion improvements over time."}]}
    ctaTitle={"Explore the Tools Center"}
    ctaText={"Equip your team with practical tools that improve execution every week."}
    ctaPrimary={"Open Tools Center"}
    ctaSecondary={"Talk to Support"} />;
}
