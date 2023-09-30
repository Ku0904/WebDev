// Closure is a function that has access to its own scope, the scope of the outer function, and the global scope. This means that a closure can access variables from three different scopes
function FunctionName1() {
  var a = 7;
  function FunctionName2() {
    console.log(a);
  }
  return FunctionName2;
  // FunctionName2 is a Closure
}
var someVar = FunctionName1();
someVar();

function SomeFunction1(variable1) {
  return function SomeFunction2(variable2) {
    // SomeFunction2 is a closure
    console.log(variable1);
    console.log(variable2);
  };
}
let x = SomeFunction1(420); // when we call SomeFunction1 we get SomeFunction2 in return
// x is referring to SomeFunction2 which is inside SomeFunction1
// so basically when we called SomeFunction1 we got a closure[its function with its lexical scope] in return
x(4200);

function p() {
  var sometNumber1 = 2049;
  function q() {
    var sometNumber2 = 2050;
    function r() {
      console.log(sometNumber1, sometNumber2); // reference of sometNumber1 and sometNumber2 for every function called they will find there refrences
    }
    r(); // this is still a closure
  }
  q();
}
p();

// they are used in
// 1st Module Design Pattern
// 2nd Currying
// 3rd Function like once
// 4th memoize
// 5th maintaining state in asyn world
// 6th setTimeouts
// 7th Iterators
// 8th and many more ...
