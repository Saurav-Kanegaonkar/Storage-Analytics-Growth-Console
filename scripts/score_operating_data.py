import csv

effort_penalty = {"Low": 5, "Medium": 12, "High": 22}

with open("data/synthetic_operating_data.csv", newline="") as f:
    rows = list(csv.DictReader(f))

for row in rows:
    score = int(row["impact"]) * 0.55 + int(row["confidence"]) * 0.45 - effort_penalty[row["effort"]]
    print(f'{row["experiment"]}: priority_score={score:.1f}')
