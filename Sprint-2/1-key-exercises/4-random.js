const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num)
// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// ANSWER
// num represents a random whole number in the range 0 - 100.
// math.random gives a random decimal between 0 and 1.math floor rounds the value to a whole number.
// (maximum - minimum + 1) evaluates the total count of integers. (+ minimum )adds 1 to the outcome.
// The code starts by evaluating math.random then multiply that by the maximum, math.floor will then round that value into a whole number then finally adding minimum to get num. 
