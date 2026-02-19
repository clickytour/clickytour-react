import { PageShell } from '@/components/site';

async function getGeneralTermsHtml() {
  const response = await fetch('https://clickytour.com/wp-json/wp/v2/pages?slug=general-terms', {
    headers: {
      'User-Agent': 'Mozilla/5.0',
    },
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch General Terms content');
  }

  const data = await response.json();
  return data?.[0]?.content?.rendered || '';
}

export default async function GeneralTermsPage() {
  const html = await getGeneralTermsHtml();

  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-14 md:py-16">
        <div className="container">
          <p className="text-cyan-200 text-xs font-semibold uppercase tracking-[0.1em]">Legal</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">General Terms</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="card p-6 md:p-10 max-w-4xl mx-auto">
            <div
              className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-cyan-700 hover:prose-a:text-cyan-800"
              dangerouslySetInnerHTML={{
                __html:
                  html ||
                  '<p>General Terms content is currently unavailable. Please check back soon.</p>',
              }}
            />
          </article>
        </div>
      </section>
    </PageShell>
  );
}
