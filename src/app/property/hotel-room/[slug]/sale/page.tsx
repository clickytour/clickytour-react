import { notFound } from "next/navigation";
import { PageShell } from "@/components/site";
import { HotelRoomDetailSections } from "@/components/HotelRoomDetailSections";
import { getHotelRoomBySlug } from "@/lib/coreMirror";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const room = getHotelRoomBySlug(slug);
  if (!room) notFound();
  return <PageShell><HotelRoomDetailSections room={room} activeMode="sale" /></PageShell>;
}
