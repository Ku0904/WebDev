// for of loop
const arr = ["js" , "ruby" , "cpp" , "python" , "java" ];
for (const num of arr) { // here object is a very broad term
    console.log(num);
}
const greetings = "hello world";
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
}
// Maps
const map = new Map();
map.set('IN' , "India")
map.set('USA' , "United States of America")
map.set('FR' , "France")
console.log(map);
console.log(typeof(map));
for (const key of map) {
    console.log(key);
}
for (const [key , value] of map) {
    console.log(key , ':-' , value);
}
// different way to iterate object cause by defauld not iterable 
const MyObject = {
    'anime1' : 'Re:Zero',
    'anime2' : 'Konosuba',
    'anime3' : 'Shield Hero'
}
for (const [KEY,VALUE] of Object.entries(MyObject)) {
    console.log(KEY , ':-' , VALUE);
}

// for in loop
for (const key in MyObject) {
    console.log(`${key} is key and value is ${MyObject[key]}`);
}
for (const key in arr) {
    console.log(`${key} is key and value is ${arr[key]}`);
}
// for (const key in map) {
//     console.log(key); nothing cause not iterable
// }

// for each loop
arr.forEach( function (item) { // inter call back function
    console.log(item);
});
arr.forEach( (items) => {
    console.log(items);
} );
function PrintMe(item){
    console.log(item);
}
arr.forEach(PrintMe)
arr.forEach( (item,index,arr)=> {
    console.log(item,index,arr);
} )
const MyAnime = [
    {
    'anime1' : 'Re:Zero',
    'anime2' : 'Konosuba',
    'anime3' : 'Shield Hero',
    filename : "ayo"
    },
    {
    'anime4' : 'OverLord',
    'anime5' : 'Mushoku Tensei',
    'anime6' : 'Ascendance of a Bookworm',
    filename : "what the"    
    },
    {
    'anime7' : 'That Time I Got Reincarnated As A Slime',
    'anime8' : 'Uncle From Another World',
    'anime9' : 'The Eminence in Shadow',
    filename : "fck"   
    }
]
MyAnime.forEach( (item) => {
    console.log(item.filename);
} );