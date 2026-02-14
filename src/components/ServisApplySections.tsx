"use client";

import { useMemo, useState } from "react";

type Step = 1 | 2 | 3;

type FormState = {
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  website: string;
  region: string;
  serviceCategory: string;
  serviceSubcategory: string;
  serviceDescription: string;
  pricingModel: string;
  packages: string;
  mediaLinks: string;
  termsAccepted: boolean;
};

const WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/14582531/ueuzwpy/";
const inputClass = "mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900";
const labelClass = "text-sm font-medium text-slate-700";

const serviceCategories = [
  {
    id: "cafesRestaurantsNightlife",
    name: "Cafes, Restaurantrs, Nightlife",
    subcategories: [
      { id: "restaurant", name: "Restaurant" },
      { id: "cafe", name: "Café" },
      { id: "barPub", name: "Bar / Pub" },
      { id: "nightclub", name: "Nightclub" },
      { id: "wineTasting", name: "Wine Tasting" },
      { id: "localCuisineExperience", name: "Local Cuisine Experience" },
    ],
  },
  {
    id: "culturalPerformances",
    name: "Cultural Performances",
    subcategories: [
      { id: "theatreShow", name: "Theatre Show" },
      { id: "musicConcert", name: "Music Concert" },
      { id: "dancePerformance", name: "Dance Performance" },
      { id: "cinemaEvent", name: "Cinema Event" },
      { id: "traditionalFestival", name: "Traditional Festival" },
    ],
  },
  {
    id: "conciergeEventServices",
    name: "Concierge & Event Services",
    subcategories: [
      { id: "weddingPlanning", name: "Wedding Planning" },
      { id: "birthdayEvent", name: "Birthday / Private Event" },
      { id: "vipConcierge", name: "VIP Concierge" },
      { id: "corporateEvent", name: "Corporate Event" },
      { id: "photoVideoProduction", name: "Photo & Video Production" },
    ],
  },
  {
    id: "attractionsFamilyActivities",
    name: "Attractions & Family Activities",
    subcategories: [
      { id: "themePark", name: "Theme Park" },
      { id: "zooAquarium", name: "Zoo / Aquarium" },
      { id: "museum", name: "Museum" },
      { id: "scienceCenter", name: "Science Center" },
      { id: "familyEntertainmentCenter", name: "Family Entertainment Center" },
      { id: "aquaPark", name: "Aqua Park" },
    ],
  },
  {
    id: "outdoorActivities",
    name: "Outdoor Activities",
    subcategories: [
      { id: "hiking", name: "Hiking" },
      { id: "safariJeepTour", name: "Safari / Jeep Tour" },
      { id: "waterSports", name: "Water Sports" },
      { id: "cyclingTour", name: "Cycling Tour" },
      { id: "fishingTrip", name: "Fishing Trip" },
    ],
  },
  {
    id: "localActivities",
    name: "Local Activities",
    subcategories: [
      { id: "cityWalkingTour", name: "City Walking Tour" },
      { id: "cookingClass", name: "Cooking Class" },
      { id: "craftWorkshop", name: "Craft Workshop" },
      { id: "wineMakingWorkshop", name: "Wine Making Workshop" },
      { id: "localMarketTour", name: "Local Market Tour" },
    ],
  },
  {
    id: "medicalHealthServices",
    name: "Medical & Health Services",
    subcategories: [
      { id: "spaTreatment", name: "Spa Treatment" },
      { id: "wellnessRetreat", name: "Wellness Retreat" },
      { id: "medicalCheckup", name: "Medical Check-up" },
      { id: "dentalService", name: "Dental Service" },
      { id: "physiotherapy", name: "Physiotherapy" },
    ],
  },
  {
    id: "vehicleRentals",
    name: "Vehicle Rentals",
    subcategories: [
      { id: "carRental", name: "Car Rental" },
      { id: "atvRental", name: "ATV Rental" },
      { id: "boatRental", name: "Boat Rental" },
      { id: "bikeRental", name: "Bicycle Rental" },
      { id: "scooterRental", name: "Scooter Rental" },
    ],
  },
  {
    id: "transfersTransport",
    name: "Transfers & Transport",
    subcategories: [
      { id: "airportTransfer", name: "Airport Transfer" },
      { id: "privateDriver", name: "Private Driver" },
      { id: "shuttleService", name: "Shuttle Service" },
      { id: "luxuryTransfer", name: "Luxury Transfer" },
      { id: "groupTransport", name: "Group Transport" },
    ],
  },
  {
    id: "retreatsEducation",
    name: "Retreats & Education",
    subcategories: [
      { id: "yogaRetreat", name: "Yoga Retreat" },
      { id: "meditationRetreat", name: "Meditation Retreat" },
      { id: "languageSchool", name: "Language School" },
      { id: "artWorkshop", name: "Art Workshop" },
      { id: "personalDevelopmentCourse", name: "Personal Development Course" },
    ],
  },
  {
    id: "seasonalEvents",
    name: "Seasonal Events",
    subcategories: [
      { id: "christmasMarket", name: "Christmas Market" },
      { id: "summerFestival", name: "Summer Festival" },
      { id: "newYearEvent", name: "New Year Event" },
      { id: "carnival", name: "Carnival" },
      { id: "easterCelebration", name: "Easter Celebration" },
    ],
  },
  {
    id: "volunteering",
    name: "Volunteering",
    subcategories: [
      { id: "beachCleanup", name: "Beach Cleanup" },
      { id: "animalRescue", name: "Animal Rescue" },
      { id: "communityProject", name: "Community Project" },
      { id: "environmentProject", name: "Environmental Project" },
    ],
  },
  {
    id: "cleaningServices",
    name: "Cleaning Services",
    subcategories: [
      { id: "deepCleaning", name: "Deep Cleaning" },
      { id: "midStayCleaning", name: "Mid-Stay Cleaning" },
      { id: "endOfSeasonCleaning", name: "End-of-Season Cleaning" },
    ],
  },
  {
    id: "plumbingElectrical",
    name: "Plumbing & Electrical",
    subcategories: [
      { id: "plumbingRepair", name: "Plumbing Repair" },
      { id: "electricalRepair", name: "Electrical Repair" },
      { id: "installationService", name: "Installation Service" },
    ],
  },
  {
    id: "laundryLinen",
    name: "Laundry & Linen",
    subcategories: [
      { id: "laundryService", name: "Laundry Service" },
      { id: "linenRental", name: "Linen Rental" },
      { id: "towelRental", name: "Towel Rental" },
    ],
  },
  {
    id: "checkInCheckOut",
    name: "Check-In / Check-Out",
    subcategories: [
      { id: "keyHandover", name: "Key Handover" },
      { id: "guestGreeting", name: "Guest Greeting" },
      { id: "lateCheckInSupport", name: "Late Check-In Support" },
    ],
  },
  {
    id: "technicalRepairs",
    name: "Technical Repairs",
    subcategories: [
      { id: "applianceRepair", name: "Appliance Repair" },
      { id: "wifiSetup", name: "Wi-Fi Setup" },
      { id: "securitySystem", name: "Security System Setup" },
    ],
  },
  {
    id: "homeMaintenance",
    name: "Home Maintenance",
    subcategories: [
      { id: "paintingService", name: "Painting Service" },
      { id: "renovationService", name: "Renovation Service" },
      { id: "seasonalMaintenance", name: "Seasonal Maintenance" },
    ],
  },
] as const;

const initial: FormState = {
  businessName: "",
  contactName: "",
  email: "",
  phone: "",
  website: "",
  region: "",
  serviceCategory: serviceCategories[0].id,
  serviceSubcategory: serviceCategories[0].subcategories[0].id,
  serviceDescription: "",
  pricingModel: "Per service",
  packages: "",
  mediaLinks: "",
  termsAccepted: false,
};

function csv(v: string) {
  return v.split(",").map((x) => x.trim()).filter(Boolean);
}

export function ServisApplySections() {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<FormState>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState("");

  const payload = useMemo(
    () => ({
      source: "villa4you-react",
      formType: "service-provider-apply",
      submittedAt: new Date().toISOString(),
      business: {
        name: form.businessName,
        contact: form.contactName,
        email: form.email,
        phone: form.phone,
        website: form.website,
        region: form.region,
      },
      service: {
        categoryId: form.serviceCategory,
        categoryName: serviceCategories.find((c) => c.id === form.serviceCategory)?.name || "",
        subcategoryId: form.serviceSubcategory,
        subcategoryName: availableSubcategories.find((s) => s.id === form.serviceSubcategory)?.name || "",
        description: form.serviceDescription,
        pricingModel: form.pricingModel,
        packages: form.packages,
      },
      assets: {
        mediaLinks: csv(form.mediaLinks),
      },
      consent: { termsAccepted: form.termsAccepted },
    }),
    [form]
  );

  function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  const selectedCategory = serviceCategories.find((c) => c.id === form.serviceCategory) ?? serviceCategories[0];
  const availableSubcategories = selectedCategory.subcategories;

  async function onSubmit() {
    if (!form.termsAccepted) {
      setMsg("Please accept terms to submit.");
      return;
    }
    setSubmitting(true);
    setMsg("");
    try {
      const r = await fetch(WEBHOOK_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!r.ok) throw new Error("submit failed");
      setMsg("Submitted successfully. Our team will review your service listing soon.");
      setForm(initial);
      setStep(1);
    } catch {
      setMsg("Submission failed. Please retry in a moment.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="mx-auto max-w-[1280px] px-4 pb-6 pt-4">
        <div className="rounded-2xl border border-slate-300 bg-white p-5 md:p-8">
          <p className="text-sm text-slate-500">Service Providers › <span className="font-semibold text-slate-700">List Your Business/Service</span></p>
          <h1 className="mt-3 text-[42px] font-semibold leading-none text-slate-900">Your service in front of thousands of customers</h1>
          <p className="mt-3 text-[21px] text-slate-600">Join ClickyTour and make your service visible to tourists, property owners, and agents — in just a few steps.</p>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-3">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">1</div>
              <p className="mt-2 text-sm font-semibold text-slate-900">Step 1</p>
              <p className="text-sm text-slate-700">Create account and start onboarding.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-3">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">2</div>
              <p className="mt-2 text-sm font-semibold text-slate-900">Step 2</p>
              <p className="text-sm text-slate-700">Fill service details, pricing, images.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-3">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">3</div>
              <p className="mt-2 text-sm font-semibold text-slate-900">Step 3</p>
              <p className="text-sm text-slate-700">Publish and start receiving bookings.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 pb-10">
        <form className="rounded-2xl border border-slate-300 bg-white p-4" onSubmit={(e) => e.preventDefault()}>
          <h2 className="text-[42px] font-semibold leading-none text-slate-900">Provider Listing Form</h2>
          <p className="mt-2 text-[21px] text-slate-600">Universal provider wizard (List your service/business).</p>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <button type="button" onClick={() => setStep(1)} className={`rounded-xl border p-3 text-left text-sm ${step===1?"border-slate-900 bg-slate-900 text-white":"border-slate-300 bg-slate-50 text-slate-700"}`}>Step 1 · Business</button>
            <button type="button" onClick={() => setStep(2)} className={`rounded-xl border p-3 text-left text-sm ${step===2?"border-slate-900 bg-slate-900 text-white":"border-slate-300 bg-slate-50 text-slate-700"}`}>Step 2 · Service</button>
            <button type="button" onClick={() => setStep(3)} className={`rounded-xl border p-3 text-left text-sm ${step===3?"border-slate-900 bg-slate-900 text-white":"border-slate-300 bg-slate-50 text-slate-700"}`}>Step 3 · Review</button>
          </div>

          {step === 1 && (
            <fieldset className="mt-4 rounded-xl border border-slate-200 p-3">
              <legend className="px-2 text-sm font-semibold text-slate-800">Business details</legend>
              <div className="grid gap-3 md:grid-cols-2">
                <label className={labelClass}>Business name *<input className={inputClass} value={form.businessName} onChange={(e)=>setField("businessName", e.target.value)} /></label>
                <label className={labelClass}>Contact person *<input className={inputClass} value={form.contactName} onChange={(e)=>setField("contactName", e.target.value)} /></label>
                <label className={labelClass}>Email *<input type="email" className={inputClass} value={form.email} onChange={(e)=>setField("email", e.target.value)} /></label>
                <label className={labelClass}>Phone<input className={inputClass} value={form.phone} onChange={(e)=>setField("phone", e.target.value)} /></label>
                <label className={labelClass}>Website<input className={inputClass} value={form.website} onChange={(e)=>setField("website", e.target.value)} /></label>
                <label className={labelClass}>Region *<input className={inputClass} placeholder="Halkidiki, Crete..." value={form.region} onChange={(e)=>setField("region", e.target.value)} /></label>
              </div>
            </fieldset>
          )}

          {step === 2 && (
            <fieldset className="mt-4 rounded-xl border border-slate-200 p-3">
              <legend className="px-2 text-sm font-semibold text-slate-800">Service details</legend>
              <div className="grid gap-3 md:grid-cols-2">
                <label className={labelClass}>Service category
                  <select
                    className={inputClass}
                    value={form.serviceCategory}
                    onChange={(e) => {
                      const categoryId = e.target.value;
                      setField("serviceCategory", categoryId);
                      const category = serviceCategories.find((c) => c.id === categoryId);
                      setField("serviceSubcategory", category?.subcategories[0]?.id ?? "");
                    }}
                  >
                    {serviceCategories.map((cat) => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </label>
                <label className={labelClass}>Subcategory
                  <select className={inputClass} value={form.serviceSubcategory} onChange={(e)=>setField("serviceSubcategory", e.target.value)}>
                    {availableSubcategories.map((sub) => (
                      <option key={sub.id} value={sub.id}>{sub.name}</option>
                    ))}
                  </select>
                </label>
                <label className={labelClass}>Pricing model<select className={inputClass} value={form.pricingModel} onChange={(e)=>setField("pricingModel", e.target.value)}><option>Per service</option><option>Per hour</option><option>Per person</option><option>Package based</option><option>Custom quote</option></select></label>
              </div>
              <label className={`${labelClass} mt-3 block`}>Service description<textarea className={inputClass} rows={4} value={form.serviceDescription} onChange={(e)=>setField("serviceDescription", e.target.value)} /></label>
              <label className={`${labelClass} mt-3 block`}>Prices / packages<textarea className={inputClass} rows={3} value={form.packages} onChange={(e)=>setField("packages", e.target.value)} /></label>
              <label className={`${labelClass} mt-3 block`}>Photos / video links (comma-separated)<textarea className={inputClass} rows={3} value={form.mediaLinks} onChange={(e)=>setField("mediaLinks", e.target.value)} /></label>
            </fieldset>
          )}

          {step === 3 && (
            <>
              <fieldset className="mt-4 rounded-xl border border-slate-200 p-3">
                <legend className="px-2 text-sm font-semibold text-slate-800">Review payload</legend>
                <textarea readOnly className="h-[220px] w-full rounded-lg border border-slate-300 bg-slate-50 p-3 font-mono text-xs" value={JSON.stringify(payload, null, 2)} />
              </fieldset>
              <label className="mt-3 flex items-start gap-2 text-sm text-slate-700"><input type="checkbox" className="mt-1" checked={form.termsAccepted} onChange={(e)=>setField("termsAccepted", e.target.checked)} /> I confirm all submitted details are accurate and authorized.</label>
            </>
          )}

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex gap-3">
              <button type="button" onClick={() => setStep((s)=> (s===1?1:(s===2?1:2)))} className="rounded-xl border border-slate-800 bg-white px-5 py-2.5 text-sm font-medium text-slate-900">Previous</button>
              <button type="button" onClick={() => setStep((s)=> (s===1?2:(s===2?3:3)))} className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white">{step<3?"Next step":"Review"}</button>
            </div>
            <button type="button" onClick={onSubmit} disabled={submitting} className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white disabled:opacity-60">{submitting?"Submitting...":"Submit listing"}</button>
          </div>

          {msg && <p className="mt-3 text-sm text-slate-700">{msg}</p>}
        </form>
      </section>
    </>
  );
}
