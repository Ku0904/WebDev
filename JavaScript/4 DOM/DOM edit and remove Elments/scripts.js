function AddLanguage(LangName) {
  // created a function to addLanguage in li
  const Li = document.createElement("li");
  // created element named Li to save the result in it
  Li.innerHTML = `${LangName}`;
  // used to insert the LangName into the newly created list item
  document.querySelector(".Language").appendChild(Li);
}
AddLanguage("python"); // here we have to traverse the whole tree
AddLanguage("typescript");

function OptimizedAddLanguage(LangName) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(LangName));
  document.querySelector(".Language").appendChild(li);
}
OptimizedAddLanguage("JAVA");

// Edit
const secondLanguage = document.querySelector("li:nth-child(2)");
// secondLanguage.innerHTML = "<li>Mojo</li>"; not optimized approach
const NewLi = document.createElement("li");
NewLi.textContent = "Mojo";
secondLanguage.replaceWith(NewLi);

// Delete
const Nlanguage = document.querySelector("li:nth-child(4)");
Nlanguage.remove();
