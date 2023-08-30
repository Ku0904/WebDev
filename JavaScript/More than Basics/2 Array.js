const Array1 =  [0 , 1 , 2 , 3 ,[4 , 5 , 6 , [ 7 , 8 ]]];
const Array2 =  ["kunal" , "rawat" , "bruhman"];
const Array3 =  ["lisa" , "hati" , "idk"];
const Array4 = new Array(69,420,0);

// Array2.push(Array3);
// console.log(Array2); array inside a array (array koi bhi data la leta ha even different datatypes)

// const combine = Array2.concat(Array3);
// console.log(combine); console.log(Array2.concat(Array3));

const MyArr1 = [...Array2,...Array3]; //values spreadout ho gai 
console.log(MyArr1);

const MyArr2 = Array1.flat(Infinity)
console.log(MyArr2);

console.log(Array.isArray("bruhman")); // tells if array or not
console.log(Array.from("bruhman")); // converts to array
console.log(Array.from({name :"bruhman"})); // interesting we have to tell to make array from keys or elements but will be used a lot in projects 

let Value1 =11;
let Value2 =22;
let Value3 =33;
console.log(Array.of(Value1,Value2,Value3));

// will learn more about arrays from projects
