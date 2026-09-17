const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);
// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// num represents a random whole number between 1 and 100, including both 1 and 100.
// Math.random() generates a random number from 0 up to, but not including, 1.
// Multiplying by (maximum - minimum + 1) creates the required range.
// Math.floor() rounds the result down to a whole number.
// Adding minimum makes the final range start at 1.