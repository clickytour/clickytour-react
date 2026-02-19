import { WpManagementPage } from '@/components/wp-management-page';

export default async function Page() {
  return <WpManagementPage slug="management-allow-agents-book" fallbackTitle="Allow Agents to Book (Net Pricing)" intro="Enable agent bookings with transparent net pricing and partner-friendly workflows." />;
}