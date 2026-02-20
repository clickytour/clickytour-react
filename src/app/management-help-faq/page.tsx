import { PMPage } from '@/components/pm-page';

export default function Page() {
  return <PMPage title={"Help & FAQ for Property Management Companies"}
    subtitle={"Find quick answers about the PMC Dashboard, Channel Manager, listings, property pool,"}
    introTitle={"Answers to the questions teams ask most"}
    introText={"This page had empty WP content. We rebuilt it as a dedicated FAQ view for manager operations and platform workflows."}
    highlights={["Coverage across onboarding, bookings, pricing, and reporting","Simple answers designed for daily PM operations","Direct links to next actions and support routes"]}
    faq={[{"q":"How long does onboarding usually take?","a":"Most PM companies can complete initial setup in a few days, depending on data readiness and channel connections."},{"q":"Can I control which properties agents can sell?","a":"Yes. You can define availability and access rules, including which listings are visible in partner channels."},{"q":"How does net pricing work?","a":"You set a protected net rate. Agents add their own margin, while your payout remains based on your configured net amount."},{"q":"Can I send offers under my own brand?","a":"Yes. White-label mode allows branded proposals without exposing supplier-side platform branding."},{"q":"Where can I track payouts and commissions?","a":"Use the manager dashboard reporting area to monitor pending amounts, settled payouts, and partner performance."}]}
    ctaTitle={"Still need an answer?"}
    ctaText={"Our team can help with workflow-specific guidance for your operation."}
    ctaPrimary={"Contact Support"}
    ctaSecondary={"Go to Help Center"} />;
}
