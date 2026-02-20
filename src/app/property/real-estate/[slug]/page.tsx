import { notFound } from "next/navigation";
import { PageShell } from "@/components/site";
import { PropertyDetailSections } from "@/components/PropertyDetailSections";
import { getPropertyBySlug, coreMirrorProperties } from "@/lib/coreMirror";

export function generateStaticParams() {
  return coreMirrorProperties.filter((p) => p.type === "real-estate").map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const property = getPropertyBySlug(params.slug);
  if (!property) return { title: "Property Not Found" };
  return { title: `${property.title} - Real Estate | ClickyTour`, description: property.shortDescription };
}

export default function Page({ params }: { params: { slug: string } }) {
  const property = getPropertyBySlug(params.slug);
  if (!property) notFound();
  return <PageShell><PropertyDetailSections property={property} activeMode="sale" /></PageShell>;
}
