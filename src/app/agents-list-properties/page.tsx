import { WordPressContentPage } from '@/components/wp-content-page';

export default async function Page() {
  return <WordPressContentPage slug="agents-list-properties" fallbackTitle="List Properties on ClickyTour" />;
}
