// 5. Available Products
// [
//  { name: "Laptop", stock: 5 },
//  { name: "Phone", stock: 0 },
//  { name: "Tablet", stock: 10 }
// ]
// Task
// • Remove out-of-stock products.
// • Return the names of available products. 

let products = [
    { name: "Laptop", stock: 5 },
    { name: "Phone", stock: 0 },
    { name: "Tablet", stock: 10 }
];

let availableProducts = [];

for(let product of products){

    if(product.stock > 0){
        availableProducts.push(product.name);
    }

}

console.log(availableProducts);