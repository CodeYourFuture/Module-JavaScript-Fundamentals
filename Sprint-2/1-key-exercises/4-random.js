const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
//num represents a randomly generated whole number between 1 and 100.

// Try breaking down the expression and using documentation to explain what it means
   // Math.random() generates a random decimal number greater than or equal to 0 and less than 1. Multiplying by 100 gives a number between 0 and up to, but not including 100.
   // Math.floor() always rounds down and returns the largest integer less than or equal to a given number in this case between 0 and 99. Finally, adding 1 changes the range to 1–100.
   // Math.floor(Math.random() * (maximum - minimum + 1)) 
   // Math.floor(Math.random() * (100 - 1 + 1))
   // Math.floor(Math.random() * 100)
   // Math.random give any random number between 0 to 1 example 0.225 * 100 = 22.5
   // Math.floor rounds that number to a whole number so 22.5 will become 22
   // (22) + minimum
   // 22 + 1 
   // 23 
   
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
