import { WpRolePage } from '@/components/wp-role-page';

export default function Page() {
  return (
    <WpRolePage
      slug='guests-real-estate'
      fallbackTitle='Real Estate'
      intro='Explore real estate opportunities in Greece for lifestyle, relocation, or investment goals.'
      placeholderSections={[
      { title: 'Buy or Rent Pathways', description: 'Evaluate whether short-term rental, long-term rent, or purchase fits your goals.' },
      { title: 'Location Comparison', description: 'Understand differences in demand, lifestyle, and value by area.' },
      { title: 'Property Selection Support', description: 'Review curated property options based on budget and criteria.' },
      { title: 'Local Process Guidance', description: 'Get clear next steps for inquiries, visits, and documentation flow.' },
      ]}
    />
  );
}
