// Js Execution Context - code execution environment. It determines the scope of variables, objects, and functions when the code is running

// {} -> global Execution Context (GEC) It gets created when the JavaScript file is loaded in the browser it refers to this in browser(anonymous in call stack is global EC in debugger)
// Function Execution Context (FEC)
// Eval Execution Context (EEC)

// GEC runs in two phase
// 1st phase memeory creation phase (creation phase )
// 2nd phase execution phase

/*-----------------Call Stacks-----------------*/
// it have many names Call stack, EC stack, Program stack, Control stack, Runtime stack, Machine stack
// LIFO last in, First out (push and pop) //? Browser ma function one push hua print hote hii pop ho gaya

function one() {
  // functions get stored in form of key:values in global EC
  console.log("one");
  two();
}
function two() {
  console.log("two");
  three();
}
function three() {
  console.log("three");
}
one();
two();
three();

// whenever a function is invoked new Execution Context is made and we can have many EC indside EC's
// so it uses call stack to make it's life easier
