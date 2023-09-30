// objects
// 2 ways to declare literal(not singleton) and constructor(singleton)

const MySymbol = Symbol("key1");
const User1 = {
    name: "bruhman",// here we can define our on keys/elements
    age: 20,
    email:"bruhman@gmail.com",
    whereareyou:true,
    extra:["1","2"],
    "damn":"god damn",
    [MySymbol]: "SomeKey"
}// literal

console.log(User1);
console.log(User1.name);
console.log(User1.extra);
console.log(User1["damn"]);
console.log(typeof(User1["damn"]));
console.log(User1[MySymbol]); // add symbol in object keys to print
console.log(typeof(User1[MySymbol]));

User1.email = "bruhman0904@gmail.com";
// Object.freeze(User1);
// User1.email = "bruhman0904@gmail.in";
// console.log(User1);

User1.greeting1 = function () {
    console.log("william");
}
User1.greeting2= function () {
    console.log(`hello ${this.name}`);
}
console.log(User1.greeting1);
console.log(User1.greeting1());
console.log(User1.greeting2);
console.log(User1.greeting2());
