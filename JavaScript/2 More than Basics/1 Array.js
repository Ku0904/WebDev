// array
const Array1 =  [0 , 1 , 2 , 3 , 4 , 5];
const Array2 =  ["kunal" , "rawat" , "bruhman"];
const Array3 = new Array(69,420,0);

console.log(typeof(Array1));
console.log(Array1);
console.log(Array1[0]);
console.log(Array1);

// array methods
Array1.push(6);
console.log(Array1);
Array1.pop();
console.log(Array1);
Array1.unshift(7);
console.log(Array1);
Array1.shift();
console.log(Array1);

console.log(Array1.includes(9));
console.log(Array1.indexOf(9));
console.log(Array1.indexOf(3));
console.log(Array1.join()); // converts array values to string
console.table([Array1.reverse()]);

// slice and splice
console.log("original ",Array1);

const MyArr1 = Array1.slice(1,3); // only include 1 2
console.log("A ",Array1);
console.log("B ",MyArr1);

const MyArr2 = Array1.splice(1,3);
console.log("A ",Array1);
console.log("B ",MyArr2);