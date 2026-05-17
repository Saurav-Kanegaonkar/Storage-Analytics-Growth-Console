window.projectData = {
  metrics: [
    { label: "Storage sessions", value: "1.28M", detail: "+8.6% vs prior period", status: "good" },
    { label: "Online move-in rate", value: "31.4%", detail: "+2.1 pp with clean tracking", status: "good" },
    { label: "Capacity fit", value: "84%", detail: "7 markets need guardrails", status: "watch" },
    { label: "Tracking health", value: "91.8%", detail: "checkout events lag mobile web", status: "watch" }
  ],
  funnel: [
    { label: "Storage search sessions", value: 1280000, display: "1.28M", width: 100 },
    { label: "Unit detail views", value: 454000, display: "454K", width: 72 },
    { label: "Quote starts", value: 136000, display: "136K", width: 46 },
    { label: "Reservations", value: 50800, display: "50.8K", width: 31 },
    { label: "Online move-ins", value: 15950, display: "15.9K", width: 22 }
  ],
  channels: [
    { name: "Organic search", sessions: "482K", conversion: "4.6%", spend: "$0.09", quality: 94, lift: "+11%" },
    { name: "Paid search", sessions: "338K", conversion: "3.8%", spend: "$18.40", quality: 89, lift: "+7%" },
    { name: "Direct", sessions: "244K", conversion: "5.1%", spend: "$0.00", quality: 96, lift: "+5%" },
    { name: "Email", sessions: "119K", conversion: "6.3%", spend: "$1.70", quality: 93, lift: "+4%" },
    { name: "Affiliate", sessions: "97K", conversion: "2.9%", spend: "$12.80", quality: 84, lift: "-2%" }
  ],
  markets: [
    { market: "Phoenix", demand: 91, occupancy: "92.4%", capacity: "High", competitorGap: "-3%", action: "Increase traffic after mobile test clears" },
    { market: "Las Vegas", demand: 78, occupancy: "89.6%", capacity: "Medium", competitorGap: "+4%", action: "Protect spend with competitor guardrail" },
    { market: "Denver", demand: 72, occupancy: "94.1%", capacity: "Tight", competitorGap: "+8%", action: "Limit paid media until unit mix improves" },
    { market: "Dallas", demand: 86, occupancy: "88.9%", capacity: "High", competitorGap: "-1%", action: "Expand SEO landing pages" },
    { market: "Austin", demand: 69, occupancy: "90.7%", capacity: "Medium", competitorGap: "+2%", action: "Run local proof module test" }
  ],
  experiments: [
    {
      id: "EXP-07",
      name: "Mobile unit selector",
      impact: 88,
      confidence: 82,
      effort: "Medium",
      readiness: 93,
      capacityFit: 87,
      competitorRisk: "Low",
      primaryMetric: "Quote start rate",
      hypothesis: "Showing size guidance and nearest available unit options on mobile will lift quote starts without overloading tight markets.",
      sample: "42K sessions per variant",
      duration: "14 days",
      guardrails: ["Online move-in completion", "Market-level capacity fit", "Checkout event completeness"],
      insights: [
        "Mobile search demand is large, but unit detail views leak before quote start.",
        "Tracking coverage is strong enough to trust a two-week A/B test.",
        "The highest demand markets have enough storage capacity to act on a positive result."
      ],
      recs: [
        "Run first in high-capacity markets.",
        "Keep a holdout by market tier.",
        "Send the result to product, paid search, and storage operations together."
      ]
    },
    {
      id: "EXP-04",
      name: "Competitor price guardrail",
      impact: 74,
      confidence: 71,
      effort: "Low",
      readiness: 86,
      capacityFit: 79,
      competitorRisk: "Medium",
      primaryMetric: "Paid booking cost",
      hypothesis: "Suppressing paid traffic where competitor prices are materially lower will reduce wasted spend while protecting booking volume.",
      sample: "18 markets",
      duration: "21 days",
      guardrails: ["Booking conversion", "Search impression share", "Competitor feed freshness"],
      insights: [
        "Price pressure matters most when paid traffic is expensive and unit availability is only moderate.",
        "The signal is strongest as a budget rule, not as the main product growth bet.",
        "Fresh competitor data is required before the rule becomes automated."
      ],
      recs: [
        "Use as a weekly budget guardrail.",
        "Pair with a freshness check on competitor collection.",
        "Do not suppress organic demand in markets with strong capacity."
      ]
    },
    {
      id: "EXP-11",
      name: "Online move-in proof module",
      impact: 66,
      confidence: 77,
      effort: "Medium",
      readiness: 88,
      capacityFit: 82,
      competitorRisk: "Low",
      primaryMetric: "Move-in completion",
      hypothesis: "Adding trust cues and the steps required for online move-in will reduce abandonment after reservation.",
      sample: "22K reservations",
      duration: "18 days",
      guardrails: ["Support contacts", "Digital agreement completion", "Refund rate"],
      insights: [
        "The online move-in flow is valuable because it removes counter friction.",
        "Abandonment clusters around identity and payment steps.",
        "The test has moderate upside and clear stakeholder ownership."
      ],
      recs: [
        "Run after mobile selector unless checkout tracking slips.",
        "Segment by first-time and repeat renters.",
        "Monitor support contacts as a quality guardrail."
      ]
    },
    {
      id: "EXP-15",
      name: "Repeat renter lifecycle",
      impact: 54,
      confidence: 84,
      effort: "Low",
      readiness: 91,
      capacityFit: 76,
      competitorRisk: "Low",
      primaryMetric: "Repeat bookings",
      hypothesis: "Lifecycle reminders can lift repeat renter bookings without adding paid media pressure.",
      sample: "64K reachable customers",
      duration: "28 days",
      guardrails: ["Unsubscribe rate", "Market capacity", "Incremental repeat booking rate"],
      insights: [
        "Repeat renters convert well and create less acquisition cost pressure.",
        "The upside is reliable but smaller than the mobile funnel opportunity.",
        "Capacity constraints make market suppression important."
      ],
      recs: [
        "Launch as a secondary lane.",
        "Use a holdout to measure incrementality.",
        "Exclude markets with tight unit mix."
      ]
    }
  ],
  operations: [
    { feed: "Web checkout events", owner: "Digital analytics", freshness: "12 min", completeness: 92, status: "Watch", issue: "Payment step events missing on 8% of mobile sessions" },
    { feed: "Storage inventory snapshot", owner: "Enterprise data", freshness: "28 min", completeness: 98, status: "Healthy", issue: "No material defect" },
    { feed: "Marketing spend", owner: "Digital marketing", freshness: "1 hr", completeness: 96, status: "Healthy", issue: "Campaign naming checks passed" },
    { feed: "Competitor prices", owner: "Growth analytics", freshness: "7 hr", completeness: 81, status: "Watch", issue: "Five markets below freshness target" },
    { feed: "Experiment assignments", owner: "Product analytics", freshness: "16 min", completeness: 94, status: "Healthy", issue: "Holdout allocation balanced" }
  ],
  qualityChecks: [
    { check: "Reservation event has market and unit size", result: "97.8%", target: "95%+", status: "pass" },
    { check: "Paid click joins to session", result: "93.1%", target: "92%+", status: "pass" },
    { check: "Competitor price row less than 24 hours old", result: "84.6%", target: "90%+", status: "fail" },
    { check: "Inventory snapshot joins to market", result: "99.4%", target: "98%+", status: "pass" },
    { check: "Experiment exposure has variant", result: "96.2%", target: "95%+", status: "pass" }
  ]
};
