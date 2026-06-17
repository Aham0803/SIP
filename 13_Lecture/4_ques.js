// filter adults
// keep only users aged 18 or above

const users =[
    { name : "A" , age : 16},
    { name : "B" , age : 22},
    { name : "C" , age : 19}
];

const q = users.map(user => user.age > 18);
console.log(q);

const w = users.filter(user =>user.age > 18);
console.log(w);