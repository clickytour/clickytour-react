import { WpManagementPage } from '@/components/wp-management-page';

export default async function Page() {
  return <WpManagementPage slug="management-channel-manager" fallbackTitle="Channel Manager Integration" intro="Sync availability and rates across channels to reduce manual updates and errors." />;
}