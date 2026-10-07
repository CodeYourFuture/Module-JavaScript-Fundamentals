const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(num)

// num in this case returns to us a random number when ran in the console
// Math.floor is used to round a number down to nearest integer 
// Math.random returns a random number between 0 and 1, and when multiplied by an exclusive number, say 10, then the Math.random function returns a number between 0 and 10
// the (Maximum - minimum + 1) is to calculate the size the numbers we want 
// + minimum at the end adds the minimum value back so that the selected number never goes below the minimum 