import { notFound } from "next/navigation";
import { PageShell } from "@/components/site";
import { PropertyDetailSections } from "@/components/PropertyDetailSections";
import { getPropertyBySlug, coreMirrorProperties } from "@/lib/coreMirror";

export function generateStaticParams() {
  return coreMirrorProperties.filter((p) => p.type === "real-estate").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return { title: "Property Not Found" };
  return { title: `${property.title} - Real Estate | ClickyTour`, description: property.shortDescription };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();
  return <PageShell><PropertyDetailSections property={property} activeMode="sale" /></PageShell>;
}
