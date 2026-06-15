
// 11. GitHub Stars
// [
//  { repo: "A", stars: 100 },
//  { repo: "B", stars: 200 }
// ]
// Task
// • Find the total number of stars. 

let repos = [
    { repo: "A", stars: 100 },
    { repo: "B", stars: 200 }
];

let totalStars = 0;

for (let repo of repos) {
    totalStars += repo.stars;
}

console.log(totalStars);
