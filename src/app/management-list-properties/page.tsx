import { WpManagementPage } from '@/components/wp-management-page';

export default async function Page() {
  return <WpManagementPage slug="management-list-properties" fallbackTitle="List Your Properties" intro="Publish and manage your portfolio with structured listings and clear visibility." />;
}