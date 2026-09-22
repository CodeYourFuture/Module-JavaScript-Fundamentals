const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// In this exercise, num represent the value integer number between 1 to 100.
//Math.random generates a random decimal number from 0 up to 1, but not including, 1.
// down to the nearest whole number (integer).
//Running the program several times generate the whole number(integer) like (1,10,15,44,66,55) several times between 1 to 100 all 100 number has a equal 1% chance to appear(generate).
console . log (num)
//