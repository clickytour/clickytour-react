import { PageShell } from '@/components/site';

type WpPageResponse = {
  title?: { rendered?: string };
  content?: { rendered?: string };
};

type ManagementPageConfig = {
  slug: string;
  fallbackTitle: string;
  intro: string;
};

function decodeHtmlEntities(value: string): string {
  return value
    .replace(/&#038;|&amp;/g, '&')
    .replace(/&#8211;|&ndash;/g, '–')
    .replace(/&#8217;|&#039;/g, "'")
    .replace(/&#8220;|&#8221;|&quot;/g, '"')
    .replace(/&#8216;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .trim();
}

async function fetchWpPage(slug: string): Promise<WpPageResponse | null> {
  const response = await fetch(`https://clickytour.com/wp-json/wp/v2/pages?slug=${slug}`, {
    headers: {
      'User-Agent': 'Mozilla/5.0',
    },
    next: { revalidate: 3600 },
  });

  if (!response.ok) return null;
  const data = (await response.json()) as WpPageResponse[];
  return data[0] ?? null;
}

function buildPlaceholder(title: string) {
  return [
    `Explore how ${title.toLowerCase()} fits into your property management workflow.`,
    'Understand key features, use cases, and the value for your team and property owners.',
    'Contact ClickyTour support to activate this section and get implementation guidance.',
  ];
}

export async function WpManagementPage({ slug, fallbackTitle, intro }: ManagementPageConfig) {
  const wpPage = await fetchWpPage(slug);
  const title = decodeHtmlEntities(wpPage?.title?.rendered || fallbackTitle) || fallbackTitle;
  const html = (wpPage?.content?.rendered || '').trim();
  const hasContent = html.length > 0;
  const placeholderItems = buildPlaceholder(title);

  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-14 md:py-16">
        <div className="container">
          <p className="text-cyan-200 text-xs font-semibold uppercase tracking-[0.12em]">For PM Companies</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">{title}</h1>
          <p className="max-w-3xl mt-4 text-cyan-100 text-lg">{intro}</p>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <article className="card p-6 md:p-8">
            {hasContent ? (
              <div
                className="prose prose-slate max-w-none prose-headings:text-[#0F2B46] prose-a:text-cyan-700 hover:prose-a:text-cyan-600 prose-strong:text-slate-900"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            ) : (
              <div>
                <h2 className="text-2xl font-extrabold text-[#0F2B46]">{title}</h2>
                <p className="text-slate-600 mt-3">This page is being prepared. Here is a quick overview to help you move forward.</p>
                <ul className="mt-4 space-y-2 text-slate-700">
                  {placeholderItems.map((item) => (
                    <li key={item} className="flex gap-2"><span className="text-cyan-700">•</span><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        </div>
      </section>
    </PageShell>
  );
}
