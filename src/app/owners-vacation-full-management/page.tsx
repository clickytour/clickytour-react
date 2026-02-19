import { PageShell } from '@/components/site';
import { fetchWpPageBySlug, ownersPlaceholderHtml, stripHtml } from '@/lib/wp-page';

const slug = 'owners-vacation-full-management';
const fallbackTitle = 'Full Management for Vacation Owners';

export default async function OwnersVacationFullManagementPage() {
  const page = await fetchWpPageBySlug(slug);
  const title = stripHtml(page.title) || fallbackTitle;
  const content = page.content?.trim() ? page.content : ownersPlaceholderHtml(title);

  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-14 md:py-16">
        <div className="container">
          <p className="text-cyan-200 text-xs font-semibold uppercase tracking-[0.1em]">For Owners</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">{title}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="card p-6 md:p-10 max-w-4xl mx-auto">
            <div
              className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-cyan-700 hover:prose-a:text-cyan-800"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </article>
        </div>
      </section>
    </PageShell>
  );
}
