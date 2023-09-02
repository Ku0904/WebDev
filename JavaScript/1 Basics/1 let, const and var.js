// we store in memeory space (variable or constant)
const VariableName1 = 12345 
let VariableName2 = "some-one"
var VariableName3 = "12345" // we don't usually use var much cause var is function-scoped means var outside the function is globally scoped
//! <!-- HTML file -->
// <script src="file1.js"></script> 
// <script src="file2.js"></script>
//! file1.js
// var x = "Hello";
//! file2.js
// var x = "World";
//* In this case, the value of x will be "World", because file2.js was loaded after file1.js, 
//* and the var declaration in file2.js overwrote the var declaration in file1.js
/* prefer not to use var */

VariableName = "bruhman" //global variable can lead to unexpected results in large codebases

// VariableName1 = 1234     error
// VariableName2 ="no-one"  no error
// VariableName3 ="Willam"  no error

console.log(VariableName1);
console.log(VariableName2);
console.log(VariableName3);
console.table([VariableName1,VariableName2,VariableName3,VariableName])

let SomeVariable;
console.log(SomeVariable);