const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// 1. num is a variable that stores the final result of the expression assigned to it.
// 2. The Math.random() method returns a pseudo-random floating number between 0(inclusive) and 1(exclusive).
// 3. The Math.floor() method round a decimal number down to a whole number.
// 4. (maximum - minimum + 1) calculates how many possible whole numbers there are. 
//    Java Script evaluates the expressions inside the inner parentheses first. 
//    + minimum adds 1 to move the range from 0 to the minimum 1. 