const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
// Math.random() generates a decimal from 0 up to, but not including, 1.
// Multiplying by (maximum - minimum + 1) scales the range to 100 possible values.
// Math.floor() removes the decimal, and adding minimum shifts the result to an integer from 1 to 100.
