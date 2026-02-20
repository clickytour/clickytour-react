import { notFound } from "next/navigation";
import { PageShell } from "@/components/site";
import { HotelRoomDetailSections } from "@/components/HotelRoomDetailSections";
import { getHotelRoomBySlug, coreMirrorHotelRooms } from "@/lib/coreMirror";

export function generateStaticParams() {
  return coreMirrorHotelRooms.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const room = getHotelRoomBySlug(params.slug);
  if (!room) return { title: "Room Not Found" };
  return { title: `${room.title} | ClickyTour`, description: room.shortSummary };
}

export default function Page({ params }: { params: { slug: string } }) {
  const room = getHotelRoomBySlug(params.slug);
  if (!room) notFound();
  return <PageShell><HotelRoomDetailSections room={room} /></PageShell>;
}
