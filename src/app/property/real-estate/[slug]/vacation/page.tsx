import { notFound } from "next/navigation";
import { PageShell } from "@/components/site";
import { PropertyDetailSections } from "@/components/PropertyDetailSections";
import { getPropertyBySlug } from "@/lib/coreMirror";

export default function Page({ params }: { params: { slug: string } }) {
  const property = getPropertyBySlug(params.slug);
  if (!property) notFound();
  return <PageShell><PropertyDetailSections property={property} activeMode="short_term_rent" /></PageShell>;
}
