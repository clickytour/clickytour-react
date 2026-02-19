import { CheckList, FAQ, FeatureGrid, PageShell, SectionTitle } from '@/components/site';

export default function Page() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-16 md:py-20">
        <div className="container">
          <p className="text-cyan-200 text-xs font-semibold uppercase tracking-[0.1em]">For Owners</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">Vacation Property Owners</h1>
          <p className="max-w-3xl mt-4 text-cyan-100 text-lg">Turn your vacation property into profit with flexible management options, channel visibility, and practical tools.</p>
        </div>
      </section>
      
        <section className="section">
          <div className="container">
            <SectionTitle title="Choose your operating model" subtitle="Pick the level of support that fits your time and goals." />
            <FeatureGrid cols={3} items={[
              { title: 'Self-Managed', desc: 'You run guests, pricing, and operations with full control.', icon: '??' },
              { title: 'Multi-Platform Sync', desc: 'Distribute to 30+ channels with synced calendars and availability.', icon: '??' },
              { title: 'Full Management', desc: 'Delegate day-to-day work while tracking performance in your dashboard.', icon: '??' },
            ]} />
          </div>
        </section>
        <section className="section section-soft"><div className="container"><SectionTitle title="Why owners choose ClickyTour" /><CheckList items={[
          'Exposure across major booking channels and agent networks',
          'Tools for pricing, payments, reporting, and automation',
          'Service-request workflows for cleaning, repairs, and check-ins',
          'Optional promotion campaigns and social visibility',
          'Clear onboarding and owner support'
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
