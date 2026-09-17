const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Print the random number to the console
console.log(num);

//num is a random whole number between 1 and 100.

//Math.random() creates a random decimal.
//Multiply by the range size.
// Math.floor() rounds down.
// Add minimum so it starts at 1.
