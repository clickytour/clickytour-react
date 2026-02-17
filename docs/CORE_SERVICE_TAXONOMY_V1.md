# CORE_SERVICE_TAXONOMY_V1

Source of truth: `src/lib/serviceTaxonomy.ts`

## Main Categories and Subcategories

1. **Cafes, Restaurants, Nightlife** (`cafesRestaurantsNightlife`)
   - Restaurant, Café, Bar / Pub, Nightclub, Wine Tasting, Local Cuisine Experience

2. **Cultural Performances** (`culturalPerformances`)
   - Theatre Show, Music Concert, Dance Performance, Cinema Event, Traditional Festival

3. **Concierge & Event Services** (`conciergeEventServices`)
   - Wedding Planning, Birthday / Private Event, VIP Concierge, Corporate Event, Photo & Video Production

4. **Attractions & Family Activities** (`attractionsFamilyActivities`)
   - Theme Park, Zoo / Aquarium, Museum, Science Center, Family Entertainment Center, Aqua Park

5. **Outdoor Activities** (`outdoorActivities`)
   - Hiking, Safari / Jeep Tour, Water Sports, Cycling Tour, Fishing Trip

6. **Local Activities** (`localActivities`)
   - City Walking Tour, Cooking Class, Craft Workshop, Wine Making Workshop, Local Market Tour

7. **Medical & Health Services** (`medicalHealthServices`)
   - Spa Treatment, Wellness Retreat, Medical Check-up, Dental Service, Physiotherapy

8. **Vehicle Rentals** (`vehicleRentals`)
   - Car Rental, ATV Rental, Boat Rental, Bicycle Rental, Scooter Rental

9. **Transfers & Transport** (`transfersTransport`)
   - Airport Transfer, Private Driver, Shuttle Service, Luxury Transfer, Group Transport

10. **Retreats & Education** (`retreatsEducation`)
    - Yoga Retreat, Meditation Retreat, Language School, Art Workshop, Personal Development Course

11. **Seasonal Events** (`seasonalEvents`)
    - Christmas Market, Summer Festival, New Year Event, Carnival, Easter Celebration

12. **Volunteering** (`volunteering`)
    - Beach Cleanup, Animal Rescue, Community Project, Environmental Project

13. **Cleaning Services** (`cleaningServices`)
    - Deep Cleaning, Mid-Stay Cleaning, End-of-Season Cleaning

14. **Plumbing & Electrical** (`plumbingElectrical`)
    - Plumbing Repair, Electrical Repair, Installation Service

15. **Laundry & Linen** (`laundryLinen`)
    - Laundry Service, Linen Rental, Towel Rental

16. **Check-In / Check-Out** (`checkInCheckOut`)
    - Key Handover, Guest Greeting, Late Check-In Support

17. **Technical Repairs** (`technicalRepairs`)
    - Appliance Repair, Wi-Fi Setup, Security System Setup

18. **Home Maintenance** (`homeMaintenance`)
    - Painting Service, Renovation Service, Seasonal Maintenance

## Alignment Rules

- `service-apply` and `quick-request` must import this taxonomy directly (no duplicated inline lists).
- Any taxonomy change must be done once in `src/lib/serviceTaxonomy.ts` and automatically reflected in both flows.
- IDs are canonical integration keys for Core-mirror and future Core DB mapping.
