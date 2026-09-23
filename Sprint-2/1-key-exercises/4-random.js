const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?

// Try breaking down the expression and using documentation to explain what it means
//math.floor rounds down the whole number
//math.random generates a random number between 0 and 1
//max - min +1 =98
//add 1
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
console.log(num)