import { notFound } from "next/navigation";
import { PageShell } from "@/components/site";
import { HotelDetailSections } from "@/components/HotelDetailSections";
import { getHotelBySlug, getHotelRoomsByHotelSlug } from "@/lib/coreMirror";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const hotel = getHotelBySlug(slug);
  if (!hotel) notFound();
  const rooms = getHotelRoomsByHotelSlug(slug);
  return <PageShell><HotelDetailSections hotel={hotel} rooms={rooms} activeMode="monthly_rent" /></PageShell>;
}
