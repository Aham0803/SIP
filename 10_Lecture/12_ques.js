// 12. Product Prices
// [
//  { name: "Laptop", price: 50000 },
//  { name: "Phone", price: 20000 },
//  { name: "Tablet", price: 15000 }
// ]
// Task
// • Extract all prices.
// • Find the highest price. 

let products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 },
    { name: "Tablet", price: 15000 }
];

let prices = [];
let highestPrice = products[0].price;

for(let product of products){

    prices.push(product.price);

    if(product.price > highestPrice){
        highestPrice = product.price;
    }
}

console.log("Prices:", prices);
console.log("Highest Price:", highestPrice);