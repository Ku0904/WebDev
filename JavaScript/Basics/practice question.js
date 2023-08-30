let str = "hello how are you";

// 1 convert str in only 1 array
let str1 = Array(str);
console.log(str1);
console.log(typeof(str1));
// or 
console.log(str.split());

// 2 convert str to array each characher
console.log([...str]); // spread operator
// or 
console.log(str.split(''));

// 3 convert string to array with space or any sequence
console.log(str.split(' '));
console.log(str.split('h')); // on basis of h

// 4 replace any character 
console.log(str.replace('hello' , "hi")); 
console.log(str.replace(/hello/g , "hi")); // for global

// 5 get substring from string
console.log(str.substring(0,5)); // 16 in total

// 6 remove last character
console.log(str.substring(0,str.length-1));

// 7 remove first character
console.log(str.substring(1,str.length));

// 8 remove string before specific character
console.log(str.substring(-str.length,5));
// or
let temp = str.split(' ')
console.log(temp[0]);

// 9 reverse the string
console.log(str.split('').reverse().join(''));

// 10 remove extra spaces from both sides
let str2 = "  bro  ";
console.log(str2.trim());
