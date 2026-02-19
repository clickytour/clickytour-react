import { WpRolePage } from '@/components/wp-role-page';

export default function Page() {
  return (
    <WpRolePage
      slug='guests-what-to-do'
      fallbackTitle='What to Do & Where to Go'
      intro='Discover activities, local highlights, and destination ideas tailored to your travel style.'
      placeholderSections={[
      { title: 'Curated Experiences', description: 'Explore handpicked ideas for culture, food, nature, and family-friendly activities.' },
      { title: 'Daily Planning Suggestions', description: 'Build your day around distance, timing, and interests to avoid unnecessary stress.' },
      { title: 'Hidden Gems', description: 'Find less-crowded spots and authentic local recommendations beyond the typical routes.' },
      { title: 'Flexible Itineraries', description: 'Keep your plans adaptable with alternatives for weather, pace, and preferences.' },
      ]}
    />
  );
}
