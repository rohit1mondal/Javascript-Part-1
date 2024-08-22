const user = {
    username: "rohit",
    price: 999,

    welcomeMessage: function(){ 
        console.log(`${this.username} , welcome to website`);  //this keyword refers current context
        console.log(this);
        
    }

}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);   //refer to empty object ,  // in the browser , this refers to window object


function chai(){
    let username = "rohit"
    console.log(this);
    console.log(this.username);
}
chai()

// Arrow function

const chai = () => {
    let username = "rohit"
    console.log(this);
    console.log(this.username);
}

chai()

// const addTwo = (num1, num2) => {              1st type of delclaration || Explicit return
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2    2nd type of declaration 

// const addTwo = (num1, num2) => (num1 + num2)     // 3rd type of declaration  || Implicit return

const addTwo = (num1, num2) => ({username: "rohit"}) 

console.log(addTwo(3, 4));



// const myArray = [2, 6, 4, 5, 3]

// myArray.forEach