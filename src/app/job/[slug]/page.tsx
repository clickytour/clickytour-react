import { notFound } from "next/navigation";
import { PageShell } from "@/components/site";
import { JobDetailSections } from "@/components/JobDetailSections";
import { getJobBySlug, coreMirrorJobs } from "@/lib/coreMirror";

export function generateStaticParams() {
  return coreMirrorJobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return { title: "Job Not Found" };
  return { title: `${job.title} at ${job.companyName} | ClickyTour Jobs`, description: job.description.slice(0, 160) };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();
  return <PageShell><JobDetailSections job={job} /></PageShell>;
}
