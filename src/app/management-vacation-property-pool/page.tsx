import { PMPage } from '@/components/pm-page';

export default function Page() {
  return <PMPage title={"Vacation Property Pool"}
    subtitle={"Book and promote network properties to grow supply and revenue without extra acquisition costs."}
    introTitle={"Expand inventory through the pool"}
    introText={"The original content focused on access to more properties, reduced workload, and commission opportunities through net pricing and white-label distribution."}
    highlights={["Browse ready-to-sell properties from the dashboard","Send white-label offers under your own brand","Track bookings and commissions in one place"]}
    features={[{"title":"More inventory instantly","desc":"Offer wider choice without direct property sourcing.","icon":"🏡"},{"title":"Lower operational burden","desc":"Avoid repetitive content production for every opportunity.","icon":"🧠"},{"title":"Commission upside","desc":"Monetize demand by booking from approved pool supply.","icon":"💰"}]}
    steps={[{"title":"Explore pool properties","desc":"Review available listings matched to your target audience."},{"title":"Send offers","desc":"Package options into client-ready white-label proposals."},{"title":"Book and monitor","desc":"Confirm reservations and follow outcomes from one dashboard."}]}
    ctaTitle={"Ready to use the vacation property pool?"}
    ctaText={"Start offering more options today with a low-friction operating model."}
    ctaPrimary={"Explore the Pool"}
    ctaSecondary={"Join the Pool Now"} />;
}
