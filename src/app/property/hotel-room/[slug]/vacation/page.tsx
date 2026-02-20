import { notFound } from "next/navigation";
import { PageShell } from "@/components/site";
import { HotelRoomDetailSections } from "@/components/HotelRoomDetailSections";
import { getHotelRoomBySlug } from "@/lib/coreMirror";

export default function Page({ params }: { params: { slug: string } }) {
  const room = getHotelRoomBySlug(params.slug);
  if (!room) notFound();
  return <PageShell><HotelRoomDetailSections room={room} activeMode="short_term_rent" /></PageShell>;
}
