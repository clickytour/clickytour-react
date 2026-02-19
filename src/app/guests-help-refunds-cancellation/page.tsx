import { WpRolePage } from '@/components/wp-role-page';

export default function Page() {
  return (
    <WpRolePage
      slug='guests-help-refunds-cancellation'
      fallbackTitle='Refunds & Cancellation'
      intro='See cancellation timing, refund eligibility, and how refund requests are processed.'
      placeholderSections={[
      { title: 'Cancellation Timeframes', description: 'Different policies apply based on how early the cancellation is made.' },
      { title: 'Refund Eligibility', description: 'Understand which charges are refundable under each policy condition.' },
      { title: 'How to Submit Requests', description: 'Use the correct support path to speed up cancellation handling.' },
      { title: 'Processing & Follow-Up', description: 'Track status updates and expected timelines for payment returns.' },
      ]}
    />
  );
}
