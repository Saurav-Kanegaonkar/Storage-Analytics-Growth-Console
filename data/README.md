# Data Sources

This project uses synthetic data for a storage ecommerce analytics scenario. The data is not real company performance data.

The synthetic structure is modeled on common storage ecommerce and BI patterns:

- Market-level storage demand, occupancy, capacity fit, and unit availability.
- Digital journey activity from search sessions to quote starts, reservations, and online move-ins.
- Marketing channel data for organic search, paid search, direct, email, and affiliate traffic.
- Competitor price collection by market and unit type.
- Experiment backlog fields used by a BI analyst to decide which A/B test is ready to run.
- Tracking QA and pipeline reliability checks used before dashboard refresh.

## Files

- `markets.csv` contains 20 synthetic market records with region, population band, and capacity index.
- `channel_daily.csv` contains synthetic market, channel, and day performance rows with sessions, quote starts, bookings, spend, and tracking quality.
- `inventory_availability.csv` contains synthetic market-day capacity rows.
- `competitor_prices.csv` contains synthetic competitor price observations.
- `experiment_backlog.csv` contains the experiment scoring inputs used by `scripts/score_operating_data.py`.

## Synthetic assumptions

- Search demand is higher in larger markets and in markets with stronger capacity.
- Quote start and booking rates vary by channel, with direct and email traffic converting better than affiliate traffic.
- Tracking quality is usually above 85%, but checkout and competitor feeds are intentionally imperfect to make the operations monitor realistic.
- Competitor risk increases when market price gaps are unfavorable and feed freshness is below target.
- Experiment priority is based on impact, confidence, tracking readiness, capacity fit, effort, and competitor risk.
