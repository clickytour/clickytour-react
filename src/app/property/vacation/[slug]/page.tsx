import { notFound } from "next/navigation";
import { PageShell } from "@/components/site";
import { PropertyDetailSections } from "@/components/PropertyDetailSections";
import { getPropertyBySlug, coreMirrorProperties } from "@/lib/coreMirror";

export function generateStaticParams() {
  return coreMirrorProperties.filter((p) => p.type === "vacation").map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const property = getPropertyBySlug(params.slug);
  if (!property) return { title: "Property Not Found" };
  return { title: `${property.title} | ClickyTour`, description: property.shortDescription };
}

export default function Page({ params }: { params: { slug: string } }) {
  const property = getPropertyBySlug(params.slug);
  if (!property) notFound();
  return <PageShell><PropertyDetailSections property={property} activeMode="short_term_rent" /></PageShell>;
}
