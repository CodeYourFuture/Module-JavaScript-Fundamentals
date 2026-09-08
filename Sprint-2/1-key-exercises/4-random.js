const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//num represents a random whole number between 1 and 100
// Math.random() produces a random decimal from 0 up to 1 .
// Math.random() * 100 produces a decimal from 0 up to 100.
// Math.floor() rounds the number down to a whole number, giving 0–99.
// +minimum (+1) shifts that range to 1–100.
