function NameOfFunction() {
    console.log("Bruhman");
}
NameOfFunction();
console.log(typeof(NameOfFunction));

function AddTwoNumbers(Number1,Number2) {
   console.log(Number1 + Number2);
}
const result = AddTwoNumbers(3,4)
console.log("Result: " , result);
AddTwoNumbers(3,"a")
AddTwoNumbers("3","4")
AddTwoNumbers("3",null)
AddTwoNumbers(3,null)
AddTwoNumbers("3",undefined)
AddTwoNumbers(3,undefined)
// we need to what values to take in input

function AddTwoNumbersAndReturn(Number1 , Number2) {
    let results = Number1 + Number2;
    return results
    // return Number1 + Number2; it is stored in a variable
    //after return noting gets printed
 }
const results = AddTwoNumbersAndReturn(3,4)
console.log("Result:" , results);

function MyFunc1(username = "sam") { // setting up a default value
    // if (username === undefined) {
    //     console.log("please enter an username");
    // } for undefined conditon which we can prevent with default value
    return `${username} just doing stuff`
}
console.log(MyFunc1("kunal"));
console.log(MyFunc1());
