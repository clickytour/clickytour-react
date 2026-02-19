import { redirect } from "next/navigation";
import { canAccessQa } from "@/lib/qaAccess";

export default async function ProposalIndex({
  searchParams,
}: {
  searchParams: Promise<{ qa?: string }>;
}) {
  const params = await searchParams;

  if (params.qa === "1") {
    redirect("/qa");
  }

  if (!canAccessQa()) {
    redirect("/");
  }

  redirect("/proposal/demo-brand-individual");
}
