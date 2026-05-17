# Storage Analytics Growth Console

I built this because ecommerce growth decisions can look obvious in channel dashboards but fail when tracking QA, market capacity, and competitor pressure are ignored. The project turns a storage-style growth problem into an experiment prioritization lab.

![Storage Analytics Growth Console](docs/images/dashboard.png)

## What this project is

This is an ecommerce experimentation lab built around synthetic storage booking, channel, QA, and inventory signals. Instead of only showing KPIs, it asks which test should receive traffic first and why.

## What makes it different

- Funnel view for search demand through booking
- Impact-confidence matrix for experiment prioritization
- Clickable experiment cards with hypotheses, metrics, insights, and recommendations
- Analysis notes and a scoring script included with the repo

## Analytical recommendations

- Run the mobile unit selector first because demand is high, tracking quality is good, and market inventory can support the test.
- Use competitor price checks as a budget guardrail rather than the main experiment.
- Keep repeat-renter lifecycle work as a lower-risk parallel lane once holdout measurement is ready.

## Data sources

- Five source-style CSVs now support the experiment lab.
- The data covers markets, channel performance, inventory availability, competitor prices, and experiment backlog scoring.
- The scoring script ranks experiments using impact, confidence, and effort.

## Repository structure

- `index.html` - interactive experiment lab
- `src/` - synthetic data, interaction logic, and styling
- `data/` - synthetic operating data
- `analysis/` - methodology, executive findings, SQL checks, and ranked analytical outputs
- `analysis/methodology.md` - prioritization method
- `scripts/score_operating_data.py` - experiment scoring script
- `docs/images/dashboard.png` - rendered screenshot

## Run locally

```bash
python3 -m http.server 4174
```

Then open `http://localhost:4174`.
