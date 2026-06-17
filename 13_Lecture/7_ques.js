// total salary of employees

const employees = [
    { name :"A" , salary : 30000},
    { name :"B" , salary : 50000},
    { name :"C" , salary : 40000}
];

// find total salary

const f = employees.reduce(function(total , e){
    return total += e.salary;
},0);
console.log(f);

const t = employees.reduce((total , e) => total+= e.salary,0);
console.log(t);
