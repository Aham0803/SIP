// 10. User Actions
// [
//  { user: "A", action: "login" },
//  { user: "B", action: "logout" },
//  { user: "C", action: "login" }
// ]
// Task
// • Count how many users performed "login". 

let actions = [
    { user: "A", action: "login" },
    { user: "B", action: "logout" },
    { user: "C", action: "login" }
];

let loginCount = 0;

for (let action of actions) {

    if (action.action === "login") {
        loginCount++;
    }

}

console.log(loginCount);