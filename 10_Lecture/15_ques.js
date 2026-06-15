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
