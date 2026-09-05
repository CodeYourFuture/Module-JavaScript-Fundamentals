const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
// num represents a random integer between the minimum and maximum values (inclusive).
// The expression Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive).
// By multiplying this value by (maximum - minimum + 1), we scale it to the desired range.
// The Math.floor() function then rounds this value down to the nearest whole number, ensuring we get an integer.
// Finally, we add the minimum value to shift the range to start from the minimum instead of 0.
