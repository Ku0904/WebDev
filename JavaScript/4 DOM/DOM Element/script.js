const parent = document.querySelector(".parent");
// in browser const par = document.querySelector("parent")
console.log(parent);
console.log(parent.children[1]);
console.log(parent.children[1].innerHTML);
for (let i = 0; i < parent.children.length; i++) {
  console.log(parent.children[i].innerHTML);
}
parent.children[1].style.color = "orange";
console.log(parent);
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

const dayOne = document.querySelector(".day");
console.log(dayOne);
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);

console.log("NODES: ", parent.childNodes);

const div = document.createElement("div");
console.log(div);
div.className = "main";
div.id = Math.round(Math.random() * 10 + 1);
div.setAttribute("title", "generated title");
div.style.backgroundColor = "green";
div.style.padding = "12px";
// this div will not show on page cause its only in memeory we need to attach it to the page
// div.innerText = "chai aur code";  generally this is avoided cause it overides the values from reference
const addText = document.createTextNode("chai aur code");
div.appendChild(addText);

document.body.appendChild(div); // to attach it to the page
