// Top Performing Students
// Given an array of students:
// [
//  { name: "John", marks: [80, 90, 85] },
//  { name: "Emma", marks: [95, 92, 98] },
//  { name: "Alex", marks: [60, 70, 65] }
// ]
// Task
// • Calculate each student's average.
// • Keep only students with average ≥ 85.
// • Return their names sorted by average descending. 


let students =[
    {name : "john" , marks:[80,90,85]},
    {name : "Emma" , marks :[95,92,98]}
];

let result =[];

for (let student of students){
    let sum = 0;
    for (let mark of student.marks){
        sum += mark;
    }

    let avg = sum / student.marks.length;
    result.push({
        name : student.name,
        average : avg
    });
}
console.log(result);










