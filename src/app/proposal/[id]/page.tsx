import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProposalById } from "@/lib/proposalMockData";
import { getVilla4youProposalById } from "@/lib/villa4youProposalBridge";
import { ModernTemplate } from "@/components/pickedfor/templates/ModernTemplate";
import { DocumentTemplate } from "@/components/pickedfor/templates/DocumentTemplate";
import { MagazineTemplate } from "@/components/pickedfor/templates/MagazineTemplate";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://staging.villa4you.gr";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const proposal = getVilla4youProposalById(id) ?? getProposalById(id);

  if (!proposal) {
    return { title: "Proposal Not Found | Villa4You" };
  }

  return {
    title: `${proposal.title} | Proposal | Villa4You`,
    description: proposal.subtitle || `View proposal: ${proposal.title}`,
    alternates: {
      canonical: `${baseUrl}/proposal/${id}`,
    },
  };
}

export default async function ProposalPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ mode?: string; template?: string }>;
}) {
  const { id } = await params;
  const sp = await searchParams;

  const proposal = getVilla4youProposalById(id) ?? getProposalById(id);

  if (!proposal) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-400 mb-2">404</h1>
          <p className="text-gray-500">Proposal not found.</p>
          <a href="/proposal" className="mt-4 inline-block text-blue-600 hover:underline text-sm">
            ← Back
          </a>
        </div>
      </div>
    );
  }

  // Villa4you proposals are ALWAYS brand mode
  const isVilla4you = id.startsWith("v4y-");
  const modeOverride = sp.mode as "brand" | "nologo" | null;
  const mode = isVilla4you ? "brand" : (modeOverride ?? proposal.mode);
  const template = (sp.template ?? "modern") as "modern" | "document" | "magazine";

  switch (template) {
    case "document":
      return <DocumentTemplate proposal={proposal} mode={mode} />;
    case "magazine":
      return <MagazineTemplate proposal={proposal} mode={mode} />;
    default:
      return <ModernTemplate proposal={proposal} mode={mode} />;
  }
}
