import { notFound } from "next/navigation";
import { PageShell } from "@/components/site";
import { PropertyDetailSections } from "@/components/PropertyDetailSections";
import { getPropertyBySlug, coreMirrorProperties } from "@/lib/coreMirror";

export function generateStaticParams() {
  return coreMirrorProperties.filter((p) => p.type === "vacation").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return { title: "Property Not Found" };
  return { title: `${property.title} | ClickyTour`, description: property.shortDescription };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();
  return <PageShell><PropertyDetailSections property={property} activeMode="short_term_rent" /></PageShell>;
}
