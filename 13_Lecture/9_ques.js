// avg  marks of student

const marks = [80,90,70,60];

// find avg

const avg = marks.reduce((total,mark) => total+mark , 0) / marks.length;


console.log(avg);