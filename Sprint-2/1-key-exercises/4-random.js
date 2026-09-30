const minimum = 1;
const maximum = 100;

const num = Math.floor(0.9185141991554047 * (maximum - minimum + 1)) + minimum;
console.log(num)
// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Math.floor() - rounds down to nearest integer
// Math.random() - gives a random number between [0,1)
// (max - min + 1) - 100
// simple bodmas

// example 
// math.random() =  0.9185141991554047
// num = 92