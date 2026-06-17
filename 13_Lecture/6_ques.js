//  get squares of even numbers

const nums = [1,2,3,4,5,6,7,8];

// return squares of only even number

const e = nums.filter(num => num%2 == 0).map(num => num*num);
console.log(e);