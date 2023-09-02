//1) given a number x check if the number is even or odd
var x = 6;
if (x % 2 === 0) {
    console.log("the number is even");
} 
else {
    console.log("the number is odd");
}

//2) we all know about triangles but this time let's do something interesting 
//   given three integers a, b and c check if we form a triangle with the sides of the triangle having length a , b and c ?
var a = 10;
var b = 20;
var c = 0;

// if (a+b>c) {
//     console.log("triangle boy");
// }
// else if (a+c>b) {
//     console.log("triangle boy");
// } 
// else if (b+c>a) {
//     console.log("triangle boy");
// } 
// else {
//     console.log("not a triangle boy");
// }

if (a+b>c && a+c>b && b+c>a) {
    console.log("triangle boy");
} 
else {
    console.log("not a triangle boy");
}

//3) given the side length of a triangle in the form of 3 integers check if the given triangle is equilateral or scalene or isosceles ?
var p = 10;
var q = 20;
var r = 10;
if (p==q && q==r && r==p ) {
    console.log("equilateral triangle boy");
} 
else if(p!=q && q!=r && r!=p ) {
    console.log("scalene triangle boy");
}
else if (p==q || p==r || q==r ){
    console.log("isosceles triangle boy");
}
else {
    console.log("not a triangle boy");
}

