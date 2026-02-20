import { notFound } from "next/navigation";
import { PageShell } from "@/components/site";
import { ServiceDetailSections } from "@/components/ServiceDetailSections";
import { getServiceBySlug, coreMirrorServices } from "@/lib/coreMirror";

export function generateStaticParams() {
  return coreMirrorServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };
  return { title: `${service.businessName} | ClickyTour`, description: service.shortDescription };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <PageShell><ServiceDetailSections service={service} /></PageShell>;
}
