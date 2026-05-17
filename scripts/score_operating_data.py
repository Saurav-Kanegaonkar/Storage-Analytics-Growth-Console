import csv

experiments = []
with open("data/experiment_backlog.csv", newline="") as f:
    for row in csv.DictReader(f):
        score = int(row["impact_score"]) * 0.55 + int(row["confidence_score"]) * 0.45 - int(row["effort_score"]) * 0.25
        experiments.append((score, row["experiment_id"], row))

print("Top experiment candidates")
for score, _, row in sorted(experiments, reverse=True)[:8]:
    print(f'{row["experiment_id"]}: {row["idea"]} | score={score:.1f} | metric={row["primary_metric"]}')
