// const sayDate = function (str) {
//   console.log(str, Date.now());
// };
// const intervalID = setInterval(sayDate, 1000, "hello there");
// clearInterval(intervalID);

const sayStr = function (str) {
  console.log(str);
};
let Set;
document.querySelector("#start").addEventListener("click", function (event) {
  Set = setInterval(sayStr, 1000, "hello");
  console.log("started");
});
document.querySelector("#stop").addEventListener("click", function (event) {
  clearInterval(Set);
  console.log("stopped");
});
