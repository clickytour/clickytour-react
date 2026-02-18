// PickedFor.com Mock Data for Proposal Templates

export interface ListingFeature {
  label: string;
  value: string;
  icon?: string;
}

export interface Listing {
  id: string;
  slug: string;
  type: 'vacation' | 'transfer' | 'boat' | 'real-estate';
  title: string;
  description: string;
  photos: string[];
  features: ListingFeature[];
  price: string;
  priceNote?: string;
  location?: string;
  availability: 'available' | 'unavailable' | 'new-match';
  rating: number;
  reviewCount: number;
  originalMatch: boolean;
}

export interface Partner {
  id: string;
  name: string;
  logo?: string;
  accentColor: string;
  secondaryColor: string;
  email: string;
  phone: string;
  website?: string;
}

export interface ProposalCriteria {
  type: string;
  location: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  bedrooms: number;
}

export interface Proposal {
  id: string;
  partner: Partner;
  listings: Listing[];
  criteria: ProposalCriteria;
  greeting: string;
  status: 'active' | 'booked' | 'archived';
  createdAt: string;
}

export const samplePartner: Partner = {
  id: 'partner-luxury-gr',
  name: 'Luxury Villas GR',
  logo: 'https://placehold.co/200x60/1e3a5f/d4af37?text=LuxuryVillas+GR&font=playfair-display',
  accentColor: '#1e3a5f',
  secondaryColor: '#d4af37',
  email: 'info@luxuryvillasgr.com',
  phone: '+30 210 123 4567',
  website: 'https://luxuryvillasgr.com',
};

export const listings: Listing[] = [
  {
    id: 'villa-marina',
    slug: 'villa-marina-santorini',
    type: 'vacation',
    title: 'Villa Marina — Santorini Caldera View',
    description:
      'Perched on the edge of the Santorini caldera, Villa Marina offers breathtaking sunset views, an infinity pool, and refined Cycladic architecture. Enjoy 4 spacious bedrooms, a gourmet kitchen, and direct access to a private terrace overlooking the Aegean Sea. Perfect for families or groups seeking an unforgettable island getaway.',
    photos: [
      'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop',
    ],
    features: [
      { label: 'Bedrooms', value: '4' },
      { label: 'Guests', value: 'Up to 8' },
      { label: 'Pool', value: 'Infinity' },
      { label: 'View', value: 'Caldera / Sea' },
      { label: 'WiFi', value: 'High-speed' },
      { label: 'Parking', value: 'Private' },
    ],
    price: '€450',
    priceNote: 'per night',
    location: 'Oia, Santorini',
    availability: 'available',
    rating: 4.9,
    reviewCount: 127,
    originalMatch: true,
  },
  {
    id: 'villa-oceana',
    slug: 'villa-oceana-mykonos',
    type: 'vacation',
    title: 'Villa Oceana — Mykonos Beachfront',
    description:
      'A contemporary beachfront retreat on Mykonos, Villa Oceana combines minimalist luxury with island charm. Three elegant bedrooms open onto a private deck with an outdoor jacuzzi and panoramic sea views. Steps from Elia Beach, this villa is ideal for couples or small groups looking for style and serenity.',
    photos: [
      'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=500&fit=crop',
    ],
    features: [
      { label: 'Bedrooms', value: '3' },
      { label: 'Guests', value: 'Up to 6' },
      { label: 'Pool', value: 'Jacuzzi' },
      { label: 'Beach', value: 'Beachfront' },
      { label: 'WiFi', value: 'High-speed' },
      { label: 'A/C', value: 'Throughout' },
    ],
    price: '€380',
    priceNote: 'per night',
    location: 'Elia Beach, Mykonos',
    availability: 'available',
    rating: 4.8,
    reviewCount: 89,
    originalMatch: true,
  },
  {
    id: 'transfer-athens',
    slug: 'athens-airport-transfer',
    type: 'transfer',
    title: 'Athens Airport Private Transfer',
    description:
      'Door-to-door private transfer from Athens International Airport (ATH) to any destination in the Attica region. Professional English-speaking driver, meet-and-greet at arrivals, complimentary water, and child seats on request. Mercedes E-Class or V-Class available.',
    photos: [
      'https://images.unsplash.com/photo-1449965408869-ebd3fee30710?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&h=500&fit=crop',
    ],
    features: [
      { label: 'Vehicle', value: 'Mercedes E/V-Class' },
      { label: 'Passengers', value: 'Up to 7' },
      { label: 'Meet & Greet', value: 'Included' },
      { label: 'Child Seat', value: 'On request' },
      { label: 'WiFi', value: 'In-car' },
      { label: 'Wait Time', value: '60 min free' },
    ],
    price: '€65',
    priceNote: 'one way',
    location: 'Athens, Greece',
    availability: 'available',
    rating: 4.7,
    reviewCount: 312,
    originalMatch: true,
  },
  {
    id: 'boat-poseidon',
    slug: 'poseidon-day-cruise',
    type: 'boat',
    title: 'Poseidon Day Cruise — Cyclades Island Hopping',
    description:
      'Explore the Cyclades aboard a 42ft sailing yacht with skipper. Visit hidden coves, swim in crystal waters, and enjoy a freshly prepared Greek lunch on deck. Full-day cruise departing from Paros or Naxos with flexible itinerary. Snorkeling gear, paddleboard, and drinks included.',
    photos: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&h=500&fit=crop',
    ],
    features: [
      { label: 'Vessel', value: '42ft Sailing Yacht' },
      { label: 'Capacity', value: 'Up to 10' },
      { label: 'Duration', value: 'Full day (8h)' },
      { label: 'Skipper', value: 'Included' },
      { label: 'Lunch', value: 'Greek buffet' },
      { label: 'Gear', value: 'Snorkel + SUP' },
    ],
    price: '€180',
    priceNote: 'per person',
    location: 'Paros / Naxos',
    availability: 'available',
    rating: 4.9,
    reviewCount: 56,
    originalMatch: true,
  },
  {
    id: 'villa-sunset',
    slug: 'villa-sunset-santorini',
    type: 'vacation',
    title: 'Villa Sunset — Fira Cliffside Retreat',
    description:
      'Once one of the most sought-after properties in Fira, Villa Sunset featured 3 bedrooms with panoramic caldera views, a heated plunge pool, and authentic stone-carved interiors. This listing has been booked by another guest for your requested dates.',
    photos: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=500&fit=crop',
    ],
    features: [
      { label: 'Bedrooms', value: '3' },
      { label: 'Guests', value: 'Up to 6' },
      { label: 'Pool', value: 'Plunge pool' },
      { label: 'View', value: 'Caldera' },
      { label: 'WiFi', value: 'High-speed' },
      { label: 'Style', value: 'Cave house' },
    ],
    price: '€410',
    priceNote: 'per night',
    location: 'Fira, Santorini',
    availability: 'unavailable',
    rating: 4.8,
    reviewCount: 203,
    originalMatch: true,
  },
  {
    id: 'villa-azure',
    slug: 'villa-azure-santorini',
    type: 'vacation',
    title: 'Villa Azure — New Listing in Imerovigli',
    description:
      'Just listed! A stunning new addition to our portfolio, Villa Azure sits at the highest point of Imerovigli with unobstructed 270° views of the caldera and volcano. Four beautifully appointed bedrooms, a private infinity pool, chef\'s kitchen, and direct access to the famous Skaros Rock trail. An exceptional find for discerning travelers.',
    photos: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&h=500&fit=crop',
    ],
    features: [
      { label: 'Bedrooms', value: '4' },
      { label: 'Guests', value: 'Up to 8' },
      { label: 'Pool', value: 'Infinity' },
      { label: 'View', value: '270° Caldera' },
      { label: 'Kitchen', value: "Chef's" },
      { label: 'Trail Access', value: 'Skaros Rock' },
    ],
    price: '€520',
    priceNote: 'per night',
    location: 'Imerovigli, Santorini',
    availability: 'new-match',
    rating: 5.0,
    reviewCount: 3,
    originalMatch: false,
  },
];

export const sampleProposal: Proposal = {
  id: 'demo-proposal',
  partner: samplePartner,
  listings,
  criteria: {
    type: 'vacation',
    location: 'Santorini & Cyclades',
    checkIn: '2026-07-15',
    checkOut: '2026-07-22',
    guests: 4,
    bedrooms: 3,
  },
  greeting: "Here's what we picked for you",
  status: 'active',
  createdAt: '2026-02-18T15:00:00Z',
};

export function getListingById(id: string): Listing | undefined {
  return listings.find((l) => l.id === id);
}

export function getListingBySlug(slug: string): Listing | undefined {
  return listings.find((l) => l.slug === slug);
}
