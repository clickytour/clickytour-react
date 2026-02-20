import { CheckList, FAQ, FeatureGrid, PageShell, SectionTitle } from '@/components/site';
import { OwnerRealEstateDiagram } from '@/components/diagrams';
import { FreeEvaluationForm } from '@/components/forms';

export default function Page() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-16 md:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start"><div><p className="text-cyan-200 text-xs font-semibold uppercase tracking-[0.1em]">For Owners</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">List Your Property with ClickyTour – Get Real Offers Fast</h1>
          <p className="max-w-3xl mt-4 text-cyan-100 text-lg">Show your property to serious buyers. We promote your listing through our network of agents, real estate platforms, and targeted campaigns.</p>
        </div><div className="hidden lg:block max-w-sm"><OwnerRealEstateDiagram /></div></div></div>
      </section>
      
<section className="section"><div className="container"><SectionTitle title="ClickyTour.com • Real Estate Owners" /><CheckList items={['Property details and positioning','High-quality photos and floor plans','Sale/rent configuration and pricing','Contact and lead routing preferences','Review, approval, and publication']} /></div></section>

      <section className="section bg-slate-50">
        <div className="container max-w-3xl">
          <SectionTitle title="List Your Real Estate Property" subtitle="Fill in the details below and our team will review your listing within 24 hours." />
          <FreeEvaluationForm />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="rounded-xl bg-[#0F2B46] text-white p-8 md:p-10">
            <h2 className="text-3xl font-extrabold">Ready to move forward?</h2>
            <p className="text-cyan-100 mt-2">List your property or speak with owner support to choose the right path.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button className="btn-primary">Get started</button>
              <button className="btn-secondary">Talk to support</button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
