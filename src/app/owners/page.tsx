import { CheckList, FeatureGrid, Hero, PageShell, SectionTitle, SidebarLayout } from '@/components/site';
import { roleMenus } from '@/components/site-menu';

export default function OwnersPage() {
  const menu = roleMenus.owners;

  return (
    <PageShell>
      <Hero
        title="Everything a property owner needs — in one clear path."
        subtitle="List, promote, manage, and collaborate with agents/partners using transparent rules and clean presentation tools."
        ctaA="List your property"
        ctaB="View owner options"
      />

      <SidebarLayout title="For Owners" menu={menu}>
        <section className="py-16">
          <SectionTitle title="What you get" />
          <FeatureGrid
            cols={4}
            items={[
              { title: 'Owner-ready listing flow', desc: 'Clear onboarding from property details to publishing.', icon: '🧩' },
              { title: 'White-label presentations', desc: 'Share polished listing links and PDF outputs.', icon: '📄' },
              { title: 'Promotion tools & visibility', desc: 'Boost exposure with structured promotion options.', icon: '📣' },
              { title: 'Transparent pricing rules', desc: 'Understand fees and terms before you commit.', icon: '💡' },
            ]}
          />
          <div className="mt-5 flex flex-wrap gap-2">
            {['Clear next steps', 'No hidden fees', 'Fast onboarding', 'Support when needed'].map((pill) => (
              <span key={pill} className="pill">{pill}</span>
            ))}
          </div>
        </section>

        <section className="py-16">
          <SectionTitle title="Vacation Owners — choose your model and tools" />
          <div className="grid md:grid-cols-3 gap-4">
            {[
              ['Self-managed', 'You manage calendar and communication with owner tools.'],
              ['Hybrid model', 'Use support services only where needed.'],
              ['Fully supported', 'Delegate day-to-day operations to trusted partners.'],
            ].map(([title, desc]) => (
              <article key={title} className="card p-5">
                <h3 className="font-bold text-[#0F2B46]">{title}</h3>
                <p className="text-sm text-slate-500 mt-2">{desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16">
          <SectionTitle title="Choose your management style" subtitle="Pick the path that matches your time, goals, and preferred control level." />
          <div className="grid md:grid-cols-2 gap-4">
            <article className="card p-6">
              <h3 className="font-bold text-xl text-[#0F2B46]">Path 1: Hands-on Owner</h3>
              <p className="text-slate-600 mt-2">Use dashboard tools, pricing controls, and direct messaging to run operations yourself.</p>
            </article>
            <article className="card p-6">
              <h3 className="font-bold text-xl text-[#0F2B46]">Path 2: Assisted Owner</h3>
              <p className="text-slate-600 mt-2">Combine platform tools with ClickyTour partners for smoother scaling and coverage.</p>
            </article>
          </div>
        </section>

        <section className="py-16">
          <SectionTitle title="Turn Your Property into Profit with ClickyTour" />
          <div className="grid lg:grid-cols-2 gap-5">
            <article className="card p-6">
              <h3 className="font-bold text-[#0F2B46] text-xl mb-3">Vacation Rental Owners</h3>
              <CheckList
                items={[
                  'Fast property onboarding',
                  'Seasonal pricing controls',
                  'Calendar sync options',
                  'Guest-ready presentation pages',
                  'Promotion campaign add-ons',
                  'Booking visibility tracking',
                  'Network service provider access',
                  'Operations support pathways',
                ]}
              />
            </article>
            <article className="card p-6">
              <h3 className="font-bold text-[#0F2B46] text-xl mb-3">Real Estate Owners</h3>
              <CheckList
                items={[
                  'Property listing setup',
                  'Buy/rent route configuration',
                  'Lead-ready listing format',
                  'Document and media support',
                  'Agent collaboration channels',
                  'White-label offer sharing',
                  'Promotion visibility options',
                  'Transparent fee structure',
                  'Onboarding and support guidance',
                ]}
              />
            </article>
          </div>
        </section>

        <section className="py-16">
          <SectionTitle title="Why Property Owners Trust ClickyTour" />
          <FeatureGrid
            items={[
              { title: '18+ Years Experience', desc: 'Proven domain experience in hospitality and property workflows.', icon: '🏆' },
              { title: 'Smart Technology Tools', desc: 'Clear interfaces for listings, offers, and partner collaboration.', icon: '⚙️' },
              { title: 'Hassle-Free Onboarding', desc: 'Structured setup with support at each key step.', icon: '🛫' },
            ]}
          />
        </section>

        <section className="py-16">
          <SectionTitle title="Why Property Owners Choose ClickyTour" />
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'No Tech Skills Required',
              'Simple listing editor and setup flow',
              'Clear payment and pricing visibility',
              'Collaboration with agents and providers',
              'Scalable tools for single or multiple properties',
              'Dedicated support when needed',
            ].map((reason) => (
              <div key={reason} className="card p-4 font-medium text-slate-700">✅ {reason}</div>
            ))}
          </div>
        </section>

        <section className="py-16">
          <SectionTitle title="Need Extra Hands?" subtitle="Tap into our staff and contractor network for cleaning, maintenance, guest support, and admin operations." />
          <div className="card p-6">
            <p className="text-slate-600">Scale without hiring full-time immediately — bring in verified professionals as your portfolio grows.</p>
          </div>
        </section>

        <section className="py-16">
          <SectionTitle title="Why List Your Property" />
          <FeatureGrid
            items={[
              { title: 'Broad Exposure', desc: 'Reach guests, agents, and buyers through structured discovery routes.', icon: '🌍' },
              { title: 'Professional Service', desc: 'Present listings with polished, client-ready formats.', icon: '🤝' },
              { title: 'Flexible Earnings', desc: 'Choose listing and revenue models that fit your strategy.', icon: '📈' },
              { title: 'Customer Support', desc: 'Get help at onboarding and operational stages.', icon: '🧑‍💼' },
              { title: 'Smart Tools', desc: 'Use modern controls for offers, visibility, and communication.', icon: '🧠' },
            ]}
          />
        </section>

        <section className="py-16">
          <div className="rounded-xl bg-[#0F2B46] text-white p-8 md:p-10">
            <h2 className="text-3xl font-extrabold">Ready to grow your property with ClickyTour?</h2>
            <p className="text-cyan-100 mt-2">Choose your model, publish confidently, and scale with transparent support.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button className="btn-primary">Get started now</button>
              <button className="btn-secondary">Talk to owner support</button>
            </div>
          </div>
        </section>
      </SidebarLayout>
    </PageShell>
  );
}
