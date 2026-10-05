const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
 
console.log(num);

// num is a random whole number between 1 and 100 (inclusive).
// Math.random() returns a decimal from 0 up to (but not including) 1.
// (maximum - minimum + 1) is the number of possible values (100),
// so multiplying gives a decimal from 0 up to (but not including) 100.
// Math.floor rounds down, giving a whole number from 0 to 99.
// Adding minimum shifts that range up to 1 to 100.