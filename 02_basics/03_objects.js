// Singleton

//object literals
const mySym = Symbol("key1")

const Jsuser = {
    name: "Rohit",
    "full name": "Rohit Mondal",
    [mySym]: "mykey1",
    age: 22,
    location: "Kolkata",
    email: "rohitmond18@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// myArray = ["h", "i"]

console.log(Jsuser.email); //value access with .
console.log(Jsuser);
console.log(Jsuser["full name"]); // value access with []
console.log(Jsuser[mySym]);

Jsuser.email = "rohit@gmail.com"
// Object.freeze(Jsuser)
Jsuser.email = "rohit2@gmail.com"
console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello JS user");
}

console.log(Jsuser.greeting());
console.log(Jsuser.greeting);

Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(Jsuser.greetingTwo());
