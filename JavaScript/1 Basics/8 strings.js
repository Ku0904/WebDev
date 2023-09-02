let string1 = "Kunal"; //string literal
const Number = 20;
// console.log(string1 + Number +" Value"); old way
console.log(`hello my name is ${string1} and my age is ${Number}`); // new way

// one more way to declare
const string2 = new String('Rawat-ok'); //string object
console.log(typeof(string2));
console.log(string2[0]);
console.log(string2.__proto__);// logs String {length: 0, [[PrimitiveValue]]: ""}
// every object has a __proto__ property, which is a reference to the prototype of the object's constructor function. 
// This prototype object contains methods and properties that are shared among all instances of the object

console.log(string2.length);
console.log(string2.toUpperCase());// original value is not changed on a copy of original value
console.log(string2.charAt(2));
console.log(string2.indexOf('R'));
console.log(string2.split('-'));

const string3 = string2.substring(0,4);//if we give -ver values like -8,4 it will not obey and convert it into 0,4
console.log(string3);

const string4 = string2.slice(-6,5);
console.log(string4);

let str = "This is a string";
console.log(str.slice(10, 4)); // returns ""
console.log(str.substring(10, 4)); // returns " is a"
console.log(str.slice(-6)); // returns "string"
console.log(str.substring(-6)); // returns "This is a string"

const string5 = "  name  ";
console.log(string5);
console.log(string5.trim());

const url = "www.%20google.com";
console.log(url.replace('%20',''));
console.log(url.includes('google'));

// there are many more things you can do with strings these are only few (https://youtu.be/VRz0nbax0uI) for more do search them up
/* 

var stringOne = "freeCodeCamp is the best place to learn"
var stringTwo = "frontend and backend development"

// charAt()
console.log(stringOne.charAt(1))

// charCodeAt()
console.log(stringOne.charCodeAt(1))

// concat()
console.log(stringOne.concat(stringTwo))

// endsWith()
console.log(stringOne.endsWith("to"))

// fromCharCode()
console.log(String.fromCharCode(114))


// includes()
console.log(stringTwo.includes("end"))


// indexOf()
console.log(stringTwo.indexOf("end"))

// lastIndexOf()
console.log(stringTwo.lastIndexOf("end"))

// match()
console.log(stringTwo.match(/end/g))

// repeat()
console.log(stringOne.repeat(3))


// replace()
console.log(stringTwo.replace(/end/g, "END"))

// search()
console.log(stringTwo.search("end"))

// slice()
console.log(stringTwo.slice(2, 4))

// split()
console.log(stringOne.split(" "))

// startsWith()
console.log(stringOne.startsWith("free"))

// substr()
console.log(stringTwo.substr(2, 4))

// substring()
console.log(stringTwo.substring(2, 4))

// toLowerCase()
console.log(stringOne.toLowerCase())

// toUpperCase()
console.log(stringOne.toUpperCase())

// trim()
var stringThree = "     Subscribe now!      ";
console.log(stringThree.trim())
*/

