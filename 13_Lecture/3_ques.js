// filter long words

// keep words having 

const animals = ["aaple" , "banana" , "cat" ,"elephant","dog"];
const q3 = animals.filter(function(animal){
    return animal.length > 5;
})

const q = animals.filter(animal => animal.length >5);
console.log(q3);
console.log(q);