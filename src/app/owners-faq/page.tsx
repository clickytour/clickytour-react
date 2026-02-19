import { CheckList, FAQ, FeatureGrid, PageShell, SectionTitle } from '@/components/site';

export default function Page() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-16 md:py-20">
        <div className="container">
          <p className="text-cyan-200 text-xs font-semibold uppercase tracking-[0.1em]">For Owners</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">Owners FAQ</h1>
          <p className="max-w-3xl mt-4 text-cyan-100 text-lg">Quick answers for listing, pricing, management models, payments, and support.</p>
        </div>
      </section>
      
<section className="section"><div className="container"><SectionTitle title="Frequently asked questions" /><FAQ items={[
{ q:'Do I need technical skills to list a property?', a:'No. The onboarding flow is guided, and support is available for content, setup, and publication.' },
{ q:'Can I choose between self-managed and full management?', a:'Yes. You can choose the model that fits your availability and switch as your needs evolve.' },
{ q:'How do pricing and commissions work?', a:'You keep visibility over net/gross pricing and applicable fees before publishing. Nothing is hidden.' },
{ q:'Can I sync with Airbnb or Booking?', a:'Yes, channel sync is available on relevant owner plans to keep availability aligned.' },
{ q:'How do I request cleaning or maintenance services?', a:'Use the owner dashboard to submit service requests and track progress with partner teams.' }
]} /></div></section>

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
