// interview questions
// what is the difference between primitive(call by value) and non primitive(call by reference) ?

// primitive 7 types : string,number,bitint,boolean,null,undefined and symbol
let x = 69;
let y = x;
y = 420;
x = 0;
console.log(x);
console.log(y);
//call by value here "y" is a copy of "x" and and does not reference the same memory location as "x" used in primitive data type

// reference(non primitive) : array,objects,functions
let obj1 ={
    name:'kunal rawat', 
    age:20
}
let obj2 = obj1;
obj2.name = 'bruhman';
obj1.age = 68;
console.log(obj1);
console.log(obj2);
//call by reference "obj2" reference the same memory location as "obj1" used in non primitive data type

// javascript is static or dynamic typed language ?
// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them
let a = 10; // I didn't tell js this is a number

const id1 = Symbol('123')
const id2 = Symbol('123')
console.log(id1 === id2);
console.log(id1 == id2);
// even for same value different return value

const bigNumber = 9007199254740991n;
// would not probably we used in production

const Array = ["k","u","n","a","l"]
let object = {
    something:"string",
    number:99
}
let MyFunction = function(){
    console.log("bruhman");
}
MyFunction()

// how to know datatype of something
console.log(typeof(bigNumber))
console.log(typeof(object))
console.log(typeof(Array))
console.log(typeof(MyFunction))// actually this is object function
console.log(typeof(null))//because of how old js defined objects back then all values were 32 bits last 3 bits(type tags) used to know typeof with  
// null is absence of other values,null is absence of meaningful values so last 3 bits of null are 000 which indicates object