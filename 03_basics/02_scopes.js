var c = 300
let a = 200

{}      //this is scope : loops,if-else,functions

if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER: ", a);
}

console.log(a);
console.log(b);
console.log(c);

//scope level and mini hoisting

function one() {
    const username = "rohit"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    console.log(website);
    
    two()
}
one()


if (true) {
    const username = "rohit"
    if (username === "rohit") {
        const website = "youtube"
        console.log(username + website);
    }
    console.log(website);
}

console.log(username);


//++++++++++++++++++++++  Interesting  ++++++++++++++++++++

console.log(addone(5));

function addone(num){
    return num + 1
}


addtwo(5)
const addtwo = function(num){
    return num + 2
}