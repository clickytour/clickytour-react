import { PMPage } from '@/components/pm-page';

export default function Page() {
  return <PMPage title={"Grow Your Portfolio with ClickyTour"}
    subtitle={"Expand your reach, add properties from other PM companies, and get more bookings without adding extra staff or overhead."}
    introTitle={"Scale with less manual work"}
    introText={"The original page focused on moving from manual, limited growth to automated and scalable portfolio expansion. With ClickyTour, you can access a shared network of inventory, agents, and services while keeping your operations lean."}
    highlights={["Move beyond managing only your own inventory","Send white-label offers in seconds","Increase bookings while reducing repetitive tasks"]}
    features={[{"title":"Shared inventory access","desc":"Discover and activate relevant properties from the network.","icon":"🏘️"},{"title":"Automated proposal flow","desc":"Build and share client-ready offers in a few clicks.","icon":"⚡"},{"title":"Lower growth cost","desc":"Expand faster without immediately increasing team size.","icon":"💸"}]}
    steps={[{"title":"Join as a PMC","desc":"Create your company profile and define your market focus."},{"title":"Activate growth tools","desc":"Enable matching, listing, and white-label proposal features."},{"title":"Scale bookings","desc":"Promote inventory and convert demand through agent and guest channels."}]}
    ctaTitle={"Ready to grow your portfolio?"}
    ctaText={"Start with a scalable setup and expand your managed inventory through the ClickyTour ecosystem."}
    ctaPrimary={"Join as PMC"}
    ctaSecondary={"See How It Works"} />;
}
