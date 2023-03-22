// LOGICAL OPERATORS // 
// allow us to combine different expressions

// AND
// operator: &&

// the only way to get the "true" result are with a true value in the 2 sides of &&
true && true // true
false && false // false
false && true // false
true && false // false

const password = prompt("Enter a Password");

if (password.length >= 6 && password.indexOf(' ') == -1) {
    console.log("VALID PASSWORD!");
} else {
    console.log("NOT A VALID PASSWORD")
}