import { PMPage } from '@/components/pm-page';
import { ThreeWaysBookingDiagram } from '@/components/diagrams';

export default function Page() {
  return <PMPage diagram={<ThreeWaysBookingDiagram />} title={"Increase Bookings Without Increasing Costs"}
    subtitle={"Use ClickyTour booking channels, agent demand, and operational tools to lift occupancy."}
    introTitle={"More demand, same operational control"}
    introText={"Source content highlighted three growth drivers: booking pool participation, agent bookings, and visibility through targeted campaigns."}
    highlights={["Join the ClickyTour booking pool","Enable direct sales through verified agents","Gain promotion support in seasonal campaigns"]}
    features={[{"title":"Booking pool access","desc":"Expose your inventory to active guest demand streams.","icon":"🌊"},{"title":"Agent network sales","desc":"Open controlled net-pricing channels for partner sales.","icon":"🤝"},{"title":"Performance analytics","desc":"Track channel output and optimize where it matters.","icon":"📊"}]}
    steps={[{"title":"Activate pool visibility","desc":"Make eligible properties discoverable in network demand flow."},{"title":"Enable partner selling","desc":"Allow approved agents to book at configured pricing."},{"title":"Optimize weekly","desc":"Use dashboards to adjust rates, rules, and campaign participation."}]}
    ctaTitle={"Increase occupancy with less friction"}
    ctaText={"Switch on the channels that bring incremental bookings without bloating costs."}
    ctaPrimary={"Join the Booking Pool"}
    ctaSecondary={"Book a Demo"} />;
}
