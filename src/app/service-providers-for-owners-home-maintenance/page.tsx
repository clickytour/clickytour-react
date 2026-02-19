import { PageShell } from '@/components/site';

const subtitle = "From seasonal upkeep to emergency repairs, ClickyTour connects your maintenance services with vacation rentals and property owners.";
const overview = [
  "From seasonal upkeep to emergency repairs, ClickyTour connects your maintenance services with vacation rentals and property owners.",
  "Select the exact service type to appear in targeted searches.",
  "Home Maintenance Services on ClickyTour",
  "Why Choose ClickyTour for Your Maintenance Business?"
];
const features = [
  "General Handyman Services",
  "Seasonal Property Maintenance (Opening & Closing)",
  "Painting & Minor Repairs",
  "Roof & Gutter Maintenance",
  "Outdoor Area Upkeep (Gardens, Patios, Pools)",
  "Security & Safety Inspections",
  "Preventative Maintenance Packages",
  "Home Maintenance Services on ClickyTour"
];
const ctas = [
  "List My Service"
];

export default function ServiceProvidersSubpage() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-14 md:py-16">
        <div className="container">
          <p className="text-cyan-200 text-xs font-semibold uppercase tracking-[0.1em]">For Service Providers</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">Home Maintenance</h1>
          <p className="text-cyan-100 mt-4 max-w-3xl">{subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-8">
          <article className="card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-[#0F2B46]">Overview</h2>
            <div className="mt-4 space-y-3 text-slate-600 leading-relaxed">
              {overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <article className="card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-[#0F2B46]">Key Highlights</h2>
            <div className="mt-5 grid md:grid-cols-2 gap-4">
              {features.map((item) => (
                <div key={item} className="rounded-xl border border-slate-200 p-4 bg-white">
                  <p className="font-semibold text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl bg-[#0F2B46] text-white p-7 md:p-10">
            <h2 className="text-2xl md:text-3xl font-extrabold">Ready to move forward?</h2>
            <p className="text-cyan-100 mt-2">Take the next step and strengthen your provider visibility on ClickyTour.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button className="btn-primary">{ctas[0] ?? 'Get Started'}</button>
              <button className="btn-secondary">{ctas[1] ?? 'Learn More'}</button>
            </div>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
