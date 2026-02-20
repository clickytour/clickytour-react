import { notFound } from "next/navigation";
import { PageShell } from "@/components/site";
import { PmcProfileSections } from "@/components/PmcProfileSections";
import { getPmcBySlug, coreMirrorPmcs } from "@/lib/coreMirror";

export function generateStaticParams() {
  return coreMirrorPmcs.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const pmc = getPmcBySlug(params.slug);
  if (!pmc) return { title: "PMC Not Found" };
  return { title: `${pmc.companyName} | ClickyTour`, description: pmc.description?.slice(0, 160) ?? "" };
}

export default function Page({ params }: { params: { slug: string } }) {
  const pmc = getPmcBySlug(params.slug);
  if (!pmc) notFound();
  return <PageShell><PmcProfileSections pmc={pmc} /></PageShell>;
}
