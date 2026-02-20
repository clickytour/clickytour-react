import { PMPage } from '@/components/pm-page';
import { OperationsSimplifiedDiagram } from '@/components/diagrams';

export default function Page() {
  return <PMPage diagram={<OperationsSimplifiedDiagram />} title={"Manage & Operate in One System"}
    subtitle={"Run properties, bookings, payouts, and communications from a centralized operational hub."}
    introTitle={"Simplify daily operations"}
    introText={"This page emphasized centralized dashboards, channel automation, integrated reporting, and connected tools that reduce fragmentation in day-to-day management."}
    highlights={["View properties, reservations, and payouts in one screen","Sync calendars and rates across multiple channels","Use integrated tools for marketing, finance, and communication"]}
    features={[{"title":"Central dashboard","desc":"Keep all core operating data visible and actionable.","icon":"🧭"},{"title":"Channel management","desc":"Reduce overbooking risk through synchronized availability.","icon":"🔄"},{"title":"Financial exports","desc":"Generate accountant-ready records faster.","icon":"🧮"}]}
    steps={[{"title":"Open manager dashboard","desc":"Start from one control point for all portfolio activity."},{"title":"Connect tools and channels","desc":"Link distribution, communications, and financial workflows."},{"title":"Operate and optimize","desc":"Track KPIs and improve processes over time."}]}
    ctaTitle={"Ready to simplify operations?"}
    ctaText={"Bring your management stack together and run with less friction."}
    ctaPrimary={"Open Dashboard"}
    ctaSecondary={"Explore Tools"} />;
}
