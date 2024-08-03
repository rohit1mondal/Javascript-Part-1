//Dates

let mydate = new Date()

console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

// let myCreatedDate = new Date(2024, 5, 30)
let myCreatedDate = new Date(2024, 5, 30, 7, 6)
// let myCreatedDate = new Date("2024-05-30")
// let myCreatedDate = new Date("05-30-2024")
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getHours());


newDate.toLocaleString('default', {
    weekday: "long",
    // timeZone: 45
})