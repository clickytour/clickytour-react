'use client';
import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { WorkWithUsDiagram } from '@/components/diagrams';
import { ListingCard } from '@/components/ListingCard';
import { getAllSearchItems } from '@/lib/searchHubEngine';

export default function Page() {
  const jobItems = getAllSearchItems().filter((i) => i.intent === 'jobs');

  return (
    <PageShell>
      <Hero title="Job Board" subtitle="Find hospitality, property management, and tourism jobs across Greece." ctaA="Browse Jobs" ctaB="Post a Job" diagram={<WorkWithUsDiagram />} />
      <section className="section"><div className="container">
        <SectionTitle eyebrow="Open Positions" title="Current Job Listings" subtitle="Seasonal and full-time opportunities in tourism and property management." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {jobItems.map((item) => (<ListingCard key={item.id} item={item} />))}
        </div>
        {jobItems.length === 0 && <div className="text-center py-12 text-slate-500"><p>No job listings yet.</p></div>}
        <div className="mt-8 text-center">
          <Link href="/search?intent=jobs" className="inline-block px-8 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700">Search All Jobs</Link>
        </div>
      </div></section>
    </PageShell>
  );
}
