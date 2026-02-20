import { notFound } from "next/navigation";
import { PageShell } from "@/components/site";
import { AgentProfileSections } from "@/components/AgentProfileSections";
import { getAgentBySlug, coreMirrorAgents } from "@/lib/coreMirror";

export function generateStaticParams() {
  return coreMirrorAgents.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);
  if (!agent) return { title: "Agent Not Found" };
  return { title: `${agent.name} - Travel Agent | ClickyTour`, description: agent.bio?.slice(0, 160) ?? "" };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);
  if (!agent) notFound();
  return <PageShell><AgentProfileSections agent={agent} /></PageShell>;
}
