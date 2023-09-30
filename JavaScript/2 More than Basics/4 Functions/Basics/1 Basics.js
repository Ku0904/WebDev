// there are mostly two type of programing paradigms in use
// 1st functional programming and 2nd object oriented programming

// in functional programming we first define data then create our functions
// in object oriented programming we combine both data and functions into one object

function SomeFucntion(Number) {
  // return is jaha sa aya ha vahi wapis chala ja
  return Number * 5;
}
SomeFucntion(5); // we invoked(call) the function at 11th line the program will go to 7th now when the whole function run and returns it will give control again to 11th line
// return can take values with it as well

// function myDay() {
//   console.log("Morning");
//   console.log("Afternoon");
//   console.log("Evening");
//   myDay();
// }
// this function will run infinitly as there is no condition to stop it

var x = 1;
console.log(x);
a();
b();
function a() {
  var x = 10;
  console.log(x);
}
function b() {
  var x = 100;
  console.log(x);
}

// Basically What Happens here is in debugger
// 1st GEC made x = undefined in in memory phase -> x = 1 in code phase which getted saved in memory phase before getting popped then x is popped then a() invoked [every invocation makes 2 phase] 1st x undefined then given the value in local 2nd phase then a() is poped then same when b invoked same things happen then b is popped then GEC also gets popped
