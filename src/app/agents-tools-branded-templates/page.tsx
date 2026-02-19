import { AgentsSubpageTemplate } from '@/components/agents-subpage';

export default function Page() {
  return (
    <AgentsSubpageTemplate
      title={"Branded Templates & Chat Tools"}
      subtitle={"Communicate Like a Pro — With Zero Design or Setup"}
      cardTitle={"Highlights"}
      cards={["Ready-to-use branded templates and built-in chat tools help you respond faster and close more deals.","Access Templates","Start Chatting","Templates Overview","Professional Templates, Ready to Go","Instant access to properties, white-label offers, and clients — without overhead."]}
      sections={[{"title":"Overview","body":"Ready-to-use branded templates and built-in chat tools help you respond faster and close more deals.","points":["Access Templates","Start Chatting","Templates Overview"]},{"title":"How agents apply this","body":"Professional Templates, Ready to Go","points":["Email Templates","Branded or no-logo formats.","WhatsApp/Viber Scripts","Quick pre-written replies."]},{"title":"Next steps","body":"Instant access to properties, white-label offers, and clients — without overhead.","points":["Social Media Captions","Perfect for quick posts.","How It Helps PMC"]}]}
      ctaTitle={"Start growing with ClickyTour"}
      ctaBody={"Create your agent profile, publish your offers, and help clients book faster with a complete digital journey."}
      ctaPrimary={{ label: 'Get started', href: '/contact' }}
      ctaSecondary={{ label: 'View agent tools', href: '/for-agents' }}
    />
  );
}
