import { PageShell } from '@/components/site';
import { SPForOwnersDiagram } from '@/components/diagrams';


const subtitle = "Vacation rentals and managed properties need reliable services — cleaning, check-in, repairs, and more. ClickyTour connects you directly to them.";
const overview = [
  "Vacation rentals and managed properties need reliable services — cleaning, check-in, repairs, and more. ClickyTour connects you directly to them.",
  "Your Service in Front of Property Owners & Hosts",
  "Why Reach Owners & Hosts on ClickyTour?"
];
const features = [
  "Cleaning Services",
  "Check-In / Check-Out Assistance",
  "Plumbing & Electrical",
  "Technical Repairs",
  "Home Maintenance",
  "Laundry & Linen",
  "Your Service in Front of Property Owners & Hosts",
  "Why Reach Owners & Hosts on ClickyTour?"
];
const ctas = [
  "List My Service",
  "Step 1: Choose your category"
];

export default function ServiceProvidersSubpage() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-14 md:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">
          <div>
          <p className="text-cyan-200 text-xs font-semibold uppercase tracking-[0.1em]">For Service Providers</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">For Property Owners / Hosts</h1>
          <p className="text-cyan-100 mt-4 max-w-3xl">{subtitle}</p>
        </div>
            <div className="hidden lg:block max-w-sm"><SPForOwnersDiagram /></div>
          </div>
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
