

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


// filter
// tumhari condition check krega
// joh bhi element condition pass hoga woh new array me jayega

const even = array.filter(function(x){
    return x% 2 == 0;
});

const odd = array.filter(x => x%2 != 0);
console.log(even);
console.log(odd);

// reduce
// saare elements ko ek variable me convert kardega

const sum = array.reduce(function(sum , x){
    return sum + x;
} , 0);

console.log(sum);

const sum1 = array.reduce(function(sum , x){
    return sum+x;
});

const sum2 = array.reduce((sum,x) => sum + x , 0);
const sum3 = array.reduce((sum,x) => sum + x );

console.log(sum);
console.log(sum1);
console.log(sum2);
console.log(sum3);

// find
// jaise hi condition satisfy hui bese hi return kr do
const f = array.find(function(x){
    return x == 3;
});
const fdemo = array.find(x=> x == 3);
console.log(f);
console.log(fdemo);

// some()
// btata hai ki conditon kuch elemnsts satisfy kr rhe ya nhi
const s = array.some(function(x){
    return x > 3;
});

const sdemo = array.some( x => x > 3);
console.log(s);
console.log(sdemo);


// every()
// btata he ki saare elements satisfy condition kr rhe he ya nhu
const e= array.every(function(x){
    return x > 5;
});

const edemo = array.every(x => x>5);
console.log(e);
console.log(edemo);