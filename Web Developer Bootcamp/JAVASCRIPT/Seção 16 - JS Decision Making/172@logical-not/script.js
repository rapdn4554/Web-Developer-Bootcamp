// LOGICAL NOT //
// if some result was true, it's not now

// we use the simbol "!" to define it
false // false
!false // true
!!false // false

const name = prompt("Enter your Username!");

if (!name) {
    name = prompt("TRY AGAIN!")
}