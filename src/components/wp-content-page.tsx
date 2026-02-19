import { PageShell } from '@/components/site';

type WordPressPage = {
  title?: { rendered?: string };
  content?: { rendered?: string };
};

async function getWordPressPage(slug: string): Promise<WordPressPage | null> {
  const response = await fetch(`https://clickytour.com/wp-json/wp/v2/pages?slug=${slug}`, {
    headers: {
      'User-Agent': 'Mozilla/5.0',
    },
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as WordPressPage[];
  return data?.[0] ?? null;
}

function buildPlaceholderHtml(title: string) {
  return `
    <p>${title} details are being prepared and will be published soon.</p>
    <p>This section is designed for agents and includes practical guidance, tools, and next steps related to <strong>${title}</strong>.</p>
    <p>In the meantime, please contact the ClickyTour team if you need support or access to this information.</p>
  `;
}

export async function WordPressContentPage({ slug, fallbackTitle }: { slug: string; fallbackTitle: string }) {
  const wpPage = await getWordPressPage(slug);
  const title = wpPage?.title?.rendered?.trim() || fallbackTitle;
  const html = wpPage?.content?.rendered?.trim() || buildPlaceholderHtml(title);

  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-14 md:py-16">
        <div className="container">
          <p className="text-cyan-200 text-xs font-semibold uppercase tracking-[0.1em]">For Agents</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2" dangerouslySetInnerHTML={{ __html: title }} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="card p-6 md:p-10 max-w-4xl mx-auto">
            <div
              className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-cyan-700 hover:prose-a:text-cyan-800"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </article>
        </div>
      </section>
    </PageShell>
  );
}
