export function canAccessQa(): boolean {
  const isDev = process.env.NODE_ENV === "development";
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "").toLowerCase();
  const isStaging = siteUrl.includes("staging") || siteUrl.includes("vercel.app") || siteUrl.includes("localhost");

  return isDev || isStaging;
}
