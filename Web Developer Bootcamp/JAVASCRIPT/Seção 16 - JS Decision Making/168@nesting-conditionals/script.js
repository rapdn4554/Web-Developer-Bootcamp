// NESTING CONDITIONALS //

let password = prompt("Enter a Password!")

// 
if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log("Good Job!");
    }
    else {
        console.log("U cannot enter spaces here!")
    }
}
else {
    console.log("Your password is too short!")
}