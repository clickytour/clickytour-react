import { notFound } from "next/navigation";
import { PageShell } from "@/components/site";
import { PropertyDetailSections } from "@/components/PropertyDetailSections";
import { getPropertyBySlug } from "@/lib/coreMirror";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();
  return <PageShell><PropertyDetailSections property={property} activeMode="short_term_rent" /></PageShell>;
}
