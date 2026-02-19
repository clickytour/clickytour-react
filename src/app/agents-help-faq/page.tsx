import { WordPressContentPage } from '@/components/wp-content-page';

export default async function Page() {
  return <WordPressContentPage slug="agents-help-faq" fallbackTitle="FAQ for Agents" />;
}
