// PickedFor Detail Page Mock Data

export interface DetailFeature {
  label: string;
  value: string;
}

export interface DetailAmenity {
  name: string;
  icon?: string;
}

export interface HotelRoom {
  id: string;
  slug: string;
  name: string;
  image: string;
  beds: string;
  maxGuests: number;
  sqm: number;
  pricePerNight: number;
  features: string[];
  available: boolean;
}

export interface ListingDetail {
  id: string;
  slug: string;
  type: 'vacation' | 'hotel' | 'hotel-room' | 'real-estate' | 'service';
  name: string;
  description: string;
  longDescription?: string;
  images: string[];
  videoUrl?: string;
  videoUrlGeneric?: string;
  tour3dUrl?: string;
  tour3dUrlGeneric?: string;
  region: string;
  address?: string;
  listingType: string;
  rating?: number;
  reviewCount?: number;
  features: DetailFeature[];
  amenities?: DetailAmenity[];
  // Rental
  bedrooms?: number;
  bathrooms?: number;
  maxGuests?: number;
  pricePerNight?: number;
  totalPrice?: number;
  nights?: number;
  // Real estate
  plotSize?: string;
  builtSize?: string;
  yearBuilt?: number;
  salePrice?: number;
  // Service
  duration?: string;
  servicePrice?: number;
  includes?: string[];
  // Hotel specific
  hotelStars?: number;
  rooms?: HotelRoom[];
  facilities?: string[];
  checkIn?: string;
  checkOut?: string;
}

const IMG = (id: string) => `https://images.unsplash.com/photo-${id}?w=800&h=500&fit=crop`;

export const detailListings: ListingDetail[] = [
  // ─── VACATION VILLA ───
  {
    id: 'villa-sapphire',
    slug: 'villa-sapphire',
    type: 'vacation',
    name: 'Villa Sapphire',
    description: 'Stunning seafront villa with infinity pool and panoramic Ionian views.',
    longDescription: 'Villa Sapphire is a luxurious 4-bedroom retreat perched on the cliffs of Lefkada, offering uninterrupted views across the Ionian Sea. The villa features an infinity pool that seems to merge with the horizon, a fully equipped gourmet kitchen, spacious open-plan living areas with floor-to-ceiling windows, and a private garden with direct sea access.\n\nEach bedroom is individually designed with premium linens, en-suite bathrooms, and private balconies. The master suite includes a walk-in closet and a freestanding bathtub overlooking the sea.\n\nOutdoor living is at its best here — enjoy al fresco dining on the shaded terrace, cocktails by the pool bar, or stargazing from the rooftop deck. A dedicated concierge is available to arrange boat trips, private chefs, and island excursions.',
    images: [
      IMG('1613490493576-7fde63acd811'),
      IMG('1582268611958-ebfd161ef9cf'),
      IMG('1512917774080-9991f1c4c750'),
      IMG('1564013799919-ab600027ffc6'),
      IMG('1600607687939-ce8a6c25118c'),
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    videoUrlGeneric: 'https://www.youtube.com/watch?v=generic1',
    tour3dUrl: 'https://my.matterport.com/show/?m=example',
    tour3dUrlGeneric: 'https://my.matterport.com/show/?m=generic1',
    region: 'Lefkada, Greece',
    address: 'Agios Nikitas Coast Road, Lefkada 31080',
    listingType: 'Villa',
    rating: 4.9,
    reviewCount: 127,
    bedrooms: 4,
    bathrooms: 3,
    maxGuests: 8,
    pricePerNight: 320,
    totalPrice: 2240,
    nights: 7,
    features: [
      { label: 'Bedrooms', value: '4' },
      { label: 'Bathrooms', value: '3' },
      { label: 'Max Guests', value: '8' },
      { label: 'Pool', value: 'Infinity' },
      { label: 'View', value: 'Sea / Sunset' },
      { label: 'Parking', value: 'Private (2 cars)' },
      { label: 'WiFi', value: 'High-speed fiber' },
      { label: 'A/C', value: 'All rooms' },
      { label: 'Kitchen', value: 'Fully equipped gourmet' },
      { label: 'Garden', value: 'Private, landscaped' },
    ],
    amenities: [
      { name: 'Infinity Pool' }, { name: 'Pool Bar' }, { name: 'BBQ Area' },
      { name: 'Outdoor Dining' }, { name: 'Rooftop Deck' }, { name: 'Private Beach Access' },
      { name: 'Smart TV' }, { name: 'Sonos Sound System' }, { name: 'Washing Machine' },
      { name: 'Dishwasher' }, { name: 'Coffee Machine' }, { name: 'Safe Box' },
      { name: 'Hair Dryer' }, { name: 'Iron' }, { name: 'First Aid Kit' },
    ],
  },
  {
    id: 'casa-azzurra',
    slug: 'casa-azzurra',
    type: 'vacation',
    name: 'Casa Azzurra',
    description: 'Modern hilltop retreat surrounded by olive groves.',
    images: [
      IMG('1582268611958-ebfd161ef9cf'),
      IMG('1564013799919-ab600027ffc6'),
    ],
    region: 'Lefkada, Greece',
    listingType: 'Villa',
    rating: 4.7,
    reviewCount: 89,
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 6,
    pricePerNight: 250,
    totalPrice: 1750,
    nights: 7,
    features: [
      { label: 'Bedrooms', value: '3' },
      { label: 'Bathrooms', value: '2' },
      { label: 'Max Guests', value: '6' },
      { label: 'Style', value: 'Modern hilltop retreat' },
      { label: 'Setting', value: 'Olive groves' },
    ],
  },
  {
    id: 'olive-stone',
    slug: 'olive-stone',
    type: 'vacation',
    name: 'Olive Stone House',
    description: 'Traditional stone house with private garden and BBQ area.',
    images: [
      IMG('1512917774080-9991f1c4c750'),
      IMG('1613490493576-7fde63acd811'),
    ],
    region: 'Lefkada, Greece',
    listingType: 'House',
    rating: 4.5,
    reviewCount: 56,
    bedrooms: 2,
    bathrooms: 1,
    maxGuests: 4,
    pricePerNight: 150,
    totalPrice: 1050,
    nights: 7,
    features: [
      { label: 'Bedrooms', value: '2' },
      { label: 'Bathrooms', value: '1' },
      { label: 'Max Guests', value: '4' },
      { label: 'Garden', value: 'Private' },
      { label: 'BBQ', value: 'Available' },
    ],
  },
  {
    id: 'porto-blu',
    slug: 'porto-blu',
    type: 'vacation',
    name: 'Porto Blu Apartment',
    description: 'Beachfront apartment steps from Nidri marina. This listing has been booked by another guest for your requested dates.',
    images: [
      IMG('1564013799919-ab600027ffc6'),
    ],
    region: 'Lefkada, Greece',
    listingType: 'Apartment',
    rating: 4.3,
    reviewCount: 34,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    pricePerNight: 95,
    totalPrice: 665,
    nights: 7,
    features: [
      { label: 'Bedrooms', value: '1' },
      { label: 'Bathrooms', value: '1' },
      { label: 'Max Guests', value: '2' },
      { label: 'Location', value: 'Beachfront' },
      { label: 'Nearby', value: 'Nidri marina' },
    ],
  },
  {
    id: 'villa-emerald',
    slug: 'villa-emerald',
    type: 'vacation',
    name: 'Villa Emerald',
    description: 'Just listed! Brand new luxury villa with rooftop terrace and private dock access. Stunning sunset views over the Ionian Sea.',
    images: [
      IMG('1600607687939-ce8a6c25118c'),
      IMG('1613490493576-7fde63acd811'),
    ],
    tour3dUrl: 'https://my.matterport.com/show/?m=example2',
    tour3dUrlGeneric: 'https://my.matterport.com/show/?m=generic3',
    region: 'Lefkada, Greece',
    listingType: 'Villa',
    rating: 5.0,
    reviewCount: 3,
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 6,
    pricePerNight: 290,
    totalPrice: 2030,
    nights: 7,
    features: [
      { label: 'Bedrooms', value: '3' },
      { label: 'Bathrooms', value: '2' },
      { label: 'Max Guests', value: '6' },
      { label: 'Terrace', value: 'Rooftop' },
      { label: 'Dock Access', value: 'Private' },
      { label: 'Status', value: 'New listing' },
    ],
  },
  {
    id: 'villa-odysseus',
    slug: 'villa-odysseus',
    type: 'vacation',
    name: 'Villa Odysseus',
    description: 'Grand 6-bedroom estate with tennis court.',
    images: [
      IMG('1613490493576-7fde63acd811'),
    ],
    region: 'Kefalonia, Greece',
    listingType: 'Villa',
    rating: 4.8,
    bedrooms: 6,
    bathrooms: 5,
    maxGuests: 12,
    pricePerNight: 580,
    totalPrice: 4060,
    nights: 7,
    features: [
      { label: 'Bedrooms', value: '6' },
      { label: 'Bathrooms', value: '5' },
      { label: 'Max Guests', value: '12' },
      { label: 'Estate Type', value: 'Grand' },
      { label: 'Tennis Court', value: 'Private' },
    ],
  },
  {
    id: 'seaside-retreat',
    slug: 'seaside-retreat',
    type: 'vacation',
    name: 'Seaside Retreat',
    description: 'Family-friendly villa on the beach.',
    images: [
      IMG('1582268611958-ebfd161ef9cf'),
    ],
    region: 'Kefalonia, Greece',
    listingType: 'Villa',
    rating: 4.6,
    bedrooms: 4,
    bathrooms: 3,
    maxGuests: 8,
    pricePerNight: 350,
    totalPrice: 2450,
    nights: 7,
    features: [
      { label: 'Bedrooms', value: '4' },
      { label: 'Bathrooms', value: '3' },
      { label: 'Max Guests', value: '8' },
      { label: 'Beach Access', value: 'Direct' },
      { label: 'Family Friendly', value: 'Yes' },
    ],
  },
  {
    id: 'sunset-cottage',
    slug: 'sunset-cottage',
    type: 'vacation',
    name: 'Sunset Cottage',
    description: 'Cozy cottage perfect for a small family.',
    images: [
      IMG('1512917774080-9991f1c4c750'),
    ],
    region: 'Kefalonia, Greece',
    listingType: 'Cottage',
    rating: 4.4,
    bedrooms: 2,
    bathrooms: 1,
    maxGuests: 4,
    pricePerNight: 140,
    totalPrice: 980,
    nights: 7,
    features: [
      { label: 'Bedrooms', value: '2' },
      { label: 'Bathrooms', value: '1' },
      { label: 'Max Guests', value: '4' },
      { label: 'Type', value: 'Cozy cottage' },
      { label: 'Best For', value: 'Small families' },
    ],
  },
  // ─── HOTEL ───
  {
    id: 'corfu-grand',
    slug: 'corfu-grand-hotel',
    type: 'hotel',
    name: 'Corfu Grand Resort & Spa',
    description: 'A 5-star beachfront resort offering world-class amenities, multiple dining options, and a luxury spa.',
    longDescription: 'The Corfu Grand Resort & Spa is a premier 5-star destination on the northeastern coast of Corfu, set within 20 acres of landscaped gardens overlooking the shimmering Ionian Sea. The resort combines timeless Corfiot architecture with contemporary luxury.\n\nGuests enjoy access to three swimming pools, a private sandy beach, a full-service spa with hammam and treatment rooms, two restaurants (Mediterranean and Asian fusion), three bars, a fitness center, and a kids club. The resort also offers water sports, tennis courts, and a helipad.\n\nIdeal for couples, families, and corporate retreats alike.',
    images: [
      IMG('1566073771259-6a8506099945'),
      IMG('1582719478250-c89cae4dc85b'),
      IMG('1600596542815-ffad4c1539a9'),
      IMG('1613977257363-707ba9348227'),
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    region: 'Corfu, Greece',
    address: 'Kommeno Peninsula, Corfu 49083',
    listingType: 'Hotel',
    rating: 4.8,
    reviewCount: 842,
    hotelStars: 5,
    features: [
      { label: 'Stars', value: '5 ★★★★★' },
      { label: 'Rooms', value: '180' },
      { label: 'Beach', value: 'Private sandy' },
      { label: 'Pools', value: '3 (1 indoor)' },
      { label: 'Spa', value: 'Full-service + hammam' },
      { label: 'Restaurants', value: '2' },
      { label: 'Bars', value: '3' },
      { label: 'WiFi', value: 'Free throughout' },
      { label: 'Parking', value: 'Free valet' },
      { label: 'Check-in', value: '15:00' },
    ],
    facilities: [
      'Private Beach', '3 Swimming Pools', 'Luxury Spa & Hammam',
      'Fitness Center', 'Kids Club', 'Tennis Courts',
      'Water Sports', 'Helipad', 'Business Center',
      'Concierge', 'Room Service 24/7', 'Laundry Service',
    ],
    rooms: [
      { id: 'deluxe-sea', slug: 'deluxe-sea-view', name: 'Deluxe Sea View Room', image: IMG('1566073771259-6a8506099945'), beds: '1 King or 2 Twin', maxGuests: 2, sqm: 35, pricePerNight: 180, features: ['Sea view balcony', 'Rain shower', 'Mini bar', 'Nespresso'], available: true },
      { id: 'junior-suite', slug: 'junior-suite', name: 'Junior Suite', image: IMG('1582268611958-ebfd161ef9cf'), beds: '1 King', maxGuests: 3, sqm: 50, pricePerNight: 260, features: ['Separate living area', 'Sea view terrace', 'Bathtub + shower', 'Welcome fruit basket'], available: true },
      { id: 'family-room', slug: 'family-room', name: 'Family Room', image: IMG('1512917774080-9991f1c4c750'), beds: '1 King + 2 Single', maxGuests: 4, sqm: 55, pricePerNight: 310, features: ['Connecting rooms available', 'Garden view', 'Kids amenities', 'Extra large bathroom'], available: true },
      { id: 'presidential', slug: 'presidential-suite', name: 'Presidential Suite', image: IMG('1600607687939-ce8a6c25118c'), beds: '1 King', maxGuests: 2, sqm: 120, pricePerNight: 650, features: ['Private pool', 'Panoramic terrace', 'Butler service', 'Dining room'], available: false },
    ],
    checkIn: '15:00',
    checkOut: '11:00',
  },
  // ─── HOTEL ROOM ───
  {
    id: 'deluxe-sea',
    slug: 'deluxe-sea-view',
    type: 'hotel-room',
    name: 'Deluxe Sea View Room',
    description: 'Spacious room with private balcony overlooking the sea, featuring premium amenities and elegant décor.',
    longDescription: 'Wake up to the sound of waves and the sight of the sparkling Ionian Sea from your private balcony. The Deluxe Sea View Room offers 35 sqm of refined comfort with handcrafted furniture, premium linens, and a marble bathroom with rain shower.\n\nIn-room amenities include a Nespresso machine, mini bar, 55" Smart TV, complimentary WiFi, bathrobes and slippers, and daily turndown service. Guests enjoy full access to the resort spa, pools, and beach.',
    images: [
      IMG('1566073771259-6a8506099945'),
      IMG('1582719478250-c89cae4dc85b'),
    ],
    region: 'Corfu, Greece',
    address: 'Corfu Grand Resort & Spa, Kommeno Peninsula',
    listingType: 'Hotel Room',
    rating: 4.6,
    reviewCount: 234,
    maxGuests: 2,
    pricePerNight: 180,
    totalPrice: 1260,
    nights: 7,
    features: [
      { label: 'Room Size', value: '35 m²' },
      { label: 'Bed', value: '1 King or 2 Twin' },
      { label: 'Max Guests', value: '2' },
      { label: 'View', value: 'Sea' },
      { label: 'Bathroom', value: 'Marble, rain shower' },
      { label: 'Balcony', value: 'Private' },
      { label: 'WiFi', value: 'Free' },
      { label: 'Mini Bar', value: 'Yes' },
    ],
    amenities: [
      { name: 'Nespresso Machine' }, { name: '55" Smart TV' }, { name: 'Mini Bar' },
      { name: 'Bathrobes & Slippers' }, { name: 'Rain Shower' }, { name: 'Safe Box' },
      { name: 'Hair Dryer' }, { name: 'Daily Turndown' }, { name: 'Room Service' },
    ],
  },
  {
    id: 'corfu-deluxe',
    slug: 'corfu-deluxe',
    type: 'hotel-room',
    name: 'Deluxe Sea View Room',
    description: 'Spacious room with private balcony overlooking the sea.',
    images: [
      IMG('1566073771259-6a8506099945'),
    ],
    region: 'Corfu, Greece',
    listingType: 'Hotel Room',
    rating: 4.6,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    pricePerNight: 180,
    totalPrice: 1260,
    nights: 7,
    features: [
      { label: 'Bedrooms', value: '1' },
      { label: 'Bathrooms', value: '1' },
      { label: 'Max Guests', value: '2' },
      { label: 'View', value: 'Sea' },
      { label: 'Balcony', value: 'Private' },
    ],
  },
  {
    id: 'corfu-suite',
    slug: 'corfu-suite',
    type: 'hotel-room',
    name: 'Junior Suite',
    description: 'Elegant suite with sitting area and garden view.',
    images: [
      IMG('1582268611958-ebfd161ef9cf'),
    ],
    region: 'Corfu, Greece',
    listingType: 'Suite',
    rating: 4.8,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 3,
    pricePerNight: 260,
    totalPrice: 1820,
    nights: 7,
    features: [
      { label: 'Bedrooms', value: '1' },
      { label: 'Bathrooms', value: '1' },
      { label: 'Max Guests', value: '3' },
      { label: 'Suite Type', value: 'Junior' },
      { label: 'View', value: 'Garden' },
    ],
  },
  // ─── REAL ESTATE ───
  {
    id: 'agios-nikitas-plot',
    slug: 'agios-nikitas-plot',
    type: 'real-estate',
    name: 'Beachfront Plot — Agios Nikitas',
    description: '1,200 m² buildable plot just 50 meters from the beach, with sea views and all utilities connected.',
    longDescription: 'A rare opportunity to own a prime beachfront plot in one of Lefkada\'s most sought-after locations. This 1,200 m² plot sits on a gentle slope just 50 meters from the crystal-clear waters of Agios Nikitas beach, offering panoramic sea views toward the islands of Ithaca and Kefalonia.\n\nThe plot is fully buildable with all utilities connected (water, electricity, sewage). Planning permission has been pre-approved for a 300 m² villa with pool. Access via paved road with private parking space. The village of Agios Nikitas (restaurants, shops, marina) is a 2-minute walk.',
    images: [
      IMG('1600596542815-ffad4c1539a9'),
      IMG('1564013799919-ab600027ffc6'),
      IMG('1600607687939-ce8a6c25118c'),
    ],
    region: 'Lefkada, Greece',
    address: 'Agios Nikitas, Lefkada 31080',
    listingType: 'Land',
    rating: 5.0,
    reviewCount: 2,
    plotSize: '1,200 m²',
    builtSize: 'Up to 300 m² (pre-approved)',
    salePrice: 320000,
    features: [
      { label: 'Plot Size', value: '1,200 m²' },
      { label: 'Buildable', value: 'Up to 300 m²' },
      { label: 'Distance to Beach', value: '50 m' },
      { label: 'View', value: 'Sea panoramic' },
      { label: 'Utilities', value: 'All connected' },
      { label: 'Road Access', value: 'Paved' },
      { label: 'Planning Permission', value: 'Pre-approved' },
      { label: 'Orientation', value: 'South-West' },
    ],
  },
  {
    id: 'karya-stone',
    slug: 'karya-stone',
    type: 'real-estate',
    name: 'Renovated Stone House',
    description: 'Charming 3-bed stone house in Karya village.',
    images: [
      IMG('1512917774080-9991f1c4c750'),
    ],
    region: 'Lefkada, Greece',
    listingType: 'House',
    bedrooms: 3,
    bathrooms: 2,
    salePrice: 185000,
    features: [
      { label: 'Bedrooms', value: '3' },
      { label: 'Bathrooms', value: '2' },
      { label: 'Property Type', value: 'Stone house' },
      { label: 'Village', value: 'Karya' },
      { label: 'Condition', value: 'Renovated' },
    ],
  },
  {
    id: 'modern-villa-pool',
    slug: 'modern-villa-pool',
    type: 'real-estate',
    name: 'Modern Villa with Pool',
    description: 'New-build 4-bed villa, turnkey, sea views.',
    images: [
      IMG('1613490493576-7fde63acd811'),
    ],
    region: 'Lefkada, Greece',
    listingType: 'Villa',
    bedrooms: 4,
    bathrooms: 3,
    salePrice: 520000,
    features: [
      { label: 'Bedrooms', value: '4' },
      { label: 'Bathrooms', value: '3' },
      { label: 'Property Type', value: 'Villa' },
      { label: 'Build', value: 'New-build turnkey' },
      { label: 'View', value: 'Sea views' },
    ],
  },
  // ─── SERVICE ───
  {
    id: 'yoga',
    slug: 'yoga',
    type: 'service',
    name: 'Yoga & Wellness Session',
    description: 'Morning yoga on your terrace with a certified instructor.',
    images: [
      IMG('1544367567-0f2fcb009e0b'),
    ],
    region: 'Lefkada, Greece',
    listingType: 'Service',
    rating: 4.7,
    servicePrice: 90,
    features: [
      { label: 'Type', value: 'Yoga & wellness' },
      { label: 'Schedule', value: 'Morning session' },
      { label: 'Location', value: 'Your terrace / villa' },
      { label: 'Instructor', value: 'Certified' },
    ],
  },
  {
    id: 'hiking',
    slug: 'hiking',
    type: 'service',
    name: 'Guided Hiking Tour',
    description: 'Full-day guided hike through Dimosari Waterfalls trail.',
    images: [
      IMG('1551632811-561732d1e306'),
    ],
    region: 'Lefkada, Greece',
    listingType: 'Service',
    rating: 4.8,
    servicePrice: 65,
    duration: 'Full day',
    features: [
      { label: 'Type', value: 'Guided hiking tour' },
      { label: 'Trail', value: 'Dimosari Waterfalls' },
      { label: 'Duration', value: 'Full day' },
      { label: 'Guide', value: 'Included' },
    ],
  },
  {
    id: 'private-chef',
    slug: 'private-chef',
    type: 'service',
    name: 'Private Chef Experience',
    description: 'In-villa dinner prepared by a local chef — 4-course Greek menu with wine pairing.',
    longDescription: 'Treat yourself to an unforgettable culinary experience without leaving your villa. Our award-winning local chef will arrive with fresh, locally sourced ingredients and prepare a 4-course Greek dinner right in your kitchen.\n\nThe menu includes traditional dishes with a modern twist: seafood meze, handmade pasta with local herbs, grilled catch of the day, and a dessert featuring Lefkada honey and citrus. Each course is paired with selected wines from Greek vineyards.\n\nThe chef handles everything — shopping, cooking, serving, and cleanup. You just sit back and enjoy. Available for groups of 2-12 guests.',
    images: [
      IMG('1540555700478-4be289fbec6d'),
      IMG('1544367567-0f2fcb009e0b'),
    ],
    region: 'Lefkada, Greece',
    listingType: 'Service',
    rating: 4.9,
    reviewCount: 56,
    servicePrice: 280,
    duration: '3-4 hours',
    includes: [
      'Fresh local ingredients',
      '4-course Greek menu',
      'Wine pairing (4 wines)',
      'Table setting & decoration',
      'Full cleanup',
      'Dietary adjustments on request',
    ],
    features: [
      { label: 'Duration', value: '3-4 hours' },
      { label: 'Guests', value: '2-12' },
      { label: 'Courses', value: '4' },
      { label: 'Wine', value: 'Pairing included' },
      { label: 'Chef', value: 'Award-winning local' },
      { label: 'Cleanup', value: 'Included' },
    ],
  },
];

export function getDetailBySlug(slug: string): ListingDetail | undefined {
  return detailListings.find((l) => l.slug === slug);
}
