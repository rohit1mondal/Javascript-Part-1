// stack (primitive), Heap(Non-primitive)
//Stack = change in a copy value || Heap = change in the reference

let name = "Rohit"

let anothername = name
anothername = "hey"

console.log(name);
console.log(anothername);
 
let userOne = {
    email: "Roh@gamil.com",
    upi : "jhy@ybl"
}
let userTwo  = userOne

userTwo.email = "toh@gamil.com"

console.log(userOne.email);
console.log(userTwo.email);

//
