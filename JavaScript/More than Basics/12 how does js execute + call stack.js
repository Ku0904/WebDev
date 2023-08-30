// Js Execution Context - code execution environment. It determines the scope of variables, objects, and functions when the code is running

// {} -> global Execution Context (GEC) It gets created when the JavaScript file is loaded in the browser it refers to this in browser 
// Function Execution Context (FEC)
// Eval Execution Context (EEC)

// GEC runs in two phase 
// 1st phase memeory creation phase (creation phase )
// 2nd phase execution phase

/*-----------------Call Stacks-----------------*/
// LIFO last in, First out (push and pop)

function one() {
    console.log("one");
    two()
}
function two(){
    console.log("two");  
    three()
}
function three(){
    console.log("three");  
}
one()
two()
three()
