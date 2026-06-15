
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