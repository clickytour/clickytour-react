import { PageShell } from '@/components/site';

type WpPageResponse = {
  title?: { rendered?: string };
  content?: { rendered?: string };
};

type PlaceholderSection = {
  title: string;
  description: string;
};

type RolePageConfig = {
  slug: string;
  fallbackTitle: string;
  intro: string;
  placeholderSections: PlaceholderSection[];
};

function decodeHtmlEntities(value: string): string {
  return value
    .replace(/&#038;|&amp;/g, '&')
    .replace(/&#8211;|&ndash;/g, '–')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;|&#8221;/g, '"')
    .replace(/&#8216;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

async function fetchWpPage(slug: string): Promise<WpPageResponse | null> {
  const response = await fetch(`https://clickytour.com/wp-json/wp/v2/pages?slug=${slug}`, {
    headers: {
      'User-Agent': 'Mozilla/5.0',
    },
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    return null;
  }

  const pages = (await response.json()) as WpPageResponse[];
  return pages[0] ?? null;
}

export async function WpRolePage({ slug, fallbackTitle, intro, placeholderSections }: RolePageConfig) {
  const wpPage = await fetchWpPage(slug);
  const wpTitle = decodeHtmlEntities(wpPage?.title?.rendered?.trim() || fallbackTitle);
  const wpHtml = (wpPage?.content?.rendered || '').trim();
  const hasContent = wpHtml.length > 0;

  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-16 md:py-20">
        <div className="container">
          <p className="text-cyan-200 text-xs font-semibold uppercase tracking-[0.15em]">For Guests</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">{wpTitle}</h1>
          <p className="max-w-3xl mt-4 text-cyan-100 text-lg">{intro}</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container space-y-8">
          {hasContent ? (
            <article className="card p-6 md:p-8">
              <div
                className="prose prose-slate max-w-none prose-headings:text-[#0F2B46] prose-a:text-cyan-700 hover:prose-a:text-cyan-600 prose-strong:text-slate-900"
                dangerouslySetInnerHTML={{ __html: wpHtml }}
              />
            </article>
          ) : (
            <>
              <article className="card p-6 md:p-8">
                <h2 className="text-2xl font-extrabold text-[#0F2B46]">{wpTitle}</h2>
                <p className="text-slate-600 mt-3">
                  We&apos;re preparing this section with full details. In the meantime, explore the key topics below and contact our team for personalized guidance.
                </p>
              </article>

              <div className="grid md:grid-cols-2 gap-5">
                {placeholderSections.map((section) => (
                  <article key={section.title} className="card p-6">
                    <h3 className="text-xl font-bold text-[#0F2B46]">{section.title}</h3>
                    <p className="text-slate-600 mt-2">{section.description}</p>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </PageShell>
  );
}
