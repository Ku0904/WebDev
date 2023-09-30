function SetUserName(username) {
  // Complex DB calls
  this.username = username;
  console.log("Called");
}
function CreateUser(username, email, password) {
  SetUserName.call(this, username);

  this.email = email;
  this.password = password;
}

const chai = new CreateUser("chai", "chain@ginger.com", "123");
console.log(chai);
// this is not calling username cause only reference is going of username in CreateUser
// we need to hold reference .call
