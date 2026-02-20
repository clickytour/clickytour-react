import { notFound } from "next/navigation";
import { PageShell } from "@/components/site";
import { ServiceDetailSections } from "@/components/ServiceDetailSections";
import { getServiceBySlug, coreMirrorServices } from "@/lib/coreMirror";

export function generateStaticParams() {
  return coreMirrorServices.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Service Not Found" };
  return { title: `${service.businessName} | ClickyTour`, description: service.shortDescription };
}

export default function Page({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();
  return <PageShell><ServiceDetailSections service={service} /></PageShell>;
}
