console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);
//typescript does not allow to compare different datatypes because its not a good practice

console.log(null > 0);
console.log(null == 0);
console.log(null <= 0);
console.log(null >= 0);
// these are unpredictable comparision
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined <= 0);
console.log(undefined >= 0);
//avoid these comparisions and write clean code

// strict check === will check datatype as well
console.log("2" === 2);
console.log("2" == 2);