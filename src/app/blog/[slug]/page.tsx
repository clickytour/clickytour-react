import { notFound } from "next/navigation";
import { PageShell } from "@/components/site";
import { BlogPostSections } from "@/components/BlogPostSections";
import { getBlogPostBySlug, coreMirrorBlogPosts } from "@/lib/coreMirror";

export function generateStaticParams() {
  return coreMirrorBlogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return { title: `${post.title} | ClickyTour Blog`, description: post.excerpt };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();
  return <PageShell><BlogPostSections post={post} /></PageShell>;
}
