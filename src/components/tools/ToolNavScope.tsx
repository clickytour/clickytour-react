"use client";

import { useEffect } from "react";
import { useNavScopeOverride } from "@/components/site";

const ROLE_TO_SCOPE: Record<string, string> = {
  owner: "owners",
  pmc: "pmCompanies",
  agent: "agents",
  serviceProvider: "serviceProviders",
  guest: "guests",
  all: "explore",
};

export default function ToolNavScope({ primaryRole }: { primaryRole: string }) {
  const { setOverride } = useNavScopeOverride();

  useEffect(() => {
    const scope = ROLE_TO_SCOPE[primaryRole] || "explore";
    setOverride(scope);
    return () => setOverride(null);
  }, [primaryRole, setOverride]);

  return null;
}
