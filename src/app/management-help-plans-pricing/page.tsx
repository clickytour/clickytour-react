import { WpManagementPage } from '@/components/wp-management-page';

export default async function Page() {
  return <WpManagementPage slug="management-help-plans-pricing" fallbackTitle="Manager Plans & Pricing" intro="Compare available plans and choose the setup that matches your growth stage." />;
}