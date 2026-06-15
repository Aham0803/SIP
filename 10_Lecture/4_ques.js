// 4. Employee Salary List
// [
//  { name: "A", salary: 50000 },
//  { name: "B", salary: 40000 },
//  { name: "C", salary: 60000 }
// ]
// Task
// • Extract only employee salaries.
// • Find the total salary paid.

let employees = [
    { name: "A", salary: 50000 },
    { name: "B", salary: 40000 },
    { name: "C", salary: 60000 }
];

let salaries = [];
let totalSalary = 0;

for (let employee of employees) {

    salaries.push(employee.salary);

    totalSalary += employee.salary;
}

console.log("Salaries:", salaries);
console.log("Total Salary:", totalSalary);