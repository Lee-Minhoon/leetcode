-- 1661. Average Time of Process per Machine

select machine_id, round(avg(processing_time), 3) as processing_time from
(select machine_id,
sum((case when activity_type = 'end' then timestamp else 0 end))
- sum((case when activity_type = 'start' then timestamp else 0 end)) as processing_time
from activity group by machine_id, process_id) as processing_times
group by machine_id;