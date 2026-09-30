const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
console.log(num);
// num is a random whole number between minimum and maximum.
// Math.random() returns a number that's greater than or equal to 0 and less than 1.
// Multiplying by 100 gives a value from 0 (inclusive) up to 100 (exclusive).
// Math.floor(...) makes that an integer from 0 to 99.
// Adding minimum (1) shifts the result to an integer from 1 to 100, inclusive.
