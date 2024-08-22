// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {   //(parameter )
    // Unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('rohit');   //(arguments)

//(Function Defination)  (Function Call)

//uses of IIFE -  to reduce the pollution of global scope

