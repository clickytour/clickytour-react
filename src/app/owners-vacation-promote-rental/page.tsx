import Link from 'next/link';
import { CheckList, FAQ, FeatureGrid, PageShell, SectionTitle } from '@/components/site';
import { OwnerPromoteRentalDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-16 md:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start"><div><p className="text-cyan-200 text-xs font-semibold uppercase tracking-[0.1em]">For Owners</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">Promote Rental</h1>
          <p className="max-w-3xl mt-4 text-cyan-100 text-lg">Increase visibility with promotion tools, social campaigns, and partner distribution support.</p>
        </div><div className="hidden lg:block max-w-sm"><OwnerPromoteRentalDiagram /></div></div></div>
      </section>
      
<section className="section"><div className="container"><SectionTitle title="Promotion options" /><FeatureGrid items={[
{ title:'Agent network reach', desc:'Let agents and partners market your property to their audience.', icon:'??'},
{ title:'Social campaign add-ons', desc:'Promote through curated posts, reels, and audience targeting.', icon:'??'},
{ title:'Listing optimization', desc:'Improve content, photos, and structure for better conversions.', icon:'???'},
{ title:'Performance metrics', desc:'Track views, leads, and booking impact from each action.', icon:'??'}
]} /></div></section>

      <section className="section">
        <div className="container">
          <div className="rounded-xl bg-[#0F2B46] text-white p-8 md:p-10">
            <h2 className="text-3xl font-extrabold">Ready to move forward?</h2>
            <p className="text-cyan-100 mt-2">List your property or speak with owner support to choose the right path.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/owners-vacation-free-evaluation" className="btn-primary">Get started</Link>
              <Link href="/contact" className="btn-secondary">Talk to support</Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
