const testimonials = [
  {
    name: "Sarah M.",
    country: "United Kingdom",
    property: "Villa Glarokavos Sea View",
    date: "August 2025",
    rating: 5,
    text: "Absolutely stunning villa with breathtaking sea views. The property was immaculately clean, and the Villa4you team arranged everything from airport transfer to a private chef. We'll be coming back next summer for sure!",
  },
  {
    name: "Hans & Petra K.",
    country: "Germany",
    property: "Galini Beachfront Masonettes",
    date: "July 2025",
    rating: 5,
    text: "Our third year booking through Villa4you and they never disappoint. The beachfront masonette was perfect for our family of four. The kids loved being steps from the sand, and we loved the quiet evenings on the terrace.",
  },
  {
    name: "Marco R.",
    country: "Italy",
    property: "Olea Suites Apartments",
    date: "September 2025",
    rating: 4,
    text: "Great location and modern apartment. Check-in was smooth and the team was always available on WhatsApp when we had questions. Only small note: the WiFi could be stronger. Otherwise a wonderful stay in Halkidiki.",
  },
  {
    name: "Emily & David L.",
    country: "United States",
    property: "Luxury Suites Elsa",
    date: "June 2025",
    rating: 5,
    text: "We traveled from the US for our honeymoon and Villa4you made everything perfect. The luxury suite was beyond our expectations — private pool, gorgeous interiors, and incredible hospitality. The concierge service arranged boat trips and restaurant reservations flawlessly.",
  },
  {
    name: "Anna V.",
    country: "Netherlands",
    property: "Simonitiko Beachfront Villas",
    date: "August 2025",
    rating: 5,
    text: "I've been managing my property through Villa4you for two seasons now. Their property management service is professional and transparent. Occupancy rates have been excellent and guests always leave positive reviews. Highly recommend for other owners.",
  },
  {
    name: "Jean-Pierre D.",
    country: "France",
    property: "Deluxe Suites Bomo",
    date: "July 2025",
    rating: 4,
    text: "Very pleasant stay. The suite was well-equipped and the complex had a nice pool area. Villa4you's support was responsive and helpful. The only reason for 4 stars is that the air conditioning was a bit noisy at night, but overall a great holiday.",
  },
  {
    name: "Katarina S.",
    country: "Sweden",
    property: "Tripotamos Beachfront Villas B",
    date: "September 2025",
    rating: 5,
    text: "Paradise! The villa was right on the beach with crystal clear water. We had a group of 8 friends and the space was perfect. The booking process was easy and the team provided excellent local tips. Already planning our return trip.",
  },
  {
    name: "Michael T.",
    country: "Australia",
    property: "Sani Club Private Villas",
    date: "June 2025",
    rating: 5,
    text: "Worth every penny. We splurged on a private villa at Sani and it was the holiday of a lifetime. Villa4you arranged everything — car rental, excursions, even a surprise birthday cake for my wife. True five-star service.",
  },
  {
    name: "Sofia P.",
    country: "Greece",
    property: "Afitos Kassandra Halkidiki",
    date: "August 2025",
    rating: 4,
    text: "As a Greek traveler, I appreciate that Villa4you offers quality accommodations with honest descriptions. The apartment in Afitos was exactly as pictured, in a great location with village charm. Good value for money.",
  },
  {
    name: "Robert & Linda W.",
    country: "Canada",
    property: "Tripotsmos Beachfront Complex A",
    date: "July 2025",
    rating: 5,
    text: "Our first trip to Greece and it exceeded all expectations. The beachfront complex was ideal — clean, modern, and perfectly located. Villa4you's team helped us plan day trips to Mount Athos and local wineries. An unforgettable experience!",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? "text-amber-400" : "text-slate-200"}>★</span>
      ))}
    </div>
  );
}

export function TestimonialsSections() {
  const avg = (testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length).toFixed(1);

  return (
    <section className="mx-auto max-w-[1280px] px-4 pb-12 pt-4">
      <div className="rounded-2xl border border-slate-300 bg-white p-5 md:p-8">
        <p className="text-sm text-slate-500">Home › <span className="font-semibold text-slate-700">Testimonials</span></p>

        <h1 className="mt-3 text-4xl font-semibold leading-tight text-slate-900 md:text-[56px] md:leading-none">
          Guest Reviews
        </h1>
        <p className="mt-3 text-lg text-slate-600 md:text-[21px]">
          See what our guests say about their Villa4you experience.
        </p>

        {/* Summary */}
        <div className="mt-6 flex flex-wrap items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <div className="text-center">
            <p className="text-4xl font-bold text-slate-900">{avg}</p>
            <Stars count={Math.round(Number(avg))} />
          </div>
          <div className="text-sm text-slate-600">
            <p>Based on <strong>{testimonials.length}</strong> reviews</p>
            <p className="text-slate-500">Verified Villa4you guests</p>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:shadow-md">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.country}</p>
                </div>
                <Stars count={t.rating} />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <span className="rounded-full bg-sky-50 px-2 py-0.5 text-sky-700">{t.property}</span>
                <span>·</span>
                <span>{t.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
