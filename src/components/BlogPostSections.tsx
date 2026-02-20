import Link from "next/link";
import type { CoreMirrorBlogPost } from "@/lib/coreMirror/types";

export function BlogPostSections({ post }: { post: CoreMirrorBlogPost }) {
  return (
    <div className="mx-auto max-w-[900px] px-4 py-8">
      <div className="mb-4 text-sm text-slate-500">
        <Link href="/" className="hover:text-teal-600">Home</Link>
        <span className="mx-1">/</span>
        <Link href="/blog" className="hover:text-teal-600">Blog</Link>
        <span className="mx-1">/</span>
        <span className="text-slate-700">{post.title}</span>
      </div>

      <article>
        <div className="mb-4 flex items-center gap-3">
          <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">{post.category}</span>
          <span className="text-sm text-slate-500">{post.publishedAt}</span>
        </div>

        <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">{post.title}</h1>
        <p className="mt-3 text-lg text-slate-600">{post.excerpt}</p>

        <img src={post.coverImage} alt={post.title} className="mt-6 h-[400px] w-full rounded-2xl object-cover" />

        <div className="mt-8 space-y-4">
          {post.content.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-slate-700">{paragraph}</p>
          ))}
        </div>

        {post.relatedPropertySlug && (
          <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
            <p className="text-sm font-semibold text-teal-800">Related Property</p>
            <Link href={`/property/vacation/${post.relatedPropertySlug}`} className="mt-1 text-teal-700 underline hover:text-teal-900">
              View Property Details
            </Link>
          </div>
        )}
      </article>
    </div>
  );
}
