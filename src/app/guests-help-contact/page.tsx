import { WpRolePage } from '@/components/wp-role-page';

export default function Page() {
  return (
    <WpRolePage
      slug='guests-help-contact'
      fallbackTitle='Support Contacts'
      intro='Reach the right support team quickly for booking, policies, or urgent travel issues.'
      placeholderSections={[
      { title: 'General Guest Support', description: 'For booking questions, property details, and basic travel guidance.' },
      { title: 'Urgent Stay Assistance', description: 'Use priority channels for issues that affect your immediate stay.' },
      { title: 'Policy & Billing Help', description: 'Contact specialists for cancellation, refunds, and payment concerns.' },
      { title: 'Partnership & Escalations', description: 'For unresolved cases, request escalation through official support routes.' },
      ]}
    />
  );
}
