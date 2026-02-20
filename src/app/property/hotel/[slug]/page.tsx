import { notFound } from "next/navigation";
import { PageShell } from "@/components/site";
import { HotelDetailSections } from "@/components/HotelDetailSections";
import { getHotelBySlug, getHotelRoomsByHotelSlug, coreMirrorHotels } from "@/lib/coreMirror";

export function generateStaticParams() {
  return coreMirrorHotels.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const hotel = getHotelBySlug(slug);
  if (!hotel) return { title: "Hotel Not Found" };
  return { title: `${hotel.title} | ClickyTour`, description: hotel.shortSummary };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const hotel = getHotelBySlug(slug);
  if (!hotel) notFound();
  const rooms = getHotelRoomsByHotelSlug(slug);
  return <PageShell><HotelDetailSections hotel={hotel} rooms={rooms} activeMode="short_term_rent" /></PageShell>;
}
