// MATH OBJECTS //
// included on the JavaScript, we have some properties and methods for matematical constants and functions
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math

// sintax: Math.property

// PI
"Math.PI"
'3.141592653589793'

// Absolute value
"Math.abs(-456)"
'456'

// Random Numbers
// the Math.randow will give us a random number beetwen 0 and 0.99...
// if we want a entire number, we can add some math in this, like the example:

const step1 = Math.random();

"step1"
'0.8975633661157925'

const step2 = step1 * 10;
"step2"
'8.975633661157925'

const step3 = Math.floor(step2);
"step3"
'8'

const step4 = step3 + 1;
"step4"
'9'

Math.floor(Math.random()*10) + 1; // random number