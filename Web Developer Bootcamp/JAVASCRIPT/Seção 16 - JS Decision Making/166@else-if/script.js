// ELSE IF //
// if the "if condition" isn't correct, make this...

// let x = 7;

// if (x <= 5) {
//     console.log("Your Number is Less or Equals than 5");
// }

// // sintax: else if.[condition]{[is going to]}
// else if (x > 5) {
//     console.log("Your Number is greater than 5");
// }

let age = Math.floor(Math.random()*20)+1;

if (age <= 7) {
    console.log("You can't play here");
    console.log(age);
}
else if (age <= 14) {
    console.log("You can play here");
    console.log(age);
}
else if (age > 14) {
    console.log("Go to another ride");
    console.log(age);
}