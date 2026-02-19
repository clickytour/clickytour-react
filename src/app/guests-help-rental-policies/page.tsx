import { WpRolePage } from '@/components/wp-role-page';

export default function Page() {
  return (
    <WpRolePage
      slug='guests-help-rental-policies'
      fallbackTitle='Rental Policies'
      intro='Understand rental terms so you can book with confidence and clear expectations.'
      placeholderSections={[
      { title: 'Check-In & Check-Out Rules', description: 'Know timing windows and requirements before arrival.' },
      { title: 'House Rules & Conduct', description: 'Review occupancy, noise, and property-use expectations.' },
      { title: 'Security Deposits & Damages', description: 'See how deposits, incident reporting, and charges are handled.' },
      { title: 'Policy Exceptions', description: 'Learn how special requests are reviewed and approved.' },
      ]}
    />
  );
}
