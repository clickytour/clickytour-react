import { PageShell } from '@/components/site';

const pageTitle = "FAQ &amp; Pricing";

const pageHtml = `<p>FAQ &amp; Pricing content is coming soon. We are preparing practical guidance, clear next steps, and platform-specific details to help service providers grow on ClickyTour.</p><p>Please check back shortly for the full page content.</p>`;

export default function ServiceProviderSubpage() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-14 md:py-16">
        <div className="container">
          <p className="text-cyan-200 text-xs font-semibold uppercase tracking-[0.1em]">For Service Providers</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2" dangerouslySetInnerHTML={{ __html: pageTitle }} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="card p-6 md:p-10 max-w-4xl mx-auto">
            <div
              className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-cyan-700 hover:prose-a:text-cyan-800"
              dangerouslySetInnerHTML={{ __html: pageHtml }}
            />
          </article>
        </div>
      </section>
    </PageShell>
  );
}
