// ARRAY METHODS //

let numbersLine = ['001', '002', '003', '004'];

// SHIFT
// we can use the shift method to remove an element from the line
numbersLine.shift() // '002', '003', '004'
let nextPerson = numbersLine.shift();

// UNSHIFT
// is used to add an elements from the beginning
numbersLine.unshift('VIP', 'VIP') // 'VIP', 'VIP', '002', '003', '004';