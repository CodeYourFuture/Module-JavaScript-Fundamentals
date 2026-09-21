const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
//Math.floor is rounding down number from float number to integer
//Math.random create a random decimal number(float) from 0 up to 1 we then multiply it by (100) and add 1(minimum)
// variable num represents a random integer ranging from 1 to 100
console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
