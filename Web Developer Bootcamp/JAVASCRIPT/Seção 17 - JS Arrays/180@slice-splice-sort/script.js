// MORE ARRAY METHODS //

let colors = ['red', 'green', 'blue', 'yellow', 'purple', 'brown', 'orange', 'pink'];

// SLICE
// is a way to get a part od an array, a slide of an array
// sintax: [array's name].slice(?start, ?end)

let rgb = colors.slice(0, 3); // rgb = ['red', 'green', 'blue']

// we can use negative values and it starts from the end
let negative = colors.slice(-3) // negative = ['brown', 'orange', 'pink']

// SPLICE
// changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// sintax: [array's name].splice(start, ?deleteCount, ...items)

// removing
// indexOf 5, delete one element
colors.splice(5, 1) // ["indigo"] //was deleted

// adding
// indexOf 4, delete nothing
colors.splice(4, 0, 'violet')

// SORT
// will sorts the elements of an array in place and returns the sorted array
// we can put a function into this, because the default it's not interesting