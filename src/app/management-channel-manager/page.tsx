import { PMPage } from '@/components/pm-page';

export default function Page() {
  return <PMPage title={"Connect Once, Manage Everywhere"}
    subtitle={"Sync availability, rates, and bookings across your distribution channels — and control everything from your ClickyTour PMC Dashboard."}
    introTitle={"Keep channels synced and controlled"}
    introText={"Although the original page included placeholder content, its core intent is clear: centralized channel synchronization to prevent conflicts and reduce manual updates."}
    highlights={["Sync rates and availability from one source","Reduce overbookings through real-time updates","Maintain operational consistency across channels"]}
    features={[{"title":"Unified sync engine","desc":"Push inventory changes to connected platforms quickly.","icon":"🔗"},{"title":"Conflict prevention","desc":"Protect against calendar mismatches and double bookings.","icon":"🚫"},{"title":"Time-saving automation","desc":"Cut repetitive channel-by-channel manual work.","icon":"🤖"}]}
    steps={[{"title":"Connect your channels","desc":"Authorize platforms and map inventory correctly."},{"title":"Set sync rules","desc":"Define rates, availability logic, and update priorities."},{"title":"Monitor performance","desc":"Track channel output and optimize distribution strategy."}]}
    ctaTitle={"Activate Channel Manager"}
    ctaText={"Centralize distribution and keep your listings accurate everywhere."}
    ctaPrimary={"Activate Channel Manager"}
    ctaSecondary={"See How It Works"} />;
}
