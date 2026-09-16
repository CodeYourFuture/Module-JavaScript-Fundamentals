const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num);

// In this exercise, you will need to work out what num represents?

// Answer: num is represents a random integer inclusive between minimum and maximum 

// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Answers: const minimum = 1 (thats's the minimum number constent variable)
//          const maxiumum = 100 (that's the maxiumum number constant variable)
//          Math.random: generates a random decimal number between 0 and 1
//          (maximum - minimum + 1) Calculates the range of possible numbers (100 - 1 + 1=100)
//          Math.random() * (maximum - minimum + 1) scales a random decimal to range a between 0 and 99.99
//          Math.floor: Rounds the decimal down to the nearest whole interger (0 to 99)
//          + minimum: shifts the range up by 1, resulting in the whole number from 1 to 100


// Try logging the value of num and running the program several times to build an idea of what the program is doing
// ran a console.log and the num value returned randomly each time 