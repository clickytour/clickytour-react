import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Reservation Help" subtitle="Need help booking? Our team is here to assist." ctaA="Get Started" ctaB="Learn More" />
      <section className="section"><div className="container">
        <SectionTitle title="Reservation Help" subtitle="Need help booking? Our team is here to assist." />
        <div className="text-center py-8"><Link href="/contact" className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700">Contact Us</Link></div>
      </div></section>
    </PageShell>
  );
}