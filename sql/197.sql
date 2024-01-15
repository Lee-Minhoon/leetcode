-- 197. Rising Temperature

select today.id from weather as today
left join weather as yesterday on yesterday.recordDate = date_sub(today.recordDate, interval 1 day)
where today.temperature > yesterday.temperature;