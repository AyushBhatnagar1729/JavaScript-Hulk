let score = 33
let scoreS = "33"
let scoreN = "33abc" // It will give NaN
let scoreNU = null  // It will give 0 on conversion to Number
let scoreU = undefined // It will give NaN
let scoreB = false

console.log(typeof score);

let valueInNumber1 = Number(score)
let valueInNumber2= Number(scoreS)
let valueInNumber3 = Number(scoreN)
let valueInNumber4 = Number(scoreNU)
let valueInNumber5 = Number(scoreU)
let valueInNumber6 = Number(scoreB)

//console.table([valueInNumber1, valueInNumber2, valueInNumber3, valueInNumber4, valueInNumber5, valueInNumber6])

// ******************** Operations *********************
let value = 3
let negValue = -value

//console.log(negValue);

let str1 = "Ayush"
let str2 = "Bhatnagar"

let str3 = str1 + str2
console.log(str3)

/* Below is not a good coding practice
always try to use () to enclose the operation 
and avoid confusion
*/
console.log(1 + "2");  // 12
console.log("1" + 2);  // 12
console.log("1" + 2 + 2);  // 122
console.log(1 + 2 + "2");  // 32


/* Unary operators conver all non number types
to number types by using valueOf or toString method
of object. */

/* Another bad practice*/
//let num1, num2, num3 
//num1 = num2 = num3 = 2+2

// It can be written like this
let result = 2 + 2;
let num1 = result;
let num2 = result;
let num3 = result;

// Prefix = first execute the expression then assign
// Postfix = first assign then execute the expression

