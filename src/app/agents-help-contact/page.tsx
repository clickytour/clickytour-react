import { WordPressContentPage } from '@/components/wp-content-page';

export default async function Page() {
  return <WordPressContentPage slug="agents-help-contact" fallbackTitle="Contact &amp; Support (agents)" />;
}
