import { WpManagementPage } from '@/components/wp-management-page';

export default async function Page() {
  return <WpManagementPage slug="management-help-faq" fallbackTitle="FAQ for Managers" intro="Get quick answers to common platform and workflow questions for management teams." />;
}