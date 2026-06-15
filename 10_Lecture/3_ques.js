// 3. Count Words
// "The fox is quick. The fox is smart."
// Task
// • Convert all words to lowercase.
// • Count how many times the word "fox" appears. 

let text = "The fox is quick. The fox is smart.";
text = text.toLowerCase();
let words = text.split(" ");
let count  = 0;
for (let word of words){
    if(word == "fox"){
        count++;
    }
}

console.log(count);