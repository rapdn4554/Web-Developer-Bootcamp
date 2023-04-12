// REFERENCE TYPES & EQUALY TESTING

'hi' === 'hi' // true

// but with arrays...
['hi'] === ['hi'] // false
[1] === [1] // false

// why does it happen? JS are not comparing the contents, at least with arrays. It's comparing the references in memory

let numbers = [1, 2, 3];
let numbers2 = numbers; // [1, 2, 3]

numbers = numbers2 // true, they are pointing to the same thing in our memory