const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(num);

//math.floor is round down the number returns to largest integer less than or equal to a given number.
//math.random() could generate the number from 0 to <1 b random.
//maximum refer to 100 and minimum refer to 1.
//The calculation of num is different everytime because of math.random(). smallest value of num is 1. And largest is 100.
