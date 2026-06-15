
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
