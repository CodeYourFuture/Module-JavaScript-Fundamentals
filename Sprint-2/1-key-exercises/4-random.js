const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
<<<<<<< Updated upstream
// num is a random whole number between 1 and 100
=======

// Breakdown of: Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
//
// 1) (maximum - minimum + 1)
//    → 100 - 1 + 1 = 100
//    This is the count of whole numbers from minimum to maximum.
//
// 2) Math.random()
//    → a decimal number greater than or equal to 0 and less than 1
//    Example: 0.374
//
// 3) Math.random() * (maximum - minimum + 1)
//    → multiplies that decimal by 100
//    → a number from 0 up to 100 
//    Example: 0.374 * 100 = 37.4
//
// 4) Math.floor(...)
//    → rounds down to the nearest whole number
//    → gives 0, 1, 2, ... 99
//    Example: Math.floor(37.4) = 37
//
// 5) + minimum
//    → adds 1, so the range shifts from 0–99 to 1–100
//    Example: 37 + 1 = 38
//
// Final meaning:
// num is a random whole number between 1 and 100.
>>>>>>> Stashed changes
