'use client';

import { Listing, Partner, ProposalCriteria } from '@/data/mock-proposals';
import { ListingCard } from './ListingCard';

interface Props {
  listings: Listing[];
  proposalId: string;
  criteria: ProposalCriteria;
  partner: Partner;
  branded: boolean;
  accentColor?: string;
  variant: 'modern' | 'document' | 'magazine';
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
}

export function CriteriaBanner({ criteria, variant }: { criteria: ProposalCriteria; variant: string }) {
  const isDark = variant === 'magazine';
  return (
    <div className={`rounded-lg px-4 py-3 text-center text-sm ${isDark ? 'bg-white/5 text-white/80' : 'bg-white/80 text-gray-600 shadow-sm'}`}>
      <span className="font-medium">📍 {criteria.location}</span>
      <span className={`mx-2 ${isDark ? 'text-white/30' : 'text-gray-300'}`}>·</span>
      <span>{formatDate(criteria.checkIn)} – {formatDate(criteria.checkOut)}, 2026</span>
      <span className={`mx-2 ${isDark ? 'text-white/30' : 'text-gray-300'}`}>·</span>
      <span>{criteria.guests} guests</span>
      <span className={`mx-2 ${isDark ? 'text-white/30' : 'text-gray-300'}`}>·</span>
      <span>{criteria.bedrooms}+ bedrooms</span>
    </div>
  );
}

export function UpdateBanner({ variant }: { variant: string }) {
  const isDark = variant === 'magazine';
  return (
    <div className={`mt-3 rounded-lg px-4 py-2 text-center text-xs ${isDark ? 'bg-blue-500/10 text-blue-300' : 'bg-blue-50 text-blue-600'}`}>
      💡 Prices and availability updated just now
    </div>
  );
}

export function ListingSummary({ listings, variant }: { listings: Listing[]; variant: string }) {
  const available = listings.filter((l) => l.availability === 'available').length;
  const unavailable = listings.filter((l) => l.availability === 'unavailable').length;
  const newMatch = listings.filter((l) => l.availability === 'new-match').length;
  const isDark = variant === 'magazine';

  return (
    <p className={`mt-3 text-center text-sm ${isDark ? 'text-white/50' : 'text-gray-400'}`}>
      {listings.length} options found
      <span className={`mx-1.5 ${isDark ? 'text-white/20' : 'text-gray-300'}`}>·</span>
      <span className="text-emerald-600">{available} available</span>
      {unavailable > 0 && (
        <>
          <span className={`mx-1.5 ${isDark ? 'text-white/20' : 'text-gray-300'}`}>·</span>
          <span className="text-red-500">{unavailable} no longer available</span>
        </>
      )}
      {newMatch > 0 && (
        <>
          <span className={`mx-1.5 ${isDark ? 'text-white/20' : 'text-gray-300'}`}>·</span>
          <span className="text-blue-500">{newMatch} new match</span>
        </>
      )}
    </p>
  );
}

export function GroupedListings({
  listings,
  proposalId,
  accentColor,
  variant,
}: {
  listings: Listing[];
  proposalId: string;
  accentColor?: string;
  variant: 'modern' | 'document' | 'magazine';
}) {
  const available = listings.filter((l) => l.availability === 'available' && l.originalMatch);
  const unavailable = listings.filter((l) => l.availability === 'unavailable');
  const newMatches = listings.filter((l) => l.availability === 'new-match');
  const isDark = variant === 'magazine';

  const sectionTitle = (text: string, emoji: string) => (
    <h2 className={`mb-4 mt-10 text-lg font-semibold ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
      {emoji} {text}
    </h2>
  );

  const gridClass = variant === 'document'
    ? 'flex flex-col gap-6'
    : 'grid gap-6 sm:grid-cols-2';

  return (
    <>
      {available.length > 0 && (
        <>
          {sectionTitle('Your Selected Options', '✨')}
          <div className={gridClass}>
            {available.map((l) => (
              <ListingCard key={l.id} listing={l} proposalId={proposalId} accentColor={accentColor} variant={variant} />
            ))}
          </div>
        </>
      )}
      {unavailable.length > 0 && (
        <>
          {sectionTitle('No Longer Available', '⏳')}
          <div className={gridClass}>
            {unavailable.map((l) => (
              <ListingCard key={l.id} listing={l} proposalId={proposalId} accentColor={accentColor} variant={variant} />
            ))}
          </div>
        </>
      )}
      {newMatches.length > 0 && (
        <>
          {sectionTitle('New Matches We Found', '🆕')}
          <div className={gridClass}>
            {newMatches.map((l) => (
              <ListingCard key={l.id} listing={l} proposalId={proposalId} accentColor={accentColor} variant={variant} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export function StickyBottomCTA({ partner, branded, accentColor }: { partner: Partner; branded: boolean; accentColor: string }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <p className="text-sm font-medium text-gray-700">
          {branded ? `Ready to book? Contact ${partner.name}` : 'Ready to book? Get in touch with your travel specialist'}
        </p>
        <div className="flex gap-2">
          {branded && (
            <a href={`tel:${partner.phone}`} className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
              📞 Call
            </a>
          )}
          <a
            href={branded ? `mailto:${partner.email}` : '#inquire'}
            className="rounded-lg px-4 py-1.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: accentColor }}
          >
            {branded ? '✉️ Email' : '✉️ Inquire'}
          </a>
        </div>
      </div>
    </div>
  );
}
