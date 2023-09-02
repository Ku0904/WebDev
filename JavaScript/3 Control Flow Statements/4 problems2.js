//1)use logical operators to find wheather the age of a person lies between 10 and 20 ?
//let age = prompt("what is your age ?"); as it is a client side language can't take input without 
let age = 15;
if (age > 10 && age < 20) {
    console.log("nicege");    
} else {
    console.log("sadge");
}

//2)demonstrate the use of switch case statement in js ?
switch (age) {
    case 12:
        console.log("your age is 12");
        break;
    case 13:
        console.log("your age is 13");
        break;
    case 14:
        console.log("your age is 14");
        break;
    case 15:
        console.log("your age is 15");
        break;
    default:
        console.log("your age is not special");
}

//3)print wheather you can drive or not age greater than 18 using ternary operator ?
let agee = 15;
let a = agee>18?"you can drive":"you cannot drive"
console.log(a)
//condition ? <expression if true> : <expression if false>
//The ternary operator is a simplified conditional operator like if / else