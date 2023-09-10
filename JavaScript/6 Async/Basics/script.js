const sayBruhman = function () {
  console.log("bruhman");
};
const ChangeText = function () {
  document.querySelector("h1").innerHTML = "Best Js Series";
};
setTimeout(sayBruhman, 2000); //setTimeout(handler,time) handler is a function always
const changeMe = setTimeout(ChangeText, 2000);

// clearTimeout(changeMe); this require reference of setTimeout
document.querySelector("#stop").addEventListener("click", function (event) {
  clearTimeout(changeMe);
  console.log("Stopped");
});
// now when I press stop it stops changing of the h1 innerHTML
