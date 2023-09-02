const Coding = ["js", "ruby", "cpp", "python", "java"];
const value = Coding.forEach((item) => {
  console.log(item);
  return item;
});
console.log(value); // foreach don't return/store a value

const MyNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const NewNum = MyNum.filter((num) => num > 4);
// const NewNum = MyNum.filter((num) => {return num > 4}); this will give empty array if we don't use return
console.log(NewNum);

const NewNum1 = [];
MyNum.forEach((num) => {
  if (num > 4) {
    NewNum1.push(num);
  }
});
console.log(NewNum1);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 2000, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];
const UserBooks1 = books.filter((bk) => bk.genre === "History");
console.log(UserBooks1);
const UserBooks2 = books.filter((yr) => {
  return yr.publish >= 2000 && yr.genre === "History";
});
console.log(UserBooks2);

const NewNum2 = MyNum.map((num) => {
  return num + 10;
});
console.log(NewNum2);

// chaining
const NewNum3 = MyNum.map((num) => {
  return num * 10;
})
  .map((num) => {
    return num + 1;
  })
  .filter((num) => {
    return num >= 40;
  });
console.log(NewNum3);

// const initialValue = 0;
const NewNum4 = MyNum.reduce((accumulator, currentValue) => {
  console.log(
    `accumulator is ${accumulator} and currentValue is ${currentValue}`
  );
  return accumulator + currentValue;
}, 0); // giving initialValue (which is accumulator initialValue) = 0
console.log(NewNum4);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];
const priceToPay = shoppingCart.reduce((acc, item) => {
  console.log(`accumulator is ${acc} and currentValue is ${item.price}`);
  return acc + item.price;
}, 0);
console.log(priceToPay);
