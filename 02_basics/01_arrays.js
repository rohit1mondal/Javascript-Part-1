// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Iron Man", "Thor", "Doctor Strange"]

const myArr2 = new Array(1,"b", 8, 7)
// console.log(myArr2);


// Array methods

myArr.push(3)
// console.log(myArr);
myArr.pop()
// console.log(myArr);

myArr.unshift(7)
myArr.shift()

// console.log(myArr.includes(8));
// console.log(myArr.indexOf(4));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);


