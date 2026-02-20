import { notFound } from "next/navigation";
import { PageShell } from "@/components/site";
import { HotelRoomDetailSections } from "@/components/HotelRoomDetailSections";
import { getHotelRoomBySlug, coreMirrorHotelRooms } from "@/lib/coreMirror";

export function generateStaticParams() {
  return coreMirrorHotelRooms.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const room = getHotelRoomBySlug(slug);
  if (!room) return { title: "Room Not Found" };
  return { title: `${room.title} | ClickyTour`, description: room.shortSummary };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const room = getHotelRoomBySlug(slug);
  if (!room) notFound();
  return <PageShell><HotelRoomDetailSections room={room} /></PageShell>;
}
