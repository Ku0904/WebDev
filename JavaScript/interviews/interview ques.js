// 1 tell the out put
(function () {
  var a = (b = 3);
  // here var a = b var have functional scope so any value outside the scope is undefined ; b = 3 b is in global scope;
})();

console.warn(typeof a); // a is undefined cause no value is defined in stack
console.warn(typeof b); // b is a number

// 2
console.log(!!10 + 20); // !10 is false value so !!10 will be a true value which means 1

// 3
let x = 0;
console.log(x++);

// 4
console.log(3 + 4 + "5"); // string '75' first L to R converstion

// 5
console.warn(1 + "1" + "2"); // 122 concatenation
console.warn(1 + +"1" + "2"); // +"1" is converted to integer
console.warn("A" - "B" + "2"); // NaN2 (cause can subtract 2 strings + 2)
console.warn("A" - "B" + 2); // only NaN

// 6
var p = 0; // this is in global scope
function q() {
  p = 10; // this is in local scope
  return;
  var p = function () {};
}
q(); // calling q assign p = 10
console.warn(p);

// 7
// {} === {} false cause both have different memory location
// to make it same  var a = {}  var b = {}
