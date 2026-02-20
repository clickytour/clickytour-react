import { PMPage } from '@/components/pm-page';
import { WhiteLabelWorkflowDiagram } from '@/components/diagrams';

export default function Page() {
  return <PMPage diagram={<WhiteLabelWorkflowDiagram />} title={"Showcase Your Properties with White-label Offers"}
    subtitle={"Send professional proposals instantly under your own agency brand."}
    introTitle={"Stay visible while competitors stay hidden"}
    introText={"The WordPress page focused on full branding control, faster sales cycles, and client protection through neutral white-label presentation."}
    highlights={["Your brand front and center in every offer","No ClickyTour branding shown to your clients","Generate polished proposals in seconds"]}
    features={[{"title":"Full branding control","desc":"Use your logo, company details, and communication style.","icon":"🎨"},{"title":"Faster turnaround","desc":"Eliminate manual formatting and repetitive design work.","icon":"⏱️"},{"title":"Client protection","desc":"Share neutral offers without exposing supplier sources.","icon":"🛡️"}]}
    steps={[{"title":"Select properties","desc":"Pick listings from your own portfolio or network inventory."},{"title":"Generate branded offer","desc":"Apply your company identity automatically."},{"title":"Send and convert","desc":"Share instantly and follow engagement in your workflow."}]}
    ctaTitle={"Want to preview white-label mode?"}
    ctaText={"Generate your first branded proposal and test the full flow."}
    ctaPrimary={"See White-label in Action"}
    ctaSecondary={"Try It in Dashboard"} />;
}
