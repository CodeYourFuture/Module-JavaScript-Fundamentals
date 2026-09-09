const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// num is a random integer between the minimum and maximum values (inclusive) and is a calculated value from this clearly explained expression below.
// Try breaking down the expression and using documentation to explain what it means
/*The expresssion Math.random() generates a random floating-point number between 0 (inclusive) and 1 (inclusive). By multiplying this value by (maximum - minimum + 1), we scale it to the desired range. The Math.floor() function is then used to round down to the nearest whole number, and finally, we add the minimum value to shift the range to start from the minimum value instead of 0. The expected result is always a whole number between the minimum of 1 and the maximum of 101 (inclusive).*/
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
