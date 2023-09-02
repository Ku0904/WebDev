// to repeat a comand again and again
// variable initialization
// while (condition) {
//      logic
// }
// wtire a programn to print 1 to 10 no.
console.log("start 1"); 
let i = 1;
while (i<=10) {
     console.log(i);
     i++;
}
console.log("End 1");
// what is the difference between if and while ?
// if will only check the condition once doesn't matter if the condition is true or false it will only check it once
// for a while loop it will execute and checks and repeat the process till it becomes false

// i++(post increment) and ++i(pre increment)
let p = 10;
console.log(p++);// here p is 10 it increment in second output
console.log(p);// so here the value will be 11
let q = 10;
console.log(++q);// here the q is become 11
console.log(q);// so q is 11 so we will get 11

// Write a program to calculate sum of all the no. from 1 to 10
console.log("start 2");  
let x = 1;
let ans = 0;
while (x<=100) {
     ans+=x;//ans=ans+x
     x++;//x+=1 and x=x+1
}
console.log(ans);  
console.log("End 2");

// wtire a programn to print 10 to 1 no.
console.log("start"); 
let A = 10;
while (A>=1) {
     console.log(A);
     A--;//A-=1
}
console.log("End");

let MyArr = ['1','2','3'];
let Arr = 0;
while (Arr < MyArr.length) {
    console.log(`value is ${MyArr[Arr]}`);
    Arr++;
}

// do while loop used very rarely if score is assumed 11 cause kam phele hua orr condition baad ma check hua
let score = 1;
do {
    console.log(`score is ${score}`);
    score++
} while (score <= 10);