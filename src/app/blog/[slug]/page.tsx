import { notFound } from "next/navigation";
import { PageShell } from "@/components/site";
import { BlogPostSections } from "@/components/BlogPostSections";
import { getBlogPostBySlug, coreMirrorBlogPosts } from "@/lib/coreMirror";

export function generateStaticParams() {
  return coreMirrorBlogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };
  return { title: `${post.title} | ClickyTour Blog`, description: post.excerpt };
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();
  return <PageShell><BlogPostSections post={post} /></PageShell>;
}
