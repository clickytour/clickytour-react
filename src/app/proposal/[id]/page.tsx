"use client";

import { useParams, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { getProposalById } from "@/lib/proposalMockData";
import { getVilla4youProposalById } from "@/lib/villa4youProposalBridge";
import { ModernTemplate } from "@/components/pickedfor/templates/ModernTemplate";
import { DocumentTemplate } from "@/components/pickedfor/templates/DocumentTemplate";
import { MagazineTemplate } from "@/components/pickedfor/templates/MagazineTemplate";

function ProposalContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const id = params.id as string;

  // Try villa4you proposals first (Core Mirror data), then fall back to pickedfor demos
  const proposal = getVilla4youProposalById(id) ?? getProposalById(id);
  const [fallbackHref, setFallbackHref] = useState("/proposal");

  useEffect(() => {
    if (window.location.hostname.includes("pickedfor")) {
      setFallbackHref("/");
    }
  }, []);

  if (!proposal) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-400 mb-2">404</h1>
          <p className="text-gray-500">Proposal not found.</p>
          <a href={fallbackHref} className="mt-4 inline-block text-blue-600 hover:underline text-sm">← Back</a>
        </div>
      </div>
    );
  }

  // Villa4you proposals are ALWAYS brand mode
  const isVilla4you = id.startsWith("v4y-");
  const modeOverride = searchParams.get("mode") as "brand" | "nologo" | null;
  const mode = isVilla4you ? "brand" : (modeOverride ?? proposal.mode);
  const template = (searchParams.get("template") ?? "modern") as "modern" | "document" | "magazine";

  switch (template) {
    case "document":
      return <DocumentTemplate proposal={proposal} mode={mode} />;
    case "magazine":
      return <MagazineTemplate proposal={proposal} mode={mode} />;
    default:
      return <ModernTemplate proposal={proposal} mode={mode} />;
  }
}

export default function ProposalPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading…</div>}>
      <ProposalContent />
    </Suspense>
  );
}
