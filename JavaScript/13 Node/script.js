// Node.js allows you to run JavaScript on the server
// it comes with a package manager which is npm
// with which we can use different npm packages

// testing
// we use javascript testing frameworks example MochaJS, Jest(it also have code coverage,Jest can be used to write unit tests), Jasmine, Karma, Puppeteer (Node Library) and more
// test are betting than comments

// in jest
// function concatStrings(strA,strB) {
//     return strA + strB;
// }
// expect(concatStrings("abc","def")).toBe("abcdef") we will say out test our passing
// test pass (green) and test don't pass (red) we use this for red-green-refactor-cycle basis of test driven development (TDD)
//? in TDD 1st write failing test 2nd re-write code to pass 3rd optimize code without changing its results
// it give us conciseness, clarity and repeatability
// refactoring :- updating code, without affecting the results it produces

// types of testing
// 1st e2e(end to end testing) use the software like the user would this takes a lot of time frameworks for this webdriverJS,protrator,cypress
// 2nd integration how seprate parts of software work with each other we react testing library , enzyme more cost effective
// 3rd unit unit testing involves the process of testing the smallest units of your source code in isolation example a function
// unit test > integration test >e2e test

// mocking in jest is a technique to isolate test subjects by replacing dependencies with objects that you can control and inspect
// mocking don't need backend mock provides data to test on
// in build mocking functions , facilitates asynchronous code and snapshot testing

function AddFive(val) {
  return val + 5;
}
module.export = AddFive;
// npm init -y then npm install --save-dev jest in package.json "test": "jest"
