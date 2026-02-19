import { WpRolePage } from '@/components/wp-role-page';

export default function Page() {
  return (
    <WpRolePage
      slug='guests-help-how-booking-works'
      fallbackTitle='How Booking Works'
      intro='A simple guide to booking flow, confirmations, and what happens after reservation.'
      placeholderSections={[
      { title: 'Search & Select', description: 'Browse options, compare listings, and choose the property that fits your plan.' },
      { title: 'Request or Reserve', description: 'Submit your dates and guest details to proceed with booking.' },
      { title: 'Confirmation & Payment', description: 'Receive confirmation steps and payment instructions clearly.' },
      { title: 'Pre-Arrival Preparation', description: 'Get check-in details, host contacts, and travel-ready information.' },
      ]}
    />
  );
}
