import { WpRolePage } from '@/components/wp-role-page';

export default function Page() {
  return (
    <WpRolePage
      slug='guests-plans-offers'
      fallbackTitle='Plans & Offers'
      intro='Explore travel plans and seasonal offers designed to give better value for your stay.'
      placeholderSections={[
      { title: 'Early Booking Deals', description: 'Secure preferred properties and pricing by planning in advance.' },
      { title: 'Last-Minute Opportunities', description: 'Check limited-time availability for spontaneous travel windows.' },
      { title: 'Long-Stay Savings', description: 'Benefit from discounted rates when booking extended stays.' },
      { title: 'Premium Add-Ons', description: 'Upgrade your trip with concierge support and personalized extras.' },
      ]}
    />
  );
}
