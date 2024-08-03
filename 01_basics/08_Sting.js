let name = "Rohit"
let repoCount = 1

// console.log(name + repoCount + "value");//this is an outdated systax of writing string

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //this is the modern syntax

const game = new String('Rohitrm')

console.log(game); // when this run in the console ,all the string methods are show

console.log(game[0]);
console.log(game.__proto__);

// String methods/functions

console.log(game.length);
console.log(game.toUpperCase);
console.log(game.charAt(2));
console.log(game.indexOf('t'));

const newString = game.substring(0, 4)
console.log(newString);

const anotherString = game.slice(-8, 4)
console.log(anotherString);

const newStringOne = " Rohit   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rohit.in/rohit%20mondal"

console.log(url.replace('%20', '-'))
console.log(url.includes('hju'));
console.log(game.split(' '));

// go through the documentation of string topic for better understanding1 !