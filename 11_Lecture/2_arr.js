

// using Array constructor
let fruit = new Array("Apple" , "Banana");

//  Accessing elements


let fruits=["APPLE","BANANA","MANGO","DINESH"];
//lenth 
//array ka size batana
console.log(fruits.length);
// push
//array ke ander element dall dega
//last me element dalega
fruits.push("watermelon");
//pop
//emelnent remve kardega last se 
fruits.pop();
console.log(fruits);
// UNSHIFT
fruits.unshift("watermelon");
console.log(fruits);
//shift 
//shuru ka index me joh value hai usko remove kardega
 fruits.shift();
 console.log(fruits);
 //includes
 //check karta hai ki element present hai yah nahi
 console.log(fruits.includes("MANGO"));
 console.log(fruits.includes("watermelon"));
 // indexof
//USS ELEMENT KA INDEX KA RETURN KARDGA
 console.log(fruits.indexOf("MANGO"));
 //JOIN
 console.log(fruits.join("_"));
 // slice 
 //element tayaega uss range ka 
 console.log(fruits.slice(1,3));
// splice
// ELEMENT BATAYEGA USS RANDE KE RIGHT BOUND SE JJUST PEHLE 
console.log(fruits.splice(1,4));

// normal for loop
console.log("normal loop")
 fruits=["APPLE","BANANA","MANGO","DINESH"];
for(var i = 0 ; i < fruits.length ; i++){
    console.log(fruits[i]);
}

//  for of loop
console.log ("for of loop")
for(let i of fruits){
    console.log(i);
}

//  for each
console.log("for each loop")
fruits.forEach(function(i){
    console.log(i);
})

array = [1,2,3,4,5,6,7,8,9,10];
// Advanced array method
//  map
// saare elements par condition appply kardega

const double = array.map(function(x){
    return x*2;
});

const demodouble = array.map(x => x*2);

console.log(double);
console.log(demodouble);



