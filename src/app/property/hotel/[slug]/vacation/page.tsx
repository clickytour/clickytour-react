import { notFound } from "next/navigation";
import { PageShell } from "@/components/site";
import { HotelDetailSections } from "@/components/HotelDetailSections";
import { getHotelBySlug, getHotelRoomsByHotelSlug } from "@/lib/coreMirror";

export default function Page({ params }: { params: { slug: string } }) {
  const hotel = getHotelBySlug(params.slug);
  if (!hotel) notFound();
  const rooms = getHotelRoomsByHotelSlug(params.slug);
  return <PageShell><HotelDetailSections hotel={hotel} rooms={rooms} activeMode="short_term_rent" /></PageShell>;
}
