import { WordPressContentPage } from '@/components/wp-content-page';

export default async function Page() {
  return <WordPressContentPage slug="agents-explore-services" fallbackTitle="Explore Vacation Services / Businesses" />;
}
