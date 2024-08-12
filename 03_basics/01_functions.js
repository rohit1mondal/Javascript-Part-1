function sayMyName(params) {
    console.log("R");
    console.log("o");
    console.log("h");
    console.log("i");
    console.log("t");
}
sayMyName()

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}

function addTwoNumbers(number1, number2) {
    let result = number1 + number2
    return result
    console.log("Rohit");
    // return number1 + number2
}

const result = addTwoNumbers(3, 6)
console.log("Result: ", result);

function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("Rohit"));

function loginUserMessage(username){            //defau;t value :- " username = sam"
    if (!username) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage());


// 2nd part

function calculateCartPrice(...num1){           //1    //rest operator = {...  } 
    return num1
}

console.log(calculateCartPrice(200, 400, 600));

const user = {              //2
    username: "rohit",
    price: 555
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username:"rohi",
    price: 666
})

const myNewArray = [200, 400, 100, 300]         //3

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 300]));

