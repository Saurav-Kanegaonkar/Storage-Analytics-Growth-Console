import csv


def as_int(row, key):
    return int(row[key])


experiments = []
with open("data/experiment_backlog.csv", newline="") as f:
    for row in csv.DictReader(f):
        score = (
            as_int(row, "impact_score") * 0.36
            + as_int(row, "confidence_score") * 0.24
            + as_int(row, "tracking_readiness_pct") * 0.16
            + as_int(row, "capacity_fit_pct") * 0.14
            - as_int(row, "effort_score") * 0.06
            - as_int(row, "competitor_risk_score") * 0.04
        )
        experiments.append((score, row))

print("Top storage growth experiment candidates")
for score, row in sorted(experiments, reverse=True):
    print(
        f'{row["experiment_id"]}: {row["idea"]} | '
        f"score={score:.1f} | metric={row['primary_metric']} | "
        f"tracking={row['tracking_readiness_pct']}% | capacity={row['capacity_fit_pct']}%"
    )
