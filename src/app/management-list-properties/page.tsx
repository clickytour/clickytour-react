import { PMPage } from '@/components/pm-page';
import { ThreeStepsListedDiagram } from '@/components/diagrams';

export default function Page() {
  return <PMPage diagram={<ThreeStepsListedDiagram />} title={"List Your Properties on ClickyTour"}
    subtitle={"Reach more guests, agents, and partners with every listing."}
    introTitle={"From upload to active demand"}
    introText={"The source page described a simple listing flow: upload, validate, publish, then receive leads and bookings through multiple channels."}
    highlights={["Publish across ClickyTour and partner demand channels","Share high-quality media and rich listing details","Track listing performance with analytics"]}
    features={[{"title":"Broad distribution","desc":"Push availability to connected channels from a single workflow.","icon":"🌐"},{"title":"Media and presentation tools","desc":"Use strong visuals and offer formats to increase conversion.","icon":"🖼️"},{"title":"Performance reporting","desc":"Monitor views, clicks, and booking trends per listing.","icon":"📈"}]}
    steps={[{"title":"Upload listing data","desc":"Add property details, pricing, and content assets."},{"title":"Validate and publish","desc":"Complete quality checks and activate the listing."},{"title":"Capture bookings","desc":"Handle incoming reservations with centralized control."}]}
    ctaTitle={"Start listing your portfolio"}
    ctaText={"Make your inventory discoverable and conversion-ready across channels."}
    ctaPrimary={"Add My Properties"}
    ctaSecondary={"Book a Demo"} />;
}
