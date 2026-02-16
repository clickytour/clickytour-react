import { notFound } from "next/navigation";
import { CanonicalEntityDetailsSections } from "@/components/CanonicalEntityDetailsSections";
import { toRealEstateDetailsVM } from "@/lib/coreMirrorAdapters";
import { getCoreMirrorRealEstateBySlug } from "@/lib/coreMirrorRealEstateMock";

export default async function RealEstatePropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = getCoreMirrorRealEstateBySlug(slug);
  if (!property) notFound();

  return (
    <div className="min-h-screen bg-[#f3f5f8]">
      <CanonicalEntityDetailsSections vm={toRealEstateDetailsVM(property)} />
    </div>
  );
}
