const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//Solution
//- "num" represents a random whole number between 1 and 100.
//Break down of expression
//-Math.random: This generates a random decimal number between 0 and 1. It can return 0, but never reaches 1. (Example: 0.87).