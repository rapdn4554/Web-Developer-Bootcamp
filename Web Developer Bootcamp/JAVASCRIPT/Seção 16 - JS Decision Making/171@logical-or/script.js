// LOGICAL OPERATORS // 
// allow us to combine different expressions

// OR
// operator: ||

// the "true" is defined if one of sides are true
true || true // true
false || true // true
true || false // true
false || false // false

const age = prompt("Enter your Age!")

if (age >= 0 && age <= 5 || age > 65 && age <= 120) {
    console.log("You can enter for free!")
} else if (age > 5 && age <= 10) {
    console.log("You will pay $10")
} else if (age > 10 && age <= 65) {
    console.log("You will pay $20")
} else if (age < 0) {
    console.log("You are not exists")
} else {
    console.log("You are dead!")
}