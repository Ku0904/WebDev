// if
if (true) {
    // will execute
}
if (false) {
    // will not execute 
}

// comparisons :- < , > , <=  , >= , == , === ,!=  

let somevalue = true;
somevalue = false;
if (somevalue) {
    console.log("bro");
} // anything declated inside scope will work only inside the scope
else{
    console.log("nha bro");
}

if (true) console.log("this is not a good practice"),console.log("please don't write like this");

// nesting

if (true) {
    if (true) {
        if (false) {
            console.log("nothing");
        } else {
            console.log("something");
        }
    }
}
// logical operators
// Boolean Logic Gates(Boolean input Boolean output)
// AND/OR(it works with 2 operands) ,NOT(it works with 1 operand)
// AND -> &&
// OR -> ||
// NOT -> !

// truty values and falsey values
// Falsey values :- false, 0, -0, BigInt 0n, "", null, undefined, NaN
// Truty values :- "0", 'false', "false", " ", [], {}, function(){}, anything else that is not a falsey value 

let EmptyObject = {}
if (Object.keys(EmptyObject).length === 0) {
    console.log("object is empty");
}
let EmptyArray = []
if (EmptyArray.length === 0) {
    console.log("array is empty");
}

// do keep in mind '' == false , false == 0 , 0 == '' all this are true may come in handy

// Nullish Coalescing Operator (??): null undefined
let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? null
val1 = undefined ?? 12
val1 = null ?? 10 ?? 20
// if null/undefined value come it does a safety check
console.log(val1);

// Terniary operator
// conditon ? true : false 
let price = 100;
price >= 80 ? console.log("more than 80") : console.log("less than 80")