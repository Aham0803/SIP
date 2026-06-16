// length
// String ki size btayega
let name = "dhihffhdso";
console.log(name.length);

// touppercase
// sbko capital me convert kardega
console.log(name.toUpperCase());

// tolowercase
// sbko lower me convert kardega

let name1 = "KANISHKA";
console.log(name1.toLowerCase());

// trim
// space ko trim kardega left and right side both

let g = "            arya     ";
console.log(g.trim());
console.log(g.trim().length);

// includes
let q = "javascript is not awesome";
console.log(q.includes("no"));

// starts width
// btata hai ki aisa koi word joh string me start ho rha he

let w = "Ashutosh is a boy";
console.log(w.startsWith("Ashuq"));

// ends with
// btata ha ki koi word usse end ho rha ha ya nhi
 let e = "sjiidsif fjosofs jsdiifjodsjf jpodsjfiopdsj";
 console.log(e.endsWith("dwo"));

//  indexof
// index btayega ki koon sa index pr word ha
console.log(e.indexOf("hhi"));

// lastindexof\\
// piche se uska index dekhne lgega
console.log(e.lastIndexOf("ilho"));


// slice
// range me jitne elements padhe hai woh return krega
console.log(e.slice(2,19));

// substring
// 
console.log(e.substring(1,32));