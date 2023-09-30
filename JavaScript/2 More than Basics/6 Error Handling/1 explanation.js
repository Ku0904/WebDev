// A 'bug' refers to an issue in your code that causes the program to produce inconsistent or incorrect results.
// Bugs can be caused by a variety of things, such as logic failures, edge cases, miscommunication, third-party software, and versioning problems.
// They might not break your program entirely, but they can produce unexpected results or behaviors

// 'error' refers to a coding or programming mistake, often due to incorrect syntax or faulty loops.
// Errors emerge from the source code, caused by inconsistencies or outright fallacies in the internal code structure.
// They are anomalies triggered by misconceptions, oversights, or misunderstandings from the developer's end

// most common errors Syntax Error(incorrect syntax or not using ; will give syntax error) , Type Error((5).pop is type error), Reference Error(when a value is not defined, but you attempt to use it in your code), RangeError( (10).toString(100); radix argument must be between 2 and 36 )

// try {
// we throw our code here
// } catch (error) {
// do something with the error here
// }
// throw new ReferenceError(); use this if you want to throw an error
try {
  console.log(a + b); // the code that may possibly throw error
} catch (error) {
  console.log(`${error}`);
  console.log(error);
  console.log("the error is now saved in error log");
}
console.log("My Program does not stop");

function addTwoNums(a, b) {
  try {
    if (typeof a != "number") {
      throw new ReferenceError("the first argument is not a number");
    } else if (typeof b != "number") {
      throw new ReferenceError("the second argument is not a number");
    } else {
      console.log(a + b);
    }
  } catch (err) {
    console.log("Error!", err);
  }
}
addTwoNums(5, "5");
console.log("It still works");

// throw new Error("Required"); more example throw new TypeError(); Throws a new Error object
