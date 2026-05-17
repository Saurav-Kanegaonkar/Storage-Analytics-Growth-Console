-- Market conversion and tracking quality
select
  market_id,
  channel,
  sum(bookings) * 1.0 / nullif(sum(sessions), 0) as booking_conversion,
  avg(tracking_quality_pct) as avg_tracking_quality
from channel_daily
group by 1, 2;

-- Experiment priority
select
  experiment_id,
  idea,
  impact_score,
  confidence_score,
  effort_score,
  impact_score * 0.55 + confidence_score * 0.45 - effort_score * 0.25 as priority_score
from experiment_backlog
order by priority_score desc;
