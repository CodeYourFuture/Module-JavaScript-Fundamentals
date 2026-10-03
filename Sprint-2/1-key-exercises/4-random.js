const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);
// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// 1. Math.random() produces a random decimal number in the range [0, 1).
// 0 is included, but 1 is not included.

// 2. Math.random() * (maximum - minimum + 1) produces a random decimal
// number in the range [0, 100), because maximum - minimum + 1 = 100.

// 3. Math.floor(Math.random() * (maximum - minimum + 1)) rounds the
// decimal number down and produces a random whole number from 0 to 99.

// 4. Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
// adds 1 to the result, producing a random whole number from 1 to 100.
