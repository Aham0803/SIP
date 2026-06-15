// 2. Total Revenue
// [
//  { category: "Electronics", amount: 500 },
//  { category: "Books", amount: 100 },
//  { category: "Electronics", amount: 300 }
// ]
// Task
// • Find the total revenue from all sales. 

let sales = [
    { category : "Electronics" , amount :500},
    { category : "Books" , amount :100},
    { category : "Electronics" , amount :300}
];

let totalrevenue = 0;
for (let sale of sales){
    totalrevenue += sale.amount;
}

console.log( "total is " + totalrevenue);