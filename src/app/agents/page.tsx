import Link from 'next/link';
import { FeatureGrid, Hero, PageShell, SectionTitle, SidebarLayout } from '@/components/site';
import { roleMenus } from '@/components/site-menu';

export default function AgentsPage() {
  const menu = roleMenus.agents;

  return (
    <PageShell>
      <Hero
        title="Work Smarter. Sell More. Earn More."
        subtitle="ClickyTour connects you to rentals, tours/activities, and real estate — plus the tools to package, present, and close faster."
        ctaA="Join as agent"
        ctaB="Open agent tools"
      />

      <SidebarLayout title="For Agents" menu={menu}>
        <section className="py-16">
          <SectionTitle title="Why Agents Choose ClickyTour" />
          <FeatureGrid
            items={[
              { title: 'Access All Listings', desc: 'Rentals, tours/activities, and real estate in one flow.', icon: '🧭' },
              { title: 'Instant White-label Offers', desc: 'Share branded, client-ready proposals quickly.', icon: '⚡' },
              { title: 'Net Pricing', desc: 'Operate with clear margins and offer structure.', icon: '💰' },
            ]}
          />
        </section>

        <section className="py-16">
          <SectionTitle title="How it works" subtitle="Search → Select → Send → Earn" />
          <div className="grid md:grid-cols-4 gap-4">
            {['Search', 'Select', 'Send', 'Earn'].map((step, i) => (
              <article key={step} className="card p-5">
                <p className="text-xs font-semibold text-cyan-700">STEP {i + 1}</p>
                <h3 className="font-bold mt-2 text-[#0F2B46]">{step}</h3>
                <p className="text-sm text-slate-500 mt-1">
                  {step === 'Search' && 'Use filters across rentals, tours, and real estate.'}
                  {step === 'Select' && 'Build a shortlist aligned to client goals and budget.'}
                  {step === 'Send' && 'Share white-label offers via link or presentation formats.'}
                  {step === 'Earn' && 'Close faster with transparent net pricing workflows.'}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16">
          <SectionTitle title="Agent Tools" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Advanced Search', tags: ['Filters', 'Saved views'] },
              { title: 'Quotation Builder', tags: ['Fast proposals', 'Client-ready'] },
              { title: 'Dashboard', tags: ['Pipeline', 'Performance'] },
              { title: 'White-label Payments', tags: ['Branded', 'Secure'] },
              { title: 'Promotion Tools', tags: ['Campaigns', 'Visibility'] },
              { title: 'Direct Role Access', tags: ['Owner', 'Provider'] },
            ].map((tool) => (
              <article key={tool.title} className="card p-5">
                <h3 className="font-bold text-[#0F2B46]">{tool.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {tool.tags.map((tag) => (
                    <span key={tag} className="pill">{tag}</span>
                  ))}
                </div>
                <Link href="/agents-tools/" className="inline-block mt-4 text-cyan-700 font-semibold text-sm">Open →</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16 grid md:grid-cols-2 gap-4">
          <article className="card p-6">
            <h3 className="font-bold text-xl text-[#0F2B46]">Operations support</h3>
            <p className="text-slate-600 mt-2">Get operational help for coordination, logistics, and structured handovers with partners.</p>
          </article>
          <article className="card p-6">
            <h3 className="font-bold text-xl text-[#0F2B46]">Partner wizard</h3>
            <p className="text-slate-600 mt-2">Use guided setup to activate collaborations with owners, providers, and PMCs.</p>
          </article>
        </section>

        <section className="py-16">
          <SectionTitle title="Agent Plans & Pricing" />
          <div className="grid md:grid-cols-3 gap-4">
            {[
              ['Free Access', 'Start with core listing access and base toolset.'],
              ['Pro Plan Subscription', 'Unlock advanced tools and enhanced presentation options.'],
              ['Commission Model', 'Earn per successful transaction with clear terms.'],
            ].map(([title, desc]) => (
              <article key={title} className="card p-6">
                <h3 className="font-bold text-[#0F2B46] text-xl">{title}</h3>
                <p className="text-sm text-slate-500 mt-2">{desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16">
          <SectionTitle title="Why Choose Us" />
          <FeatureGrid
            items={[
              { title: 'Cleaner workflow', desc: 'Fewer steps from inquiry to proposal.', icon: '🧼' },
              { title: 'Client-ready presentation', desc: 'Professional offer format without extra design work.', icon: '📋' },
              { title: 'Multi-vertical access', desc: 'Sell across travel and property categories from one place.', icon: '🌐' },
            ]}
          />
        </section>

        <section className="py-16">
          <SectionTitle title="Blog & insights" subtitle="Stay updated with sales tactics, market trends, and platform updates for agents." />
          <div className="grid md:grid-cols-3 gap-4">
            {['How to package faster offers', 'Pricing strategy for mixed portfolios', 'Cross-selling rentals + activities'].map((post) => (
              <article key={post} className="card p-5">
                <h3 className="font-semibold text-[#0F2B46]">{post}</h3>
                <p className="text-sm text-slate-500 mt-2">Practical playbook and insights for active agents.</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16">
          <div className="rounded-xl bg-[#0F2B46] text-white p-8 md:p-10">
            <h2 className="text-3xl font-extrabold">Ready to accelerate your agent workflow?</h2>
            <p className="text-cyan-100 mt-2">Start with free access and upgrade as your sales pipeline grows.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button className="btn-primary">Create agent account</button>
              <button className="btn-secondary">Compare plans</button>
            </div>
          </div>
        </section>
      </SidebarLayout>
    </PageShell>
  );
}
