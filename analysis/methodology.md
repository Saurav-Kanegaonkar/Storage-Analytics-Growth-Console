# Methodology

The artifact is designed as a BI analyst workbench for a storage ecommerce team. It separates the decision into three questions.

## 1. Is there a growth opportunity?

The executive surface reviews the digital journey from search sessions to online move-ins. It combines demand, conversion, channel efficiency, market occupancy, capacity fit, and competitor price gaps.

## 2. Which experiment is ready to run?

Experiments are scored with a transparent weighted model:

```text
score =
  impact_score * 0.36
  + confidence_score * 0.24
  + tracking_readiness_pct * 0.16
  + capacity_fit_pct * 0.14
  - effort_score * 0.06
  - competitor_risk_score * 0.04
```

Impact and confidence keep the model tied to business value. Tracking readiness and capacity fit prevent the team from running tests that cannot be measured or operationalized. Effort and competitor risk reduce the score when a test is difficult or market pressure is high.

## 3. Can stakeholders trust the data?

The operations surface checks source freshness, event completeness, paid click joins, inventory joins, experiment assignment balance, and competitor feed coverage before the BI layer is refreshed.

## Why this is not a predictive model

The role is BI and product analytics oriented. A transparent scoring model is more appropriate than a black-box model because the key stakeholder question is which test should receive traffic first and why.
