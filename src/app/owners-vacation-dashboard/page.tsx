import { CheckList, FAQ, FeatureGrid, PageShell, SectionTitle } from '@/components/site';
import { OwnerDashboardDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-16 md:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start"><div><p className="text-cyan-200 text-xs font-semibold uppercase tracking-[0.1em]">For Owners</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">Owner Dashboard</h1>
          <p className="max-w-3xl mt-4 text-cyan-100 text-lg">Your control center for bookings, calendars, guests, finances, services, and growth actions.</p>
        </div><div className="hidden lg:block max-w-sm"><OwnerDashboardDiagram /></div></div></div>
      </section>
      
<section className="section"><div className="container"><SectionTitle title="Core dashboard modules" /><FeatureGrid cols={3} items={[
{ title:'Reservations & calendar', desc:'View bookings, availability, and channel status in one timeline.', icon:'???'},
{ title:'Pricing & rules', desc:'Adjust net/gross pricing, minimum stay, and season settings.', icon:'??'},
{ title:'Inbox & communication', desc:'Manage guest, agent, and provider messages with context.', icon:'??'},
{ title:'Finance overview', desc:'Track earnings, expenses, payouts, and downloadable reports.', icon:'??'},
{ title:'Service requests', desc:'Create and follow cleaning, check-in, and maintenance tasks.', icon:'??'},
{ title:'Growth tools', desc:'Activate promotion, campaigns, and visibility boosters.', icon:'??'}
]} /></div></section>
<section className="section section-soft"><div className="container"><SectionTitle title="Designed for clarity" /><CheckList items={['Single view of operations and performance','Export-ready reports for accounting','Role-based access for teams and partners','Simple interface for non-technical owners']} /></div></section>

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
