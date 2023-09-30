function CreateUser(name, age) {
  return { name: name, age: age, extra: true };
}
const user1 = CreateUser("Kunal", 20);
console.log(user1);
console.log(user1.name);
// one way to create objects but there is a better way if we wanna create a lot of objects

const date = new Date(); //Date is an Object
console.log(date);
console.log(date.getDay());
console.log(date.getMonth());

// the new way we use a constructor function inside a constructor we can use this
function FunctionNameInCapital1(name, age) {
  return { name: name, age: age, extra: true };
}
const user2 = new FunctionNameInCapital1("Ku", 20);
console.log(user2);

function FunctionNameInCapital2(name, age) {
  //   this = {} when constructoris made it makes a empty object inside it anything we do inside will be stored in this so we can just return this for anything
  this.name = name;
  this.age = age;
  return this;
}
const user3 = new FunctionNameInCapital2("Norbert", 20);
console.log(user3);
console.log(user3.name);

class FunctionNameInCapital3 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  printstuff() {
    console.log(`The age is : ${this.age}`);
  }
}
const user4 = new FunctionNameInCapital3("Hati", 24);
console.log(user4);
console.log(user4.name);
user4.printstuff();

// mostly all of this will be used in Dates
