// 1 tell the out put 
(function () {
var a=b=3 
// here var a = b var have functional scope so any value outside the scope is undefined ; b = 3 b is in global scope;  
})
()

console.warn(typeof a); // a is undefined cause no value is defined in stack
console.warn(typeof b); // b is a number 

// 2 
console.log(!!10+20); // !10 is false value so !!10 will be a true value which means 1

// 3 
let x = 0;
console.log(x++);

// 4
console.log(3+4+'5'); // string '75' first L to R converstion