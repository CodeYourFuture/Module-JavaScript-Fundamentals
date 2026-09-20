const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// math.floor round down to the nearest whole number e.g Math.floor(4.4) or Math.floor(4.8) will return 4
// math.ceil round up to the nearest whole number e.g Math.ceil(4.8) and Math.ceil(4.4) will return 5
// (maximum - minimum + 1) provide a range of generated random number 
// num is a random whole number [1,100]

console.log(Math.floor(4.8))
console.log(Math.floor(4.4))
console.log(Math.ceil(4.8))
console.log(Math.ceil(4.4))