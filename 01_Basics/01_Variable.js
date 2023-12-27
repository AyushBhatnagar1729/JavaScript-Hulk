// Value of a constant variable can never be updated
const accountId = 144523
let accountEmail = "ayush@google.com"

/* Prefer not to use var because of issue in block and 
funcitonal scope */
var accountPassword = "12345"  

/* Though it will not give error but it's not a good practice */
accountCity = "Jaipur"

/* Only declared not initialized, if we try to use it then 
it will return "Undefined" */
let accountState;

//accountId = 2  // Not allowed

accountEmail = "ab@google.com"
accountPassword = "883938"
accountCity = "Hyderabad"

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity])