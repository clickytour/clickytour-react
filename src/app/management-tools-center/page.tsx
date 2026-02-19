import { WpManagementPage } from '@/components/wp-management-page';

export default async function Page() {
  return <WpManagementPage slug="management-tools-center" fallbackTitle="Tools Center" intro="Access practical tools that help your team market, manage, and scale operations." />;
}