// Immediately Invoked Function Expressions (IIFE)
// we have a function we wanna that we don't want in global namespace and it should be Immediately invoked

(function () {
  console.log("bruhman");
})();
// first () for defining function and second () for execution call
// to solve the problem of global scope pollution to remove that

// IIFE in arraow function
((Name) => {
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

// why do we use it ?

// 1st Avoiding Global Namespace Pollution
(function () {
  var localVariable = "I am local!";
  console.log(localVariable); // Outputs: 'I am local!'
})();
console.log(localVariable); // Outputs: undefined
// localVariable is not accessible outside the IIFE because it is not in the global scope

// 2nd Creating Privacy JavaScript does not have built-in support for private variables
// The concept of closures in JavaScript allows a function to access all variables that were in scope when the function was declared.
// This means that an IIFE can return a function that has access to its local variables, even after the IIFE has finished executing

// 3rd Module Pattern

// but now we have modules that makes our life hella easy
