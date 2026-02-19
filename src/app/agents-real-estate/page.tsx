import { WordPressContentPage } from '@/components/wp-content-page';

export default async function Page() {
  return <WordPressContentPage slug="agents-real-estate" fallbackTitle="Real Estate" />;
}
