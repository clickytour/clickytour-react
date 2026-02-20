import { PMPage } from '@/components/pm-page';

export default function Page() {
  return <PMPage title={"Plans & Pricing — What’s Included"}
    subtitle={"Use this page to understand how ClickyTour PMC access works: onboarding, tools, pool inventory,"}
    introTitle={"Clear pricing for every stage"}
    introText={"This page had empty WP content. We rebuilt it as a practical overview for PM companies evaluating plan levels, feature access, and support options."}
    highlights={["Plans aligned to team size and inventory complexity","Transparent feature access by tier","Upgrade paths as your operation grows"]}
    features={[{"title":"Starter","desc":"For smaller teams needing core listing and booking management.","icon":"🌱"},{"title":"Growth","desc":"Adds channel automation, white-label offers, and deeper analytics.","icon":"🚀"},{"title":"Scale","desc":"Advanced integrations, priority support, and enterprise workflows.","icon":"🏢"}]}
    faq={[{"q":"Can I switch plans later?","a":"Yes, you can upgrade as your portfolio expands and your workflow requirements evolve."},{"q":"Do plans include white-label tools?","a":"White-label access is typically included in Growth and above, based on your setup package."},{"q":"Is onboarding support included?","a":"All plans include onboarding guidance, with higher tiers offering deeper hands-on support."}]}
    ctaTitle={"Need help selecting a plan?"}
    ctaText={"We can recommend the best setup based on your current portfolio and target growth."}
    ctaPrimary={"Compare Plans"}
    ctaSecondary={"Talk to Sales"} />;
}
