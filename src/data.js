window.projectData = {
  funnel: [
    ["Search demand", "118K", 100],
    ["Product views", "42K", 72],
    ["Quote starts", "9.6K", 43],
    ["Bookings", "3.2K", 28]
  ],
  experiments: [
    {
      name: "Mobile unit selector",
      impact: 86,
      confidence: 78,
      effort: "Medium",
      hypothesis: "Clarifying unit size recommendations on mobile will recover high-intent search demand before users compare competitors.",
      metrics: [["Conversion lift", "+1.1 pp"], ["Tracking QA", "91%"], ["Inventory fit", "High"]],
      insights: ["Mobile search has high demand but weaker quote completion.", "Tracking is clean enough to run an A/B test without instrumentation repair.", "Available inventory makes the result operationally useful."],
      recs: ["Run the mobile selector test first.", "Segment results by market capacity.", "Hold paid search expansion until the test clears."]
    },
    {
      name: "Competitor price guardrail",
      impact: 74,
      confidence: 63,
      effort: "Low",
      hypothesis: "A regional price guardrail will prevent wasted spend in markets where competitor gaps are too large to overcome.",
      metrics: [["Wasted spend risk", "14%"], ["Markets flagged", "11"], ["SEO demand", "+9%"]],
      insights: ["Price gaps matter most when inventory is available and paid traffic is already efficient.", "A guardrail is useful, but not enough to fix mobile conversion.", "The signal should feed weekly budget review."],
      recs: ["Use this as a budget filter.", "Do not treat it as the main growth test.", "Pair with market-level capacity checks."]
    },
    {
      name: "Repeat renter lifecycle",
      impact: 59,
      confidence: 81,
      effort: "Low",
      hypothesis: "Lifecycle reminders can lift repeat renter bookings without adding paid media pressure.",
      metrics: [["Repeat value", "Strong"], ["CRM reach", "62K"], ["Ops risk", "Low"]],
      insights: ["Repeat renters convert well and create less operational strain.", "The upside is reliable but smaller than the mobile funnel opportunity.", "CRM should run in parallel after tracking is confirmed."],
      recs: ["Launch as a secondary test.", "Measure incrementality against holdout markets.", "Protect capacity-constrained locations."]
    }
  ]
};
