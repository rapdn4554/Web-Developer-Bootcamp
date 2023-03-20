// ELSE //
// is going to be the last part, last "conditional". If all of the other conditionals are false, "make it"

let rating = prompt("Rate Us!");

if (rating == 0) {
    console.log("WHAT MATTERS?!");
}
else if (rating == 1) {
    console.log("Ok. How can we be better?");
}
else if (rating == 2) {
    console.log("Maybe u can come on again. Ty!");
}
else if (rating == 3) {
    console.log("Nice! See you again!");
}
else if (rating == 4) {
    console.log("Thank You! Have a nice day!");
}
else if (rating == 5) {
    console.log("Woow! Thank you so much!");
}
else {
    console.log("Invalid Value! Try other number between 0 and 5. Ty!")
}
console.log(rating);