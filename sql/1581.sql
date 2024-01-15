-- 1581. Customer Who Visited but Did Not Make Any Transactions

select customer_id, sum(trans is null) as count_no_trans from
(select v.customer_id, sum(t.amount) as trans
from visits v left join transactions t on v.visit_id = t.visit_id
group by v.visit_id) as counts
group by customer_id having count_no_trans > 0;
