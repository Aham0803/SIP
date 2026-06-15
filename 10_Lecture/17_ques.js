// 17. Numbers Sum
// [10, 20, 30, 40]
// Task
// • Find the sum of all numbers using reduce(). 

let numbers = [10, 20, 30, 40];

let sum = numbers.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(sum);
