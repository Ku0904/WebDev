// it's an ES6 concept

function AddNumbers(a, b, c, ...other) {
  // ...other is rest operator receiving combined
  console.log(other);
  console.log(other[0]);
  return a + b + c;
}
const rest = AddNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(rest);

var names = ["william", "bruhman", "ku", "norbert", "kunal"];
function GetNames(name1, name2, name3, name4) {
  console.log(name1, name2, name3, name4);
}
// GetNames(names[0], names[1], names[2]); this is old way
GetNames(...names); // this is spread operator supplying combined

//Object ka sath -> rest
var Student = {
  name: "kunal",
  age: 20,
  hobbies: ["anime", "stuff", "idk maybe music"],
};
// const age = student.age;
const { name, age, ...otherObjects } = Student; // Object Destructuring Rest to specify the exact needs of object
console.log({ age });
console.log(otherObjects);

//Object ka sath -> spread
var NewStudent = {
  ...Student,
  ExtraKey: "ExtraValue",
};
console.log(NewStudent);
