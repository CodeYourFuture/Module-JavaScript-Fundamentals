const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//num is a random, rounded down number between 100 and 1.
//math.floor rounds down.
//math.random gives a random number between 0 and 1. It can be equal to 0, but not equal to 1,
//(maximum - minimum + 1) gives in this case 100
//So then Math.random() * (maximum - minimum + 1) gives a number between 0 and 99
//Math.random() * (maximum - minimum + 1) gives a number between 1 and 100
//and thus Math.floor(Math.random() * (maximum - minimum + 1)) + minimum; gives a whole rounded 
//down number
