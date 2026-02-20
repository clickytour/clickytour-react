import { notFound } from "next/navigation";
import { PageShell } from "@/components/site";
import { PmcProfileSections } from "@/components/PmcProfileSections";
import { getPmcBySlug, coreMirrorPmcs } from "@/lib/coreMirror";

export function generateStaticParams() {
  return coreMirrorPmcs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pmc = getPmcBySlug(slug);
  if (!pmc) return { title: "PMC Not Found" };
  return { title: `${pmc.companyName} | ClickyTour`, description: pmc.description?.slice(0, 160) ?? "" };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pmc = getPmcBySlug(slug);
  if (!pmc) notFound();
  return <PageShell><PmcProfileSections pmc={pmc} /></PageShell>;
}
