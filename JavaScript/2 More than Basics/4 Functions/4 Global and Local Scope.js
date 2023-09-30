// {} this is scope when it is used in something
let a = 100; //this is in global space it will be present in global object
// console.log(window.a);
// console.log(this.a);
if (true) {
  let a = 10; // this is not in global space
  const b = 30;
  var c = 30; // or c = 30 will also cause problems
  console.log("inner", a); // inner scope
}
// its scope is between line 2 and 6
// {} in if is block scope and the any thing declared outside will be in global scope
console.log("outer", a);
// console.log(b);
console.log(c); // this is one of the problems with var
// none of these should work cause all these variable are under scope

// scope in node and scope in browser are different
