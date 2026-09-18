const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num);
// what does num represent?
// num represents a random whole number (integer) between minimum (1) and maximum (100) inclusive.

//Breakdown of the expression:
// 1. Math.random() generates a decimal number from 0 (inclusive) up to, but not including, 1.
// 2. (maximum - minimum + 1) calculates the range size (100 - 1 + 1 = 100).
// 3. Math.random() * 100 scales the random decimal to a range between 0 and 99.999...
// 4. Math.floor() rounds that value down to the nearest whole integer (0 to 99).
// 5. + minimum (+ 1) shifts the final value up into the target range of 1 to 100. 
