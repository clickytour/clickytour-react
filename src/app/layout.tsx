import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CookieConsent } from "@/components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Villa4you",
  description: "Villa4you offers curated vacation rentals, hotels, real estate, and services across Greece.",
  openGraph: {
    title: "Villa4you",
    description: "Discover curated vacation rentals, hotels, real estate, and local services with Villa4you.",
    type: "website",
    locale: "en_US",
    siteName: "Villa4you",
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa4you",
    description: "Discover curated vacation rentals, hotels, real estate, and local services with Villa4you.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hdrs = await headers();
  const host = hdrs.get('host') || '';
  const isPickedforHost =
    host.includes('pickedfor.com') || host.includes('pickedfor.localhost');
  const isPF = isPickedforHost || hdrs.get('x-pickedfor') === '1';

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen bg-[#f3f5f8] text-slate-900">
          {!isPF && <SiteHeader />}
          <main>{children}</main>
          {!isPF && <SiteFooter />}
          {!isPF && <CookieConsent />}
        </div>
      </body>
    </html>
  );
}
