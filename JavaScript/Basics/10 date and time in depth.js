// date and time 
// date object
let Date1 = new Date();
console.log(Date1);// not readtable
console.log(Date1.toString());
console.log(Date1.toDateString());
console.log(Date1.toLocaleString());
console.log(Date1.toLocaleDateString());
console.log(Date1.toJSON());
console.log(Date1.toISOString());
console.log(typeof(Date1));

let Date2 = new Date(2023,0,23,5,2);
console.log(Date2.toLocaleString());

let Date3 = new Date("2023-01-14"); // we indians use mm/dd/yy
console.log(Date3.toLocaleString());
console.log(Date3.getTime());
console.log(Date3.getDate());
console.log(Date3.getDay());
console.log(Date3.getMonth());

let MyTimeStamp = Date.now();
console.log(MyTimeStamp);
console.log(Date.now());
console.log(Math.floor(Date.now()/1000));

// console.log(`${Date3.getDay()} and the time`);
Date3.toLocaleString('default',{
    weekday: "long"
})


