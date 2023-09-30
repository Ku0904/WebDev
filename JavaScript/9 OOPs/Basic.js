// Yes, JavaScript does have classes. They were introduced in ECMAScript 2015 (ES6) to provide a cleaner way to implement object-oriented programming patterns.
// However, it's important to understand that classes in JavaScript are primarily syntactic sugar over JavaScript's existing prototype-based inheritance model

// object oriented programming is a programming paradigm to group the data

// object :- collection of properties and methods example promise, toLowerCase and more we needed OOP for spaghetti code

// Object Literal :-
// Constructor function
// Prototypes
// Instances (new, this)

// 4 pillar of OPP
// 1st Abstraction
// 2nd Encapsulation
// 3rd Inheritance
// 4th Polymorphism

// example of Object Literal
const User = {
  username: "bruhman",
  age: 20,
  indian: true,

  GetUserDetail: function () {
    // console.log("Go to user detail from database");
    // console.log(`username: ${this.username}`); it will give error cause it will not take value from outside to we need to use this here
    console.log(this); //! this is current context and The "this" keyword is an alias(in this case User) for the name of the object
  },
};
console.log(User.username); //! this is a method
console.log(User.GetUserDetail()); // GetUserDetail is only reference
console.log(this); // this is current context which is global context in browser that context in window object(which is global object)

let myArr1 = [1, 2, 3];
let myArr2 = [1, 2, 3, 4, 5, 6];
// there 1,2,3 in both how  will I know which context I need to apply my logic this keyword helps us in this case

// example of Constructor function
// const promiseOne = new Promise();
// const date = new Date();
// new is used for making new context its a Constructor function
function UserDetail(Username, LoginCount, isLoggedIn) {
  this.Username = Username; // the 2nd Username is value we are passing in function and 1st Username is variable Username
  this.LoginCount = LoginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.Username}`);
  };

  return this; // this in this context is an Object
}
const User1 = new UserDetail("Bruhman", 9, true);
const User2 = new UserDetail("William", 69, false);
//over-rides user details from 1st one this is a problem that why we need new
console.log(User1);
console.log(User1.LoginCount);
console.log(User1.greeting());
console.log(User1.constructor); // reference of User1
console.log(User2);

// new creates an empty object called Instance then a Constructor function is called our arguments gets injected in empty object

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);
console.log(auto instanceof Car);
console.log(auto instanceof Object);
