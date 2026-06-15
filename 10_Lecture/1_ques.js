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


// let students =[
//     {name : "john" , marks:[80,90,85]},
//     {name : "Emma" , marks :[95,92,98]}
// ];

// let result =[];

// for (let student of students){
//     let sum = 0;
//     for (let mark of student.marks){
//         sum += mark;
//     }

//     let avg = sum / student.marks.length;
//     result.push({
//         name : student.name,
//         average : avg
//     });
// }

// console.log(result);





// 14. Student Marks
// [45, 80, 60, 90, 30]
// Task
// • Keep marks greater than 50.
// • Find their average.

let sum = 0;
let count = 0;

for (let item of array) {
    if (condition) {
        sum += item;
        count++;
    }
}

let average = sum / count;

// 15. Shopping Cart
// [
//  { item: "Book", price: 200 },
//  { item: "Pen", price: 20 },
//  { item: "Bag", price: 500 }
// ]
// Task
// • Calculate total cart value. 

let cart = [
    { item: "Book", price: 200 },
    { item: "Pen", price: 20 },
    { item: "Bag", price: 500 }
];

let totalValue = 0;

for(let product of cart){
    totalValue += product.price;
}

console.log(totalValue);

// 16. Names List
// ["john", "emma", "alex"]
// Task
// • Convert all names to uppercase. 

let names = ["john", "emma", "alex"];

let upperNames = [];

for (let name of names) {
    upperNames.push(name.toUpperCase());
}

console.log(upperNames);

// 17. Numbers Sum
// [10, 20, 30, 40]
// Task
// • Find the sum of all numbers using reduce(). 

let numbers = [10, 20, 30, 40];

let sum = numbers.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(sum);

// 18. Adult Users
// [
//  { name: "John", age: 25 },
//  { name: "Emma", age: 16 },
//  { name: "Alex", age: 20 }
// ]
// Task
// • Keep users whose age is 18 or above.
// • Return their names. 

let users = [
    { name: "John", age: 25 },
    { name: "Emma", age: 16 },
    { name: "Alex", age: 20 }
];

let adultUsers = [];

for (let user of users) {

    if (user.age >= 18) {
        adultUsers.push(user.name);
    }

}

console.log(adultUsers);

// 19. Product Discount
// [
//  { name: "Laptop", price: 50000 },
//  { name: "Phone", price: 20000 }
// ]
// Task
// • Apply a 10% discount to every product.
// • Return the updated prices. 

// let products = [
//     { name: "Laptop", price: 50000 },
//     { name: "Phone", price: 20000 }
// ];

// let updatedPrices = [];

// for (let product of products) {

//     let discountedPrice = product.price * 0.9;

//     updatedPrices.push(discountedPrice);
// }

// console.log(updatedPrices);

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