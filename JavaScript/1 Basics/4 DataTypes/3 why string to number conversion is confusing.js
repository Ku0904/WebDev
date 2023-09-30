/* Operations */

let value = 3;
let negvalue = -value;
console.log(negvalue);

console.log(2 + 2 - 2 * 2 ** 2 / 3 % 2);

let str1 = "kunal";
let str2 = "rawat";
let str3 = str1 + str2;
console.log(str3);

// special cases
console.log(1+"2");
console.log("1"+"2");
console.log("1"+ 2 + 2);
console.log(1+2+"2");
// don't depend on conversion they don't have much use in real life

console.log(true);
console.log(+true);
console.log(+"");
// console.log(true+); error
let num1,num2,num3;
num1 = num2 = num3 = 2+2; 
//bad way to code

// prefix and postfix operators
let a = 3;
const b = ++a;
console.table([a,b]);
let x = 3;
const y = x++;
console.table([x,y]);

let p = 1;
// console.log(p++); console.log(++p);
console.log(p);


