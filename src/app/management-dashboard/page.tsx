import { WpManagementPage } from '@/components/wp-management-page';

export default async function Page() {
  return <WpManagementPage slug="management-dashboard" fallbackTitle="Manager Dashboard" intro="Monitor performance, listings, and activity from one centralized dashboard." />;
}