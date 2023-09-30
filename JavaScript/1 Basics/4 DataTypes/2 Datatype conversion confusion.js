let Number1 = 69;
let Number2 = "69abc";
let Number3 = null;
let Number4 = undefined;
let Number5 = true;
console.log(typeof Number1);
console.log(typeof Number1);
console.log(typeof Number2);

let valueInNumber1 = Number(Number2); // converting string to number
console.log(typeof valueInNumber1);
console.log(valueInNumber1); // js have problems in conversion that one use case for typescript

let valueInNumber2 = Number(Number3); // converting null to number
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

let valueInNumber3 = Number(Number4); // converting undefined to number
console.log(typeof valueInNumber3);
console.log(valueInNumber3);

let valueInNumber4 = Number(Number5); // converting boolean to number
console.log(typeof valueInNumber4);
console.log(valueInNumber4);

let SomeValue = ""; // just like this we can convert numbers,string,null,undefined,""(empty value) and 0
let ConvertedSomeValue = Boolean(SomeValue);
console.log(typeof ConvertedSomeValue);
console.log(ConvertedSomeValue);

// just like this we can convert string to numbers,boolean,null,undefined,"" and 0
