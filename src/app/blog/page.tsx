import { PageShell, SectionTitle } from '@/components/site';

const posts = [
  {
    title: 'test another saving NEW',
    excerpt: 'kkkkk',
    date: 'October 14, 2025',
    category: 'Greece',
    link: 'https://test.clickytour.com/4292',
  },
  {
    title: 'Top 5 Greece New 1',
    excerpt: 'Short Description post',
    date: 'October 9, 2025',
    category: 'Greece',
    link: 'https://test.clickytour.com/4282',
  },
  {
    title: 'This is titlel New',
    excerpt: 'this is short summary',
    date: 'October 9, 2025',
    category: 'Greece',
    link: 'https://test.clickytour.com/4279',
  },
  {
    title: 'Top 5 sea coast vacation destinations in Greece New',
    excerpt: 'Short Description post',
    date: 'October 9, 2025',
    category: 'Greece',
    link: 'https://test.clickytour.com/4276',
  },
  {
    title: 'NEW Subh test user',
    excerpt: 'I am subh',
    date: 'October 9, 2025',
    category: 'Greece',
    link: 'https://test.clickytour.com/4273',
  },
  {
    title: 'OLD testing blog title',
    excerpt: 'tummayr',
    date: 'October 7, 2025',
    category: 'Greece',
    link: 'https://test.clickytour.com/4071',
  },
];

export default function BlogPage() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-16 md:py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-extrabold">Blog</h1>
          <p className="max-w-2xl mt-4 text-cyan-100 text-lg">Latest updates, news and destination stories from ClickyTour.</p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionTitle title="Latest Articles" subtitle="Blog listing cloned from the WordPress structure with mock post cards." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {posts.map((post) => (
              <article key={post.title} className="card p-5 flex flex-col">
                <span className="inline-block text-xs rounded-full bg-cyan-50 text-cyan-700 px-2 py-1 w-fit">{post.category}</span>
                <h3 className="font-bold text-lg mt-3 text-slate-900">{post.title}</h3>
                <p className="text-sm text-slate-500 mt-2 flex-1">{post.excerpt}</p>
                <div className="text-xs text-slate-400 mt-4">{post.date} • No Comments</div>
                <a href={post.link} target="_blank" className="text-cyan-700 text-sm font-semibold mt-3 inline-block">Read post →</a>
              </article>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm">
            <span className="pill">Page 1</span>
            <a className="pill" href="https://test.clickytour.com/blog/page/2" target="_blank">Page 2</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
