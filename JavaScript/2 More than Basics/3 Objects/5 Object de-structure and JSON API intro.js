// de-structuring to get values

const User1 = {
  name: "bruhman",
  age: 20,
  email: "bruhman@gmail.com",
  whereareyou: true,
  extra: ["1", "2"],
};

// user1.age; old way
const { age: RandomName } = User1; // new was and RandomName is optional
console.log(RandomName);

//  const NavBar = ({company}) => { }
//  NavBar(Company = "Name")

// {
//     "name": "something",
//     "price": "free"
//      Json file in example
// }
// Api will call this json file for data and convert it into an object
// we go to https://randomuser.me/api/ to get then use any json formatter to know more about that code
// Api can also be in form of array like [{},{},{}]

const meal = ["soup", "steak", "ice cream"];
let [starter] = meal;
console.log(starter);
// meal is defined with three elements
// a destructuring assignment is used to extract the first element of the array into a variable named starter
// The brackets ([]) on the left side of the assignment represent the destructuring syntax for arrays
