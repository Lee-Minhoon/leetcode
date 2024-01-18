-- 577. Employee Bonus

select e.name, b.bonus from employee e
left join bonus b on e.empId = b.empId
where b.bonus is null or b.bonus < 1000;