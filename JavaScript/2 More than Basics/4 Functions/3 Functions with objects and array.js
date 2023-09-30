// give function name according to there work
function CalculateCartPrice(value1, value2, ...num1) {
  // ...num1(rest operator ) to pass multiple values by taking them in an array
  return num1;
}
// console.log(CalculateCartPrice(2,4,6)); how to we pass more values
console.log(CalculateCartPrice(2, 4, 60, 80));

const user = {
  UserName: "bro",
  price: 0,
};
function HandleObject(AnyObject) {
  console.log(
    `username is ${AnyObject.UserName} and price is ${AnyObject.price}`
  ); // typechecking is important here if we write prices instead it will give undefined
}
HandleObject(user);
HandleObject({
  UserName: "bruhman",
  price: null,
});

const MyArray = [1, 2, 3, 4, 5, 6];
function HandleArray(SomeArray) {
  return SomeArray[2];
}
console.log(HandleArray(MyArray));
console.log(HandleArray([0, 1, 2, 4]));

const testArray = [1, 2, 3, 4, 5];
function returnArray(inputArray) {
  return inputArray;
}
console.log(returnArray(testArray));

function addNumbers1(a, b) {
  return a + b;
}
var sum1 = addNumbers1(3, 4); // sum will now be 7
function addNumbers2(a, b) {
  console.log(a + b);
}
var sum2 = addNumbers2(3, 4); // sum will now be undefined
console.log(sum1);
console.log(sum2);
