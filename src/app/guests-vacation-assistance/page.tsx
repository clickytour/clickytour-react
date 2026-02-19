import { WpRolePage } from '@/components/wp-role-page';

export default function Page() {
  return (
    <WpRolePage
      slug='guests-vacation-assistance'
      fallbackTitle='Vacation Assistance'
      intro='Get support for every stage of your trip, from selecting the right area to finalizing your stay details.'
      placeholderSections={[
      { title: 'Trip Brief & Preferences', description: 'Share your dates, group details, and priorities so we can suggest the best-fit options faster.' },
      { title: 'Accommodation Matching', description: 'Receive curated proposals that balance location, comfort, amenities, and budget.' },
      { title: 'Arrival & Local Coordination', description: 'Get practical guidance for transfers, check-in timing, and local services.' },
      { title: 'On-Trip Support', description: 'Stay connected with responsive assistance during your stay for smooth travel.' },
      ]}
    />
  );
}
