import { CheckList, FeatureGrid, Hero, PageShell, SectionTitle, SidebarLayout } from '@/components/site';
import { EcosystemDiagram } from '@/components/diagrams';
import { roleMenus } from '@/components/site-menu';

export default function PMCompaniesPage() {
  const menu = roleMenus.pmCompanies;

  return (
    <PageShell>
      <Hero
        title="Grow your portfolio and bookings — with a structured PMC path"
        subtitle="Choose between two clear growth paths: list your own properties or expand through the ClickyTour network ecosystem."
        ctaA="List your properties"
        ctaB="Increase portfolio"
      />

      <section className="section">
        <div className="container max-w-lg mx-auto">
          <EcosystemDiagram />
        </div>
      </section>

      <SidebarLayout title="For PM Companies" menu={menu}>
        <section className="py-16">
          <SectionTitle title="Choose your goal" />
          <div className="flex flex-wrap gap-3">
            <button className="btn-primary">List Your Properties</button>
            <button className="btn-secondary">Increase Your Portfolio</button>
          </div>
        </section>

        <section className="py-16 grid lg:grid-cols-2 gap-5">
          <article className="card p-6">
            <h3 className="font-bold text-xl text-[#0F2B46]">Path A: List properties on ClickyTour</h3>
            <div className="mt-4">
              <CheckList
                items={[
                  'Publish your managed inventory with clean presentation',
                  'Control availability, rates, and operational notes',
                  'Receive direct booking and partner interest flows',
                ]}
              />
            </div>
          </article>
          <article className="card p-6">
            <h3 className="font-bold text-xl text-[#0F2B46]">Path B: Offer network properties</h3>
            <div className="mt-4">
              <CheckList
                items={[
                  'Access partner inventory for broader client offers',
                  'Package multi-property proposals in fewer steps',
                  'Use collaboration routes with owners and agents',
                ]}
              />
            </div>
          </article>
        </section>

        <section className="py-16">
          <SectionTitle title="How the ecosystem works" subtitle="Owner matching flow connects your management company with aligned owners and inventory opportunities." />
          <div className="grid md:grid-cols-4 gap-4">
            {['Owner submits property', 'Matching rules applied', 'PMC receives fit opportunities', 'Onboarding and go-live'].map((step, i) => (
              <article key={step} className="card p-5">
                <p className="text-xs font-semibold text-cyan-700">STEP {i + 1}</p>
                <h3 className="font-bold mt-2 text-[#0F2B46]">{step}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16">
          <SectionTitle title="What you get" />
          <FeatureGrid
            items={[
              { title: 'Portfolio growth', desc: 'Expand managed inventory through structured listing and matching.', icon: '📈' },
              { title: 'Sales tools', desc: 'Use proposal and presentation tools for faster client conversion.', icon: '🧰' },
              { title: 'Operations', desc: 'Coordinate workflows with owners, agents, and service providers.', icon: '⚙️' },
            ]}
          />
        </section>

        <section className="py-16">
          <SectionTitle title="Who Can Work With Us" />
          <div className="grid md:grid-cols-3 gap-4">
            {[
              'Small-Medium Companies',
              'Regional Vacation Managers',
              'Real Estate Agencies with Rental Division',
            ].map((profile) => (
              <article key={profile} className="card p-5">
                <h3 className="font-bold text-[#0F2B46]">{profile}</h3>
                <p className="text-sm text-slate-500 mt-2">Structured entry path with scalable tool access.</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16">
          <SectionTitle title="Smart Offer System" subtitle="One-Click Offers help you package and share client-ready options quickly." />
          <div className="card p-6">
            <p className="text-slate-600">Build faster proposals, reduce manual formatting, and keep offer quality consistent across teams.</p>
          </div>
        </section>

        <section className="py-16">
          <SectionTitle title="Quick navigation" />
          <div className="flex flex-wrap gap-2">
            {['Portfolio setup', 'Offer tools', 'Owner matching', 'Operations support', 'Pricing & plans'].map((pill) => (
              <span key={pill} className="pill">{pill}</span>
            ))}
          </div>
        </section>

        <section className="py-16">
          <SectionTitle title="Join in 3 easy steps" />
          <div className="grid md:grid-cols-3 gap-4">
            {['Create PMC profile', 'Select growth path', 'Launch and scale'].map((step, i) => (
              <article key={step} className="card p-5">
                <p className="text-xs font-semibold text-cyan-700">STEP {i + 1}</p>
                <h3 className="font-bold mt-2 text-[#0F2B46]">{step}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16">
          <div className="rounded-xl bg-[#0F2B46] text-white p-8 md:p-10">
            <h2 className="text-3xl font-extrabold">Ready to grow as a PM Company?</h2>
            <p className="text-cyan-100 mt-2">Pick your path and activate your portfolio growth workflow today.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button className="btn-primary">Start onboarding</button>
              <button className="btn-secondary">Talk to PMC team</button>
            </div>
          </div>
        </section>
      </SidebarLayout>
    </PageShell>
  );
}
