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

console.table([valueInNumber1, valueInNumber2, valueInNumber3, valueInNumber4, valueInNumber5, valueInNumber6])
