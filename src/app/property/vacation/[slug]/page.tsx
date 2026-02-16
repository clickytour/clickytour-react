import { notFound } from "next/navigation";
import { CanonicalEntityDetailsSections } from "@/components/CanonicalEntityDetailsSections";
import { toVacationDetailsVM } from "@/lib/coreMirrorAdapters";
import { getCoreMirrorPropertyBySlug } from "@/lib/coreMirrorPropertyMock";

export default async function VacationPropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = getCoreMirrorPropertyBySlug(slug);
  if (!property) notFound();

  return (
    <div className="min-h-screen bg-[#f3f5f8]">
      <CanonicalEntityDetailsSections vm={toVacationDetailsVM(property)} />
    </div>
  );
}
