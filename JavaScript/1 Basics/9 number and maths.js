const Number1 = 69;
const Number2 = new Number(420);
const Number3 = 9.042003;
const Number4 = 100000;
console.log(Number1);
console.log(Number2);
console.log(typeof(Number1));
console.log(typeof(Number2));

console.log(Number2.toString()); // converts to string to get extra properties
console.log(Number2.toString().length);
console.log(Number2.toFixed(2));// for precision value mostly used in e commerce apps
console.log(Number3.toPrecision(5)); // precision till that value also round of values
console.log(Number4.toLocaleString('en-IN'));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
// and such more functions

/*----------------------Maths----------------------*/

console.log(Math);
console.log(typeof(Math));
console.log(Math.abs(-4)); // absolute converts only -ve to +ve
console.log(Math.round(3.9));
console.log(Math.ceil(4.2)); // jaza sa bhi bada hua next number
console.log(Math.floor(4.9)); // take lowest value 
console.log(Math.min(3,4,5,6));
console.log(Math.max(3,4,5,6));

console.log(Math.random()); // values between 0 to 1
console.log(Math.random()*10 + 1); // values between 1(inclusive) to 11(exclusive)
console.log(Math.floor(Math.random()*10 + 1));

const min = 1;
const max = 100;

console.log(Math.floor((Math.random() * (max - min + 1))) + min);
