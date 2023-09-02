// Immediately Invoked Function Expressions (IIFE)

(function () {
    console.log("bruhman");
})(); 
// first () for defining function and second () for execution call
// to solve the problem of global scope pollution to remove that 

// IIFE in arraow function
( (Name) => {
    console.log(`Some text ${Name}`);
})("bro");

// Named IIFE
(function chai() {
    console.log("bruhman");
})(); 

// IIFE inside an IIFE
(function () {
    (function () {
        console.log("bruhman");
    })(); 
})(); 
