# Booking Recovery — Business Requirements (Drcris)

Date: 2026-02-16

## 1) KPI priority order
1. Booking conversion
2. Lead capture
3. Average booking value
4. Occupancy

## 2) Strategic context
- Booking/OTA workflows often restrict PMC flexibility to redirect guests across their own managed inventory.
- Villa4you advantage: CRM-driven manual reservation handling + flexible portfolio routing + faster response (1–10 minutes).
- Target is automation that preserves this flexibility while avoiding gap nights.
- Reference occupancy context shared by Drcris:
  - Typical OTA/booking flow: ~22–23 nights/month
  - Villa4you: ~26–27 nights/month

## 3) Split-stay policy
- Always allow split-stay when request is >= 11 nights.
- Max number of properties in split proposal: 2.
- Same area required.

## 4) Geo tolerance
- Nearby radius target: up to 10 km.

## 5) Price tolerance
- Max price increase versus requested property: up to +20%.

## 6) Similarity priorities (ranked)
1. Capacity
2. Pool
3. Sea view
4. Family-friendly fit
5. Rating

## 7) Messaging style
- Strictly factual + friendly.
- Channel nuance:
  - FB/Instagram: short and friendly
  - Email: more official, include optional discount language when applicable

## 8) Inventory/portfolio optimization logic
- Prioritize properties with fewer reservations.
- Prioritize filling short gaps (3–5 nights), especially via combination proposals.
- Example logic:
  - Requested 11 nights
  - Offer property A for 7 nights (min stay 7)
  - Offer property B for 4 nights (exact gap match)

## 9) Seasonal discount policy
- Low and mid season:
  - Push with discounts up to 15–20%
  - Especially for large groups (>14 guests, adults + children) or 2–4 families
- High season:
  - Prefer no discount sales
  - Monitor and solve gap-creation issues with targeted combinations
