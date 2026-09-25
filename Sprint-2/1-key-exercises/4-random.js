const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

Math.random() gives you a random decimal between 0 and just-under-1 — like 0.628.... 
Then you multiply that by 100 (which is maximum - minimum + 1), stretching it out into a decimal between 0 and just-under-100. 
Math.floor() chops off everything after the decimal point, rounding down, you've got a whole number from 0 to 99.
 + minimum (which is +1) shifts the whole thing up by one, so instead of 0–99 you get 1–100.