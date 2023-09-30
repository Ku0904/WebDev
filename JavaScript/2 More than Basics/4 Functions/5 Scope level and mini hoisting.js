var a = 10;
let b = 20;
const c = 30;
{
  // block is also known as compound statment
  // we group multiple statements in a block so we can use it where js expect atleast 1 statement
  var a = 1; // this var will shadows the global variables we call it shadowing
  let b = 2; // shadowing in let
  const c = 3; // shadowing in const
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);
console.log(b);
console.log(c);
// now we have 3 scope here Global Scope [wehre var is] ,Script Scope [where let and const is] and Block Scope [a seperate object we seperate scope]

if (true) {
  /*if we only try to print if (true) err cause if() expect atleast 1 statement*/
}
// a block have multiple satements
if (true) console.log("smh");

// shadowning happens in function as well
function extra() {
  const c = 300;
  console.log(c);
}
c();
console.log(c);

// illegal shadowing
let someVariable1 = 420;
{
  var someVariable1 = 3000; // this is illegal shadowing we will get error
}
var someVariable2 = 90;
{
  let someVariable2 = 900; // this is cool will work we can shadow like this
  // now in this case let is not going out of its bounries {} block scope but var will go so that's why it gives error
}
let someVariable3 = 111;
function SomeFunction() {
  var someVariable3 = 1111; // this is also fine var will not interfere with let
}

// Block Scope is also Lexical Scope
// arrow functions works the same with all the simple function scope rules

// nested scope
function one() {
  const username = "bruhman";

  function two() {
    const website = "github";
    console.log(username);
  } // two() scope is only from  line 5 to line 8
  // console.log(website);

  two();
}

one(); // anything inside scope 2 will work in 1 cause (parent child relation)

if (true) {
  const username = "bruhman";
  if (username === "bruhman") {
    const website = "github";
    console.log(username + " " + website);
  }
  // console.log(website); error cause out of scope
}
// console.log(username); error cause out of scope

/*--------------------------interesting*--------------------------*/
// console.log(addone(4)); no error cause used before but not declaration
console.log(addone(4));
function addone(num) {
  return num + 1;
}
console.log(addone(4));
// console.log(addtwo(4)); error cause used before declared
const addtwo = function (num) {
  return num + 2;
};
console.log(addtwo(4));

// A lexical environment is a data structure that holds identifier-variable mapping
// 'Lexical' in order or in hierarchy is lexical like two() is lexically inside one() if two() calls for something inside one() it will lexically search for it in parent
// we call this scope chain
// whenever EC created lexical environment(local memory along with lexical environment of its parent) created
