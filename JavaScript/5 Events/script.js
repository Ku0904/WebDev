// attachEvent()
// jQuery -on
// these were used in old times
// document.querySelector("#owl").onclick = function () {
//   alert("owl clicked");
// };
// document.getElementById("owl").onclick = () => {
//   alert("owl clicked"); this will provide less features
// };

// we can use on click events as well

// event properties:- type, timestamp, defaultPrevented, target, toElement, srcElement, currentTarget, clientX, clienty, screenX, screenY, altkey, ctrlkey, shiftkey, keyCode

document.getElementById("images").addEventListener(
  "click",
  function (event) {
    console.log("clicked inside the ul");
  },
  false
);
document.getElementById("owl").addEventListener(
  "click",
  function (event) {
    console.log("owl bro damn");
    event.stopPropagation(); // to prevent propagation
  },
  false
);

// event propagation :- false(event bubbling) true(event capturing)

// document.getElementById("images").addEventListener(
//   "click",
//   function (event) {
//     console.log("clicked inside the ul");
//   },
//   true
// );
// document.getElementById("owl").addEventListener(
//   "click",
//   function (event) {
//     console.log("owl bro damn");
//   },
//   true
// );

document.getElementById("google").addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  console.log("google click");
});

document.querySelector("#images").addEventListener("click", function (event) {
  // console.log(event.target.parentNode);
  // let RemoveIt = event.target.parentNode;
  // RemoveIt.remove(); 1st method
  // RemoveIt.parentNode.removeChild(RemoveIt); 2nd method

  console.log(event.target.tagName);
  if (event.target.tagName === "IMG") {
    console.log(event.target.id);
    let RemoveIt = event.target.parentNode;
    RemoveIt.remove();
  }
});
