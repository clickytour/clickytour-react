import { WpRolePage } from '@/components/wp-role-page';

export default function Page() {
  return (
    <WpRolePage
      slug='guests-personalized-planning'
      fallbackTitle='Personalized Planning'
      intro='Receive tailored recommendations based on your interests, dates, and budget preferences.'
      placeholderSections={[
      { title: 'Custom Destination Matching', description: 'Get destination and neighborhood suggestions aligned with your trip style.' },
      { title: 'Property Shortlist Creation', description: 'Review a focused list of stays that match your exact requirements.' },
      { title: 'Experience Recommendations', description: 'Add local activities and services that fit your schedule and interests.' },
      { title: 'Dedicated Guidance', description: 'Work with our team to finalize the most suitable travel setup.' },
      ]}
    />
  );
}
