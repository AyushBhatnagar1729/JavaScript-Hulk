/* Relational operator 
<, >, <=, >=, ==, !=
*/

/* Compare only same type otherwise comparison operator
will give unpredictable result for different type
as some conversion of will take place from non number type
to number type*/
console.log(null == 0); // false
console.log(null >= 0); // true

console.log("ab23" > 22)  // false

// Strict Equal - check both value and type
console.log("23" === 23);  // false
