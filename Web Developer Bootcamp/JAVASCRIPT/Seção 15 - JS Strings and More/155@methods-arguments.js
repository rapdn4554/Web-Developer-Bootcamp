// METHODS ARGUMENTS // 
// we can add the arguments to control how the method will behave 
// sintax: string.method(argument)

// INDEX OF
// is going to give us the string index, the positional number
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

let x = 'carmoto';

"x.indexOf('car')"
'0'

"x.indexOf('moto')"
'3'

"x.indexOf('%')"
'-1'

// SLICE
// extracts a section of a string and returns it as a new string, without modifying the original string
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

let y = "This is to easy!"

// sintax: string.slice(beginIndex[, endIndex])

"y.slice(5,7)"
'is'

"y.slice(-2)"
'y!'

// REPLACE
// replaces a string text to what we want
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

let z = "This is to easy!"

// sintax: string.replace(pattern, replacement)

"x.replace('This is','There are')"
'There are to easy!'