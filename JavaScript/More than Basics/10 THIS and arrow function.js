// one of the ES6 new features
const user = {
    username : "somename",
    Number: 123456789,
    WelcomeMessage : function () {
        console.log(`welcome to website ${this.username}`);
        console.log(this); // tells us about the current context
    }
}
// anything we need to access inside user scope will have to use this
// this current context ko refer karta ha
user.WelcomeMessage()
user.username = "bruhman"
user.WelcomeMessage()
console.log(this); // inside node it refers to an empty object in browser its a global object

// function chai() {
//     console.log(this); 
// }
// chai()

// const chai = function () {
//     let UserName = "SomeName"
//     console.log(this.UserName); 
// }
// chai()

// function chai() {
//     let UserName = "SomeName"
//     console.log(this.UserName); 
// }
// chai()

/*------------------arrow function------------------*/
const chai = () => {
    let UserName = "SomeName"
    console.log(this.UserName); 
}
chai()

// in explicit return
const FunctionName1 = ( Num1 , Num2 ) => {
    return Num1 + Num2
}
console.log(FunctionName1(1,2));

// in implicit return 
const FunctionName2 = ( Num1 , Num2 ) =>   ( Num1 + Num2 )  // in implicit we don't need to use return
console.log(FunctionName2(1,2));

const FunctionName3 = ( Num1 , Num2 ) => ({ SomeName : "Kunal"})