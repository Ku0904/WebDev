// in old languages(example C) freeing and reserving memory was on out hands as a programmer we need to think how much and where to allocate the memory space and it was more harder in languages like assembly
// but in newer languages we have automatic garbage collection we don't have much control over memory
// how is memory allocated in JS ?

// we have 2 types of memeory Stack(used in primitive) and Heap(used in non-primitive)
// whenever stack is just we get a copy of that variable
// whenever heap is just we get a refernce of original value

let SomeVariable1 = "SomeString1"; // this will be saved in stack
let SomeVariable2 = SomeVariable1;
SomeVariable2 = "SomeString2"// this change is not made in original value rather in a copy of original value
console.log(SomeVariable1);
console.log(SomeVariable2);

let user1 = {
    email : "SomeVariable1@gmail.com",
    number : 1234567890
}
let user2 = user1;
user1.email = "SomeVariable2@gmail.com";
console.log(user1);
console.log(user2);