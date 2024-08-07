const tinderUser = new Object()
// const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUseer = {
    email: "rohit@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Rohit",
            lastname: "Mondal"
        }
    }
}
console.log(regularUseer.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: 'b'}
const obj2 = {3: "a", 4: 'b'}
const obj3 = {5: "a", 6: "b"}

// const obj4 = { obj1, obj2 }
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2}
console.log(obj4);

const user = [
    {
        id:1,
        email: "rohit@gmail.com"
    },
    {
        id:1,
        email: "rohit@gmail.com"
    },
    {
        id:1,
        email: "rohit@gmail.com"
    }
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
