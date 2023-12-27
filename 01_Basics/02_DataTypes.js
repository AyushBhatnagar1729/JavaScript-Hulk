/* it will ask the compiler treat all JS code as newer version
NOTE: By default everything runs based on the new Syntax code
so no need to write this line*/
"use strict"; 


/* We are using nodejs, not browser, so it will not
work here */
//alert(3+3)

/*Types of data types(based on how data is stored in memory and 
    how data is accessed)
Primitive Data types:
    1. number ==> 2**53 range
    2. null ==> standalone value(it means empty)
    3. bigint
    4. boolean
    5. string
    6. symbol ==> used mostly in react to identify different components
    7. undefined ==> value is not assigned yet

Reference Data Type:
    1. Objects
    2. Array
    3. Functions
*/

let num = 54
let name = "Ayush"
let isLoggedIn = false
let city;

console.log(typeof name) // string
console.log(typeof null) // object
console.log(typeof city) // undefined
