import { WpRolePage } from '@/components/wp-role-page';

export default function Page() {
  return (
    <WpRolePage
      slug='guests-help'
      fallbackTitle='Guest Help & FAQ'
      intro='Find clear answers and practical guidance for booking, policies, and support contacts.'
      placeholderSections={[
      { title: 'Before You Book', description: 'Understand availability, pricing, and booking confirmation steps.' },
      { title: 'During Your Stay', description: 'Get help for check-in details, service issues, and urgent questions.' },
      { title: 'Policies & Terms', description: 'Review key rental terms, rules, and important booking conditions.' },
      { title: 'Support Channels', description: 'Contact the right team quickly depending on your request type.' },
      ]}
    />
  );
}
