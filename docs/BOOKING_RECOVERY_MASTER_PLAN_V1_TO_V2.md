# Booking Recovery Master Plan (V1 -> V2)

## 1) Scope
Implement robust unavailable-date recovery that preserves guest intent and improves conversion.

---

## 2) V1 (staging-first, fast execution)

### V1.1 Functional behavior
1. **Exact-length first (same property)**
   - Primary suggestions use requested-night intent.
2. **Large-shift branching**
   - If nearest exact option starts too far from requested date, also show:
   - shorter alternatives
   - longer alternatives
3. **Similar properties block**
   - Show top alternatives for same date intent.
4. **Base split-stay trigger**
   - If requested stay >=11 nights and single-property fit is weak, show 2-property split itinerary.
5. **Performance guard**
   - Compute heavy suggestions only when user opens options panel.

### V1.2 Rules / thresholds (initial)
- `LONG_STAY_NIGHTS = 11`
- `LARGE_SHIFT_DAYS = 7`
- Exact options: top 5
- Shorter options: top 3
- Longer options: top 3
- Similar properties shown: top 2 (V1)

### V1.3 UX order in manual-approval state
1. Exact-length alternatives
2. Shorter / longer alternatives (if large shift)
3. Similar properties
4. Split-stay (if long stay)
5. Priority request CTA

### V1.4 V1 QA checks
- Correct requested-night intent used in alternatives.
- No heavy lag on page load.
- Suggestions visible only in relevant state.
- Date display format consistent (DD-MM-YYYY in options list).

---

## 3) V2 (full logic)

### V2.1 Data enrichment from Core
Add/consume:
- Accurate coordinates for all properties.
- Capacity, bedrooms, price bands, amenities tags.
- Availability windows in block form.
- Optional area hierarchy (micro-area -> region).

### V2.2 Ranking engine
Score each alternative with weighted model:

`score = 0.35*availability_fit + 0.25*date_intent_fit + 0.15*geo_fit + 0.15*price_fit + 0.10*capacity_fit`

For split-stay candidates add penalty/reward:
- `-transition_penalty`
- `+full_coverage_bonus`

### V2.3 Split-stay optimizer
- Build 2-property itineraries for long stays.
- Optimize for:
  1) full night coverage,
  2) minimal travel jump,
  3) acceptable total price delta,
  4) capacity match.

### V2.4 Dynamic geo fallback tiers
- Tier 1: same micro-area (e.g. <=3km)
- Tier 2: local region (<=10km)
- Tier 3: broader destination cluster

### V2.5 UX copy upgrade
- Explain *why* option is shown:
  - “Closest exact 12-night match”
  - “Same area, same capacity”
  - “Split stay to keep full trip dates”
- Show deltas:
  - shift days, total nights, est. price band, area distance

---

## 4) Technical implementation roadmap

### Phase A (already in motion)
- Stabilize V1 behavior in staging.
- Lock intent-night handling.
- Confirm deployment cache/version consistency.

### Phase B
- Add reusable suggestion engine module (`lib/bookingRecoveryEngine.ts`).
- Move thresholds to config object.
- Add unit tests for date/nights math and blocked-range logic.

### Phase C
- Add V2 scoring layer + geo logic.
- Add split-stay optimizer function.
- Add API contract wiring for similar properties.

### Phase D
- Analytics + tuning:
  - option click-through rate,
  - priority request fallback rate,
  - abandoned session rate after unavailable state.

---

## 5) Acceptance criteria

1. For unavailable requests, user sees exact-length alternatives first.
2. If exact option is too far, user also sees shorter/longer alternatives.
3. For >=11 nights, split-stay appears when useful.
4. Similar properties suggestions are relevant and date-compatible.
5. Widget remains responsive during normal page load.
6. Manual fallback always available.

---

## 6) Risks and mitigations
- **Risk:** cache serves stale build -> misleading QA.
  - Mitigation: verify deployed hash/chunk updates before testing.
- **Risk:** off-by-one night confusion.
  - Mitigation: centralize night-intent function + tests.
- **Risk:** too many options overwhelm user.
  - Mitigation: strict ordering and limited cards.

---

## 7) Immediate next actions
1. Run staged regression pass with fixed test scenarios.
2. Freeze V1 after green QA.
3. Begin V2 engine extraction and scoring integration.
