const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// math.floor will make the number as a whole and remove any decimals or more likely to round the the nearest whole number
// math.random returns a random number in [0,1) 
// (maximum - minimum + 1) provide a range of generated random number 
// num is a random whole number [1,100]
console.log(num);