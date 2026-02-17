# SEARCH_CORE_CUTOVER_CHECKLIST_V1

Status: Pre-integration checklist (rollback-first)
Date: 2026-02-17

## 1) Purpose

Safely switch unified search from mirror simulation to Core-backed source with immediate rollback capability.

---

## 2) Pre-cutover prerequisites

- [ ] Core search contract approved (request/response schema)
- [ ] Environment variables ready in staging/prod
- [ ] Feature flag / source switch available (`mirror` vs `core`)
- [ ] Monitoring/observability baseline active
- [ ] QA test matrix prepared for parity checks

---

## 3) Switch strategy (recommended)

Use phased rollout:
1. Staging full switch (`search_source=core_index`)
2. Production shadow validation (if available)
3. Limited production rollout (small % or internal first)
4. Full rollout after KPI + error checks pass

---

## 4) Rollback-first controls

Must be ready before enabling Core:
- [ ] One-step config toggle back to mirror source
- [ ] Documented rollback owner + command path
- [ ] Last known-good commit hash recorded
- [ ] Rollback validation script/checklist ready

Rollback trigger conditions:
- elevated 5xx/timeout rate
- broken result relevance/parity
- severe CTR/conversion regression
- payload/contract mismatch errors

---

## 5) Parity QA cases (mirror vs core)

Run same query suite on both sources:
- [ ] `vertical=stays&mode=vacation&q=halkidiki`
- [ ] `vertical=blog&q=santorini`
- [ ] `vertical=services&q=concierge`
- [ ] `vertical=all&q=support`
- [ ] `vertical=stays&mode=sale&location=halkidiki`
- [ ] `vertical=stays&mode=monthly&location=halkidiki`

Validate for each:
- [ ] result set relevance (top results sanity)
- [ ] expected mode filtering behavior
- [ ] stable card fields (title/description/price/tags/href)
- [ ] no empty-state regressions for known-valid queries
- [ ] response time within target thresholds

---

## 6) SEO/metadata safety checks

- [ ] `/search` canonical unchanged
- [ ] property mode canonical tags unchanged
- [ ] no duplicate-indexing artifacts introduced by source switch

---

## 7) Tracking continuity checks

Ensure no analytics break during source switch:
- [ ] `search_page_view` still firing
- [ ] `search_handoff_click` still firing
- [ ] `search_result_click` still firing
- [ ] `search_source` parameter flips to `core_index`

---

## 8) Performance acceptance gates

Define cutover thresholds (example):
- p95 search response <= 1200ms
- error rate <= 1%
- result CTR no worse than -10% vs mirror baseline (initial window)
- zero-result session rate not materially worse vs baseline

---

## 9) Deployment runbook (execution)

1. Announce maintenance window / monitoring watch.
2. Enable Core source in staging.
3. Execute parity QA matrix + tracking checks.
4. If PASS, promote to production rollout phase.
5. Monitor KPIs/errors for defined watch period.
6. If FAIL, rollback immediately and log incident notes.

---

## 10) Post-cutover closeout

- [ ] Save before/after KPI snapshot
- [ ] Document issues + fixes
- [ ] Update rollout docs status to Core-active
- [ ] Keep mirror fallback path available until stability window closes
