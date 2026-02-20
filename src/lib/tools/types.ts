export type ToolCategory = "creation" | "optimization" | "distribution" | "insights" | "system" | "calculator";
export type ToolStatus = "active" | "preview" | "comingSoon" | "deprecated";
export type ToolAccessState = "open" | "tryDemo" | "preview" | "locked" | "comingSoon";
export type UserRole = "owner" | "pmc" | "agent" | "serviceProvider" | "guest" | "all";

export interface Tool {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: ToolCategory;
  status: ToolStatus;
  roles: UserRole[];
  primaryRole?: UserRole;
  icon: string;
  color: string;
  hasDemo: boolean;
  demoMode?: "sandbox" | "readOnly" | "guidedTour";
  features: string[];
  useCases: { role: string; cases: string[] }[];
  inputs?: string[];
  outputs?: string[];
  integrations?: string[];
  faq?: { q: string; a: string }[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface ToolCardProps {
  tool: Tool;
  accessState?: ToolAccessState;
}
