import { FeatureGrid, Hero, PageShell, SectionTitle } from '@/components/site';

const timeline = [
  { title: '2007–2015', desc: 'Our roots in property management & tourism.', icon: '📍' },
  { title: '2016–2022', desc: 'Expansion to real estate and agent partnerships.', icon: '🤝' },
  { title: '2023–2025', desc: 'ClickyTour platform launch connecting 5 user roles.', icon: '🚀' },
];

const whyClickyTourWorks = [
  { title: 'Property Owners', desc: 'More visibility, easier management.', icon: '🏡' },
  { title: 'PM Companies', desc: 'Grow portfolios without extra costs.', icon: '🏢' },
  { title: 'Agents / Tour Operators', desc: 'Access to net pricing & white-label tools.', icon: '🧭' },
  { title: 'Service Providers', desc: 'Direct connections to guests & partners.', icon: '🛎️' },
  { title: 'Guests / Travelers', desc: 'Curated properties & services.', icon: '✈️' },
];

export default function AboutPage() {
  return (
    <PageShell>
      <Hero
        title="About Us"
        subtitle="ClickyTour unites property owners, managers, agents, service providers, and travelers in a single ecosystem — simplifying bookings, sales, and growth for everyone."
        ctaA="Get Started"
        ctaB="Contact Us"
      />

      <section className="section">
        <div className="container">
          <SectionTitle title="Connecting Travel, Real Estate & Services in One Smart Platform" subtitle="A practical ecosystem where every role can collaborate and grow." />
          <div className="card p-6 md:p-8 text-slate-700">
            <p className="italic">
              We combine hospitality, real estate, and local services into one connected platform — designed to remove friction and help every partner work smarter.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionTitle eyebrow="Our Story" title="How ClickyTour evolved" />
          <FeatureGrid items={timeline} cols={3} />
        </div>
      </section>

      <section className="section">
        <div className="container grid lg:grid-cols-2 gap-6 items-start">
          <div>
            <SectionTitle eyebrow="Why ClickyTour Works" title="Why Thousands Choose ClickyTour" />
            <FeatureGrid items={whyClickyTourWorks} cols={2} />
          </div>
          <div className="card p-6 md:p-7 bg-gradient-to-br from-cyan-50 to-white">
            <h3 className="text-xl font-extrabold text-slate-900">Built for real operations</h3>
            <p className="text-slate-600 mt-3">
              We use brains and fancy machines to create brands, products and experiences that help our clients solve problems and seize opportunities.
            </p>
            <p className="text-slate-600 mt-3">
              Pede posuere quis ipsum commodo hac facilisis hendrerit. Mauris adipiscing dignissim ultricies dolor potenti litora senectus. Mus montes interdum netus massa.
            </p>
            <p className="text-slate-600 mt-3">
              Ad laoreet mauris sapien feugiat libero. Gravida porta odio enim ligula sapien conubia. Rutrum venenatis vestibulum leo lectus integer.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container text-center max-w-3xl">
          <SectionTitle eyebrow="Meet the Team" title="Meet the People Behind ClickyTour" subtitle="We are a team of travel, real estate, and technology experts with over 18 years of combined experience." />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card p-7 md:p-9 bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white text-center">
            <p className="text-cyan-200 font-semibold text-sm uppercase tracking-[0.1em]">Join Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Ready to Work With ClickyTour?</h2>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button className="btn-primary">For Property Owners</button>
              <button className="btn-secondary">For Agents</button>
              <button className="btn-secondary">For PMCs</button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
