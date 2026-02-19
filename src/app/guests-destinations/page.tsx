import { WpRolePage } from '@/components/wp-role-page';

export default function Page() {
  return (
    <WpRolePage
      slug='guests-destinations'
      fallbackTitle='Destinations'
      intro='Browse popular Greek destinations and compare areas based on your ideal trip type.'
      placeholderSections={[
      { title: 'Island Escapes', description: 'Find destinations known for beaches, views, and laid-back summer experiences.' },
      { title: 'City & Riviera Stays', description: 'Mix urban access with seaside options for balanced travel plans.' },
      { title: 'Family-Friendly Areas', description: 'Choose regions with easy logistics, safe beaches, and practical amenities.' },
      { title: 'Romantic & Luxury Picks', description: 'Discover premium destinations for special occasions and private stays.' },
      ]}
    />
  );
}
