const name = "Ayush"
const repo = 50

// this way of defining is not recommended
console.log(name + repo + "value");

// IN modern JS, use template literal
console.log(`Hello my name is ${name} and my repo count is ${repo}`)

/* Behind the scenes this string will be stored as 
key-value pairs i.e. 
0:'A'
1:'Y'
2:'u'
3:'s'
4:'h'
5:'B' */
const gameName = new String("AYushB")