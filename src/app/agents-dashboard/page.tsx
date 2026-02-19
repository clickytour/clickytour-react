import { WordPressContentPage } from '@/components/wp-content-page';

export default async function Page() {
  return <WordPressContentPage slug="agents-dashboard" fallbackTitle="Agent Dashboard" />;
}
