

// 7. Highly Rated Movies
// [
//  { title: "Movie A", rating: 8.5 },
//  { title: "Movie B", rating: 6.0 }
// ]
// Task
// • Keep only movies with rating greater than 8.
// • Return movie titles. 

let movies = [
    { title: "Movie A", rating: 8.5 },
    { title: "Movie B", rating: 6.0 }
];

let titles = [];

for(let movie of movies){

    if(movie.rating > 8){
        titles.push(movie.title);
    }

}

console.log(titles);