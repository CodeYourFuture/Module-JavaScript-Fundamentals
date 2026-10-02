const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);
// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
// 
//`num` represents a random integer between 1 and 100 (inclusive).
//
// Breakdown of the expression (from inside out):
// 1. Math.random() returns a decimal between 0 (inclusive) and 1 (exclusive).
// 2. (maximum - minimum + 1) = (100 - 1 + 1) = 100, the size of the range.
// 3. Multiplying them gives a decimal between 0 and 100 (not including 100).
// 4. Math.floor() rounds it down to a whole number between 0 and 99.
// 5. Adding `minimum` (1) shifts the range so the result is between 1 and 100.


