import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { VacationAssistDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Personalized Vacation Planning" subtitle="Get a custom trip plan tailored to your preferences." ctaA="Get Started" ctaB="Learn More" ctaHrefA="/guests-vacation-request" ctaHrefB="/guests-vacation-assistance" diagram={<VacationAssistDiagram />} />
      <section className="section"><div className="container">
        <SectionTitle title="Personalized Vacation Planning" subtitle="Get a custom trip plan tailored to your preferences." />
        <div className="text-center py-8"><Link href="/contact" className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700">Contact Us</Link></div>
      </div></section>
    </PageShell>
  );
}