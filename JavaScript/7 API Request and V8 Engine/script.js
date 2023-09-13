const requestURL = "https://api.github.com/users/ku0904";
const xhr = new XMLHttpRequest(); // XMLHttpRequest is an object
xhr.open("GET", requestURL);
xhr.onreadystatechange = function () {
  // with this function it notes every change in state
  console.log(xhr.readyState); // state changes with time we have noted a state on a single point
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText); // cause we want responseText in this context
    console.log(data);
    console.log(typeof data);
    console.log(data.login); // not getting reponse cause it is a string so we need to convert const data = this.responseText; in object/json
    console.log(data.avatar_url);
  }
};
xhr.send();

// js runs on V8 engine in chrome which is made with c++
