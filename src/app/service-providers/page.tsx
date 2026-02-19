import { FeatureGrid, Hero, PageShell, SectionTitle, SidebarLayout } from '@/components/site';
import { roleMenus } from '@/components/site-menu';

export default function ServiceProvidersPage() {
  const menu = roleMenus.serviceProviders;

  return (
    <PageShell>
      <Hero
        title="Grow bookings and visibility — with a clear provider path."
        subtitle="List your business, reach guests and agents, and offer services to property owners — all from one structured menu."
        ctaA="Join as provider"
        ctaB="View categories"
      />

      <SidebarLayout title="For Service Providers" menu={menu}>
        <section className="py-16">
          <SectionTitle title="What you get" />
          <FeatureGrid
            items={[
              { title: 'Clear listing & onboarding flow', desc: 'Launch with step-by-step setup and profile guidance.', icon: '🧭' },
              { title: 'Transparent pricing & plan rules', desc: 'Know exactly how plans and visibility levels work.', icon: '💬' },
              { title: 'Promotion tools & templates', desc: 'Use ready formats to showcase services professionally.', icon: '📣' },
              { title: 'Access to guests, agents, owners', desc: 'Be discoverable across key demand channels.', icon: '🤝' },
            ]}
            cols={4}
          />
          <div className="mt-5 flex flex-wrap gap-2">
            {['Fast listing', 'Clean categories', 'Mobile-optimized', 'Support & FAQ'].map((pill) => (
              <span key={pill} className="pill">{pill}</span>
            ))}
          </div>
        </section>

        <section className="py-16">
          <SectionTitle title="Provider Navigation — list, offer, grow" />
          <div className="grid md:grid-cols-3 gap-4">
            {[
              ['List', 'Set up profile, locations, pricing model, and availability.'],
              ['Offer', 'Publish services to guest, owner, and agent-facing streams.'],
              ['Grow', 'Use promotion options and performance visibility to scale.'],
            ].map(([title, desc]) => (
              <article key={title} className="card p-5">
                <h3 className="font-bold text-[#0F2B46]">{title}</h3>
                <p className="text-sm text-slate-500 mt-2">{desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16">
          <SectionTitle title="Service categories" subtitle="Examples of high-demand categories you can list under." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Cleaning & housekeeping',
              'Property maintenance',
              'Guest transport',
              'Concierge & local experiences',
              'Photography & media',
              'Legal / admin support',
            ].map((category) => (
              <article key={category} className="card p-5">
                <h3 className="font-semibold text-[#0F2B46]">{category}</h3>
                <p className="text-sm text-slate-500 mt-1">Structured listing slot with clean presentation.</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16">
          <div className="rounded-xl bg-[#0F2B46] text-white p-8 md:p-10">
            <h2 className="text-3xl font-extrabold">Ready to join as a provider?</h2>
            <p className="text-cyan-100 mt-2">Create your listing, select your categories, and start receiving opportunities.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button className="btn-primary">Create provider profile</button>
              <button className="btn-secondary">Read onboarding FAQ</button>
            </div>
          </div>
        </section>
      </SidebarLayout>
    </PageShell>
  );
}
