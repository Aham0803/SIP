// 20. Exam Results
// [
//  { name: "John", marks: 80 },
//  { name: "Emma", marks: 40 },
//  { name: "Alex", marks: 70 }
// ]
// Task
// • Keep students with marks ≥ 50.
// • Return their names. 

let students = [
    { name: "John", marks: 80 },
    { name: "Emma", marks: 40 },
    { name: "Alex", marks: 70 }
];

let passedStudents = [];

for (let student of students) {

    if (student.marks >= 50) {
        passedStudents.push(student.name);
    }

}

console.log(passedStudents);