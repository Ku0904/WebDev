const User1 = new Object(); // singleton object
const User2 = {}; // non singleton object
const Guest = {
    FullName: {
        UserFullname:{
            firstname:"kunal",
            lastname:"rawat"
        }
    }
}
User1.name = "bruhman";
User1.email = "bruhman@gmail.com";

console.log(User1);
console.log(User2);
console.log(Guest);
console.log(Guest.FullName);
console.log(Guest.FullName?.UserFullname); // ? well know more about it in future

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {obj1 , obj2}
console.log(obj3);
const obj4 = Object.assign({},obj1,obj2) // {} extra parameter to get exact value
// {} is the source object all object are getting combined in this object were as otherwise all values will go to obj1
console.log(obj4);
const obj5 = {...obj1,...obj2} // modern way
console.log(obj5);

const user3 = [
    {
        name: "bruhman",
        age: 20
    },{
        name: "bruhman",
        age: 20
    },{
        name: "bruhman",
        age: 20
    },{
        name: "bruhman",
        age: 20
    }
]
console.log(user3[1].age);
console.log(Object.keys(User1)); // all keys will be returned in array and will be used a lot in arrays
console.log(Object.values(User1));
console.log(Object.entries(User1));
console.log(User1.hasOwnProperty('name'));
console.log(User1.hasOwnProperty('NotPresent'));