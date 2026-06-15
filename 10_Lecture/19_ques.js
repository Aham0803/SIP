// 19. Product Discount
// [
//  { name: "Laptop", price: 50000 },
//  { name: "Phone", price: 20000 }
// ]
// Task
// • Apply a 10% discount to every product.
// • Return the updated prices. 

let products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 }
];

let updatedPrices = [];

for (let product of products) {

    let discountedPrice = product.price * 0.9;

    updatedPrices.push(discountedPrice);
}

console.log(updatedPrices);