// ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai1 = new User("chai", "chai@mail.com", "123");
console.log(chai1.encryptPassword());
console.log(chai1.changeUsername());

// Create an instance of the class using the keyword new and that class' name, followed by opening and closing parentheses, and optional arguments, based on how the class itself is defined
// if a class named Car doesn't take any arguments, you'd instantiate it like this: new Car()

// behind the scene
function userEg(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
userEg.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
userEg.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};
const chai2 = new userEg("chai", "chai@mail.com", "123");
console.log(chai2.encryptPassword());
console.log(chai2.changeUsername());

class Users {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends Users {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const chai = new Teacher("chai", "chai@teacher.com", "123");
chai.logMe();
const masalaChai = new Users("masala Chai");
masalaChai.logMe();

console.log(chai === masalaChai);
console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof Users);
