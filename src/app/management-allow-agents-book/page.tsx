import { PMPage } from '@/components/pm-page';

export default function Page() {
  return <PMPage title={"Allow Agents to Book with Net Pricing"}
    subtitle={"Give verified agents controlled access to your inventory and unlock additional sales."}
    introTitle={"Your inventory, their distribution reach"}
    introText={"The original content focused on setting net rates, publishing to agent dashboards, and receiving net payouts while agents add their margin."}
    highlights={["Set net pricing by season and property","Grant access only to verified agents","Track partner performance and bookings"]}
    features={[{"title":"Net price control","desc":"Keep pricing authority while enabling partner resale.","icon":"💲"},{"title":"Verified agent access","desc":"Share inventory only with approved professional sellers.","icon":"🔎"},{"title":"Reporting and oversight","desc":"Monitor who sells, what converts, and where to scale.","icon":"📋"}]}
    steps={[{"title":"Define net rates","desc":"Set protected base pricing for agent channels."},{"title":"Publish inventory","desc":"Expose selected listings to your approved partner network."},{"title":"Collect bookings","desc":"Receive reservation flow and payout visibility in dashboard."}]}
    ctaTitle={"Activate your agent sales channel"}
    ctaText={"Enable net pricing and open a controlled growth route for bookings."}
    ctaPrimary={"Enable Net Pricing"}
    ctaSecondary={"Learn How It Works"} />;
}
