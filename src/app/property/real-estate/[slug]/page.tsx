import { notFound } from "next/navigation";
import { PropertyDetailsCanonicalSections } from "@/components/PropertyDetailsCanonicalSections";
import { getRealEstatePropertyForCanonicalPage } from "@/lib/coreMirrorRealEstateBridge";
import type { DealMode } from "@/lib/coreMirrorPropertyMock";

export default async function RealEstatePropertyPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ mode?: string }>;
}) {
  const { slug } = await params;
  const { mode } = await searchParams;
  const property = getRealEstatePropertyForCanonicalPage(slug);
  if (!property) notFound();

  const activeMode = mode === "sale" || mode === "monthly_rent" || mode === "short_term_rent" ? (mode as DealMode) : undefined;

  return (
    <div className="min-h-screen bg-[#f3f5f8]">
      <PropertyDetailsCanonicalSections property={property} activeMode={activeMode} />
    </div>
  );
}
