// 13. Even Numbers
// [1, 2, 3, 4, 5, 6]
// Task
// • Keep only even numbers.
// • Return their squares. 

let numbers = [1, 2, 3, 4, 5, 6];

let result = [];

for (let number of numbers) {

    if (number % 2 === 0) {

        let square = number * number;

        result.push(square);
    }
}

console.log(result);