import { PMPage } from '@/components/pm-page';

export default function Page() {
  return <PMPage title={"Help & Support for PM Companies"}
    subtitle={"Get guidance for setup, daily operations, and troubleshooting across the PM toolkit."}
    introTitle={"Support built around real workflows"}
    introText={"This page had no WordPress content. We rebuilt it as a support gateway for PM companies who need fast answers on onboarding, integrations, booking flows, and reporting."}
    highlights={["Step-by-step onboarding help","Operational support for listings and bookings","Escalation paths for urgent issues"]}
    features={[{"title":"Knowledge guides","desc":"Find practical articles by feature and workflow.","icon":"📚"},{"title":"Live support routes","desc":"Reach the right team for technical or account issues.","icon":"🛟"},{"title":"Priority handling","desc":"Escalate high-impact incidents with clear SLA paths.","icon":"🚨"}]}
    steps={[{"title":"Search help topics","desc":"Start with setup, operations, or finance categories."},{"title":"Open a support case","desc":"Share context and screenshots for faster resolution."},{"title":"Follow resolution updates","desc":"Track progress and next actions in your support thread."}]}
    ctaTitle={"Need help right now?"}
    ctaText={"Use the fastest support path based on issue type and urgency."}
    ctaPrimary={"Open Support"}
    ctaSecondary={"Browse Help Articles"} />;
}
