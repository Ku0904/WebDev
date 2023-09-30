// Hoisting is JavaScript's default behavior of moving declarations to the top

console.log(x); // trying to access variable that is defined later in 1st phase of EC undefined is allocated
var x = 7; // if we comment this out we get error(cause x is nowhere in the memory and we are trying to access it) if we use let or const we will get error too cause they can't hoist a variable

GetName1(); // error because cause whenever we define something as function keyword it move to above all the code we call it Hoisting Functions
GetName2(); // we only get error for 2nd function cause var, let, const and arrow functions and not Hoisting Functions
function GetName1() {
  console.log("Bruhman");
}
const GetName2 = () => {
  console.log("Bruhman");
};
