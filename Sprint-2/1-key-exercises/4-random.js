const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(num);
// This expression uses a function that returns a random number between (min)1 and (max)100.
// So every time I ran the program, it generated a different result (between 1 and 100).
// Math.random() gives a decimal between 0 < 1. I multiply it by 100 to stretch it out, then Math.floor() chops off the decimals
//  to make it a whole number. That gives me 0 to 99.
//  The minimum at the end just adds 1 to the whole thing, so now it goes from 1 to 100 instead of 0 to 99