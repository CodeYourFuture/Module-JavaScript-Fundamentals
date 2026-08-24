const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(num);

// following the order of operations, the expression inside the Math.floor() function is evaluated first
// Math.random() generates a random number between 0 and 1
// multiplying this by (maximum - minimum + 1) will give a number between 0 and 100
// moving out of the parentheses, the Math.floor() function rounds this number down to the nearest whole number
// adding the minimum value of 1 to this will give a number between 1 and 100

console.assert(num >= 1 && num <= 100);
console.assert(Number.isInteger(num));

// =========================>  Question for reviewer
// I think I understand what it does
// But I'd like to know when I might use the Math.random() function?
