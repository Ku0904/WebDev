// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value
// Promise is also an Object and promise reduce callback hell

const PromiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, newwork
  setTimeout(() => {
    console.log(`Async task is complete`);
    resolve(); // this will connet it to .then
  }, 1000);
});
PromiseOne.then(() => {
  console.log(`Promise Consumed`);
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log(`Async task 2`);
  }, 1000);
}).then(function () {
  console.log(`Async 2 is resolved`);
});

const PromiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`Async task 2`);
  }, 1000);
}).then(() => {
  console.log(`Async 2 is resolved`);
});

const PromiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Bunty", emial: "halwa@example.com" });
  }, 1000);
});
PromiseThree.then(function (user) {
  console.log(user);
});

const PromiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false; // true will give error
    if (!error) {
      resolve({ username: "Bunty", emial: "halwa@example.com" });
    } else {
      reject("ERROR: Something Went Wrong");
    }
  }, 1000);
});
// const username = PromiseFour.then(function (user) {
//   console.log(user);
//   return user.username;
// });
// console.log(username); this is not the right way to get username
PromiseFour.then(function (user) {
  console.log(user);
  return user.username;
})
  .then(function (username) {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("the promise is either resolved or rejected");
  });

const PromiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "JavaScript", emial: "halwa@example.com" });
    } else {
      reject("ERROR: JS Went Wrong");
    }
  }, 1000);
});
async function ConsumePromiseFive() {
  try {
    const response = await PromiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
// trycatch to make error more simple
ConsumePromiseFive();

async function GetAllUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error: ", error);
  }
}
GetAllUser();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
