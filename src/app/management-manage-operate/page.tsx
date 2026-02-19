import { WpManagementPage } from '@/components/wp-management-page';

export default async function Page() {
  return <WpManagementPage slug="management-manage-operate" fallbackTitle="Manage & Operate" intro="Keep daily operations organized with integrated tools for management teams." />;
}