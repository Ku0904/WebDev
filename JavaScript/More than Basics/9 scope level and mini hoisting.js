// nested scope
function one() {
    const username = "bruhman";

    function two() {
        const website = "github"
        console.log(username);
    }// two() scope is only from  line 5 to line 8 
    // console.log(website);

    two()
}

one () // anything inside scope 2 will work in 1 cause (parent child relation)

if (true) {
    const username = "bruhman";
    if (username === "bruhman") {
        const website = "github"
        console.log(username + " " + website);
    }
    // console.log(website); error cause out of scope
}
// console.log(username); error cause out of scope

/*--------------------------interesting*--------------------------*/
// console.log(addone(4)); no error cause used before but not declaration
console.log(addone(4));
function addone(num) {
    return num + 1;
}
console.log(addone(4));
// console.log(addtwo(4)); error cause used before declared
const addtwo = function(num) {
    return num + 2;
}
console.log(addtwo(4));
