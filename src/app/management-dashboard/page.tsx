import { PMPage } from '@/components/pm-page';
import { DashboardToolsDiagram } from '@/components/diagrams';

export default function Page() {
  return <PMPage diagram={<DashboardToolsDiagram />} title={"ClickyTour.com • Property Management Companies"}
    subtitle={"Your Command Center for Property Management"}
    introTitle={"Everything in one secure place"}
    introText={"The source page described the dashboard as a single interface for reservations, earnings, communications, and integrations with channel and tools modules."}
    highlights={["Monitor real-time booking activity","Track revenue and occupancy trends","Manage payouts and communication centrally"]}
    features={[{"title":"Real-time bookings","desc":"Stay updated on reservation flow across connected channels.","icon":"⏱️"},{"title":"Performance insights","desc":"See occupancy, ranking, and revenue metrics clearly.","icon":"📊"},{"title":"Automation links","desc":"Sync with channel manager and tools center workflows.","icon":"🧩"}]}
    steps={[{"title":"Review daily KPIs","desc":"Check occupancy, arrivals, departures, and booking pace."},{"title":"Handle operations","desc":"Coordinate tasks, messaging, and service updates."},{"title":"Export and report","desc":"Share financial and performance outputs with your team."}]}
    ctaTitle={"Run your business from one dashboard"}
    ctaText={"Operate smarter with live data and connected management tools."}
    ctaPrimary={"Log In Now"}
    ctaSecondary={"See Features"} />;
}
