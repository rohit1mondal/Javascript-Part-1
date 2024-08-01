const accountId = 15542
let acccountEmail = "rohitmond18@gmail.com"
var accountPassword = "145213"
accountCity = "Kolkata"
let accountState;

// accountId = 223 // not allowed

acccountEmail = "abcv@gmail.com"
accountPassword = "564789"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId , acccountEmail, accountPassword , accountCity,accountState])

/*
prefer not to use var
because of issue in block scope and functional scope
*/