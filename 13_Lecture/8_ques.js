// names of passed student

// pass marks = 40

const students =[
    { name:"A" , marks :35},
    {name :"B" , marks : 75},
    {name : "C" , marks : 45},
    {name :"D" , marks : 25}
];

//  return ["B" , "C"]

const pass = students.filter(stu => stu.marks > 40).map(stu => stu.name);
console.log(pass);