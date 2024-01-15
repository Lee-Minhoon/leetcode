-- 1378. Replace Employee ID With The Unique Identifier

select eu.unique_id, e.name from employees e left join employeeuni eu on e.id = eu.id;