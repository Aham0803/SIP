// convert names to uppercase

const names = ["gagan" , "ishan" , "yogesh"];

const uppername = names.map(name => name.toUpperCase());
const q1 = names.map(function(name){
    return name.toUpperCase();
})

console.log(uppername);
console.log(q1);