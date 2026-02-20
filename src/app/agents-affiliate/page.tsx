import { AgentsSubpageTemplate } from '@/components/agents-subpage';

export default function Page() {
  return (
    <AgentsSubpageTemplate
      title={"Earn by Referring Partners — Not Only Bookings"}
      subtitle={"Invite property owners, service providers, and other agents to ClickyTour. Get rewarded when they activate and start using the platform."}
      cardTitle={"What you can do"}
      cards={["Property Owners: Owners listing rentals or real estate — you earn when they activate.", "Service Providers: Transfers, tours, yachts, chefs, wellness — commissions grow with demand.", "Agents & Agencies: Invite other agents to the ecosystem (optional downline logic later).", "Earn Without a Booking: Get rewarded for bringing supply (owners/providers) into the ecosystem.", "Compounds Over Time: More partners = more inventory and more opportunities to sell.", "Transparent Tracking: See clicks, registrations, activations, and payouts in one place."]}
      sections={[{"title": "Share your link", "body": "Use email, WhatsApp/Viber scripts, or a landing page you control."}, {"title": "Partner registers", "body": "They select their role (Owner / Provider / Agent) and complete onboarding."}, {"title": "You get rewarded", "body": "Earn when they activate (plan, listing, or first conversion — based on your rules)."}, {"title": "Frequently Asked Questions", "points": ["How do I get my affiliate link?", "Who can I refer?", "When do I get paid?", "Can I use my own landing page?"]}]}
      ctaTitle={"Start growing with ClickyTour"}
      ctaBody={"Property owners, service providers, and other agents — anyone who can join ClickyTour as a partner."}
      ctaPrimary={{ label: 'Get started', href: '/contact' }}
      ctaSecondary={{ label: 'View agent tools', href: '/for-agents' }}
    />
  );
}
