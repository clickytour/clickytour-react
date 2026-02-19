import { WpManagementPage } from '@/components/wp-management-page';

export default async function Page() {
  return <WpManagementPage slug="management-help" fallbackTitle="Help & Support" intro="Find support resources and guidance for PM companies using ClickyTour." />;
}