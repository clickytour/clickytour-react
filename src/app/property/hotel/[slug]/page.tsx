import { notFound } from "next/navigation";
import { PageShell } from "@/components/site";
import { HotelDetailSections } from "@/components/HotelDetailSections";
import { getHotelBySlug, getHotelRoomsByHotelSlug, coreMirrorHotels } from "@/lib/coreMirror";

export function generateStaticParams() {
  return coreMirrorHotels.map((h) => ({ slug: h.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const hotel = getHotelBySlug(params.slug);
  if (!hotel) return { title: "Hotel Not Found" };
  return { title: `${hotel.title} | ClickyTour`, description: hotel.shortSummary };
}

export default function Page({ params }: { params: { slug: string } }) {
  const hotel = getHotelBySlug(params.slug);
  if (!hotel) notFound();
  const rooms = getHotelRoomsByHotelSlug(params.slug);
  return <PageShell><HotelDetailSections hotel={hotel} rooms={rooms} activeMode="short_term_rent" /></PageShell>;
}
