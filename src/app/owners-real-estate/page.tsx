import Link from 'next/link';
import { CheckList, FAQ, FeatureGrid, PageShell, SectionTitle } from '@/components/site';
import { OwnerRealEstateDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-16 md:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start"><div><p className="text-cyan-200 text-xs font-semibold uppercase tracking-[0.1em]">For Owners</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">Sell or Lease Your Property Faster with ClickyTour</h1>
          <p className="max-w-3xl mt-4 text-cyan-100 text-lg">Reach global buyers, investors, and agents — without agency headaches. List, get matched, track proposals, and manage the deal flow with clear tools.</p>
        </div><div className="hidden lg:block max-w-sm"><OwnerRealEstateDiagram /></div></div></div>
      </section>
      
<section className="section"><div className="container"><SectionTitle title="ClickyTour.com • Real Estate Owners" /><FeatureGrid items={[{ title:'Fill the form with property details', desc:'Location, type, rooms, and any links/photos you already have.', icon:'??'},
{ title:'Receive estimated market value', desc:'Based on local market signals and comparable demand.', icon:'??'},
{ title:'Get pricing & presentation recommendations', desc:'What to adjust to attract buyers/tenants faster.', icon:'??'},
{ title:'Optional', desc:'marketing or legal support: Only if you need it — choose the services you want.', icon:'??'},
{ title:'Pre-screened buyer matches (new)', desc:'Receive proposals only from verified buyers matched by budget, interest, and location filters.', icon:'??'}]} /></div></section>

      <section className="section">
        <div className="container">
          <div className="rounded-xl bg-[#0F2B46] text-white p-8 md:p-10">
            <h2 className="text-3xl font-extrabold">Ready to move forward?</h2>
            <p className="text-cyan-100 mt-2">List your property or speak with owner support to choose the right path.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/owners-real-estate-list-property" className="btn-primary">Get started</Link>
              <Link href="/contact" className="btn-secondary">Talk to support</Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
