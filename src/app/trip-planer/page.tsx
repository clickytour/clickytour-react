import { WpRolePage } from '@/components/wp-role-page';

export default function Page() {
  return (
    <WpRolePage
      slug='trip-planer'
      fallbackTitle='Trip Planer'
      intro='Organize your trip in one place with practical planning steps and support options.'
      placeholderSections={[
      { title: 'Set Travel Priorities', description: 'Define destination goals, pace, and must-have amenities before booking.' },
      { title: 'Map Your Timeline', description: 'Coordinate flights, check-in windows, and key activities for a smooth schedule.' },
      { title: 'Budget with Clarity', description: 'Estimate accommodation, transport, and activity costs with fewer surprises.' },
      { title: 'Confirm the Essentials', description: 'Lock in bookings, contacts, and trip details before departure.' },
      ]}
    />
  );
}
