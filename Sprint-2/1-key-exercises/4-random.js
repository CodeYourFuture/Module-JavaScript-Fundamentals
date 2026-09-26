const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
console.log(num);
// num is a random whole number between minimum and maximum.
// Math.random() returns a number that's greater than or equal to 0 and less than 1.
/*Then we multiply by (maximum - minimum + 1) to get a range of possible values, which means 
  all the values num could end up being. In this program, num can be any whole number from 1 to 100, inclusive
  so both 1 and 100 are possible.*/
// Math.floor(...) turns that into a whole number.
// Finally, we add minimum so the number starts at minimum instead of 0.
