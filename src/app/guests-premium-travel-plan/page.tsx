import { WpRolePage } from '@/components/wp-role-page';

export default function Page() {
  return (
    <WpRolePage
      slug='guests-premium-travel-plan'
      fallbackTitle='Premium Travel Plan'
      intro='Upgrade your trip with a premium planning layer and concierge-level assistance.'
      placeholderSections={[
      { title: 'Priority Planning', description: 'Receive faster recommendations and tailored coordination for high-value trips.' },
      { title: 'VIP Services', description: 'Arrange private transfers, exclusive experiences, and priority support.' },
      { title: 'Luxury Stay Selection', description: 'Access high-end villas and premium properties with curated matching.' },
      { title: 'End-to-End Assistance', description: 'Enjoy seamless handling from planning through departure.' },
      ]}
    />
  );
}
