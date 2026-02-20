import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { AboutPlatformDiagram } from '@/components/diagrams';
import { coreMirrorBlogPosts } from '@/lib/coreMirror';

export default function Page() {
  const posts = coreMirrorBlogPosts;

  return (
    <PageShell>
      <Hero title="ClickyTour Blog" subtitle="Travel tips, owner insights, and partner guides." ctaA="Latest Posts" ctaB="Subscribe" ctaHrefA="/blog" ctaHrefB="/about" diagram={<AboutPlatformDiagram />} />
      <section className="section"><div className="container">
        <SectionTitle eyebrow="Latest" title="Blog Posts" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
              <img src={post.coverImage} alt={post.title} className="h-48 w-full object-cover transition-transform group-hover:scale-105" />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-semibold text-teal-700">{post.category}</span>
                  <span className="text-xs text-slate-400">{post.publishedAt}</span>
                </div>
                <h3 className="text-base font-semibold text-slate-900 group-hover:text-teal-700">{post.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-slate-500">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
        {posts.length === 0 && <div className="text-center py-12 text-slate-500"><p>No blog posts yet.</p></div>}
      </div></section>
    </PageShell>
  );
}
